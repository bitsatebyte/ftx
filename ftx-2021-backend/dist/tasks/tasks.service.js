"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TasksService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const create_order_dto_1 = require("../orders/dto/create-order.dto");
const orders_service_1 = require("../orders/orders.service");
const subscription_entity_1 = require("../subscriptions/entities/subscription.entity");
const subscriptions_service_1 = require("../subscriptions/subscriptions.service");
const items_type_1 = require("../subscriptions/types/items.type");
const subscription_expired_exception_1 = require("./exceptions/subscription.expired.exception");
const subscription_paused_exception_1 = require("./exceptions/subscription.paused.exception");
const order_status_type_1 = require("../orders/types/order.status.type");
const appointments_service_1 = require("../appointments/appointments.service");
const create_appointment_dto_1 = require("../appointments/dto/create-appointment.dto");
const appointment_type_1 = require("../appointments/types/appointment.type");
const establishment_type_1 = require("../appointments/types/establishment.type");
const lodash_1 = require("lodash");
let TasksService = TasksService_1 = class TasksService {
    constructor(ordersService, subscriptionsService, appointmentsService) {
        this.ordersService = ordersService;
        this.subscriptionsService = subscriptionsService;
        this.appointmentsService = appointmentsService;
        this.logger = new common_1.Logger(TasksService_1.name);
    }
    async handleCreateOrderCron() {
        const subscriptions = await this.subscriptionsService.findAll();
        if (!subscriptions.length)
            return;
        subscriptions.forEach(async (subscription) => {
            const { subscriptionType } = subscription;
            this.handleSubscriptionExceptions(subscription);
            if (subscriptionType === 'order') {
                const orderDto = this.prepareOrderEntity(subscription);
                this.logger.log(`Placing the order`);
                const order = await this.ordersService.create(orderDto);
                const budget = subscription.budget - order.total;
                await this.subscriptionsService.update(subscription.id, {
                    budget,
                    custom: null,
                });
                await this.orderProcessing(order.id, 'accepted');
                await this.orderProcessing(order.id, 'delivered');
            }
        });
    }
    async handleCreateAppointmentCron() {
        const subscriptions = await this.subscriptionsService.findAll();
        if (!subscriptions.length)
            return;
        subscriptions.forEach(async (subscription) => {
            const { subscriptionType } = subscription;
            try {
                this.handleSubscriptionExceptions(subscription);
            }
            catch (error) {
                this.logger.error(error.message);
                throw new common_1.NotAcceptableException(error.message);
            }
            if (subscriptionType === 'appointment') {
                const appointmentDto = this.prepareAppointmentEntity(subscription);
                this.logger.log(`booking the appointment`);
                const appointment = await this.appointmentsService.create(appointmentDto);
                const budget = subscription.budget - appointmentDto.amount;
                await this.subscriptionsService.update(subscription.id, {
                    budget,
                    custom: null,
                });
            }
        });
    }
    prepareOrderEntity(subscription) {
        let { customer, custom } = subscription;
        let defaultOrder = subscription.default;
        custom = custom;
        defaultOrder = defaultOrder;
        let restaurant = defaultOrder.restaurant;
        const items = [];
        if (!custom) {
            for (const key in defaultOrder.list) {
                items.push(defaultOrder.list[key]);
            }
        }
        else {
            for (const key in custom.list) {
                items.push(custom.list[key]);
            }
            restaurant = custom.restaurant;
        }
        const order = {
            customer,
            items,
            restaurant,
            total: 300,
            status: 'processing',
        };
        return order;
    }
    prepareAppointmentEntity(subscription) {
        let { customer, custom, time } = subscription;
        let defaultAppointment = subscription.default;
        custom = custom;
        defaultAppointment = defaultAppointment;
        let establishment, amount;
        if (!custom) {
            establishment = defaultAppointment.establishment;
            amount = defaultAppointment.total;
        }
        else {
            establishment = custom.establishment;
            amount = custom.total;
        }
        const appointment = {
            customer,
            establishment,
            time,
            amount,
            date: new Date(),
            duration: 60,
        };
        return appointment;
    }
    handleSubscriptionExceptions(options) {
        const { endDate, budget, subscriber } = options;
        const custom = options.custom;
        const defaultOrder = options.default;
        const subscriptionEndDate = new Date(endDate).getTime();
        const today = new Date().getTime();
        const hasSubscriptionExpired = subscriptionEndDate <= today;
        try {
            if (hasSubscriptionExpired || subscriber === 'cancelled')
                throw new subscription_expired_exception_1.SubscriptionExpiredException();
            if (subscriber === 'paused')
                throw new subscription_paused_exception_1.SubscriptionPausedException();
            if ((!(0, lodash_1.isEmpty)(custom) && custom.total > budget) ||
                defaultOrder.total > budget) {
                this.subscriptionsService.update(options.id, {
                    subscriber: 'cancelled',
                });
            }
        }
        catch (e) {
            throw new common_1.NotAcceptableException(e.message);
        }
    }
    async orderProcessing(id, status) {
        setTimeout(() => this.ordersService.update(id, { status }), 2000);
    }
};
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_30_SECONDS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TasksService.prototype, "handleCreateOrderCron", null);
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_30_SECONDS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TasksService.prototype, "handleCreateAppointmentCron", null);
TasksService = TasksService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [orders_service_1.OrdersService,
        subscriptions_service_1.SubscriptionsService,
        appointments_service_1.AppointmentsService])
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map