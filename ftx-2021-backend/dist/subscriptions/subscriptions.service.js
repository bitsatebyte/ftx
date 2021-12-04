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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var SubscriptionsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const customers_service_1 = require("../customers/customers.service");
const customer_entity_1 = require("../customers/entities/customer.entity");
const typeorm_2 = require("typeorm");
const subscription_entity_1 = require("./entities/subscription.entity");
let SubscriptionsService = SubscriptionsService_1 = class SubscriptionsService {
    constructor(subscriptionRepository, customersService) {
        this.subscriptionRepository = subscriptionRepository;
        this.customersService = customersService;
        this.logger = new common_1.Logger(SubscriptionsService_1.name);
    }
    async create(createSubscriptionDto) {
        const { customerId } = createSubscriptionDto;
        const customer = await this.customersService.findOne(customerId);
        this.handleDuplicateSubscription(customer, createSubscriptionDto);
        createSubscriptionDto.customer = customer;
        const now = new Date();
        if (customer.walletBalance < createSubscriptionDto.budget) {
            throw new common_1.NotAcceptableException(`Wallet balance is low! Please recharge`);
        }
        const updatedWalletBalance = customer.walletBalance - createSubscriptionDto.budget;
        this.customersService.update(customerId, {
            walletBalance: updatedWalletBalance,
        });
        createSubscriptionDto.endDate = new Date(now.setDate(now.getDate() + 90)).toLocaleDateString();
        createSubscriptionDto.subscriber = 'active';
        delete createSubscriptionDto.customerId;
        const subscription = this.subscriptionRepository.create(createSubscriptionDto);
        try {
            await this.subscriptionRepository.save(subscription);
            return createSubscriptionDto;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async findAll() {
        try {
            const subscriptions = await this.subscriptionRepository.find();
            return subscriptions;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async findOne(id) {
        try {
            const subscription = this.subscriptionRepository.findOne(id);
            return subscription;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async update(id, updateSubscriptionDto) {
        try {
            const subscription = await this.subscriptionRepository.findOne(id);
            try {
                this.handleSubscriptionExceptions(subscription);
            }
            catch (error) {
                throw new common_1.NotAcceptableException(error.message);
            }
            await this.subscriptionRepository.update(id, updateSubscriptionDto);
            return true;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    handleSubscriptionExceptions(subscription) {
        try {
            if (!subscription) {
                throw new common_1.NotFoundException('Subscription not found');
            }
            if (subscription.subscriber === 'cancelled') {
                throw new common_1.ForbiddenException('Subscription is cancelled');
            }
        }
        catch (e) {
            throw new common_1.NotAcceptableException(e.message);
        }
    }
    handleDuplicateSubscription(customer, subscription) {
        const { subscriptions } = customer;
        const isDuplicate = subscriptions.find((sub) => sub.subscriptionType === subscription.subscriptionType &&
            sub.subscriber !== 'cancelled');
        if (isDuplicate)
            throw new common_1.NotAcceptableException('Subscription already exists');
    }
    remove(id) {
        return `This action removes a #${id} subscription`;
    }
};
SubscriptionsService = SubscriptionsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(subscription_entity_1.Subscription)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        customers_service_1.CustomersService])
], SubscriptionsService);
exports.SubscriptionsService = SubscriptionsService;
//# sourceMappingURL=subscriptions.service.js.map