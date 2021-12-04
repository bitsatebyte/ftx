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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscription = void 0;
const openapi = require("@nestjs/swagger");
const appointment_type_1 = require("../../appointments/types/appointment.type");
const customer_entity_1 = require("../../customers/entities/customer.entity");
const typeorm_1 = require("typeorm");
let Subscription = class Subscription {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, customer: { required: true, type: () => require("../../customers/entities/customer.entity").Customer }, startDate: { required: true, type: () => Date }, endDate: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, subscriber: { required: true, type: () => Object }, subscriptionType: { required: true, type: () => Object }, default: { required: false, type: () => Object }, budget: { required: true, type: () => Number }, custom: { required: false, type: () => Object }, time: { required: true, type: () => String } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Subscription.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customer_entity_1.Customer, (customer) => customer.subscriptions, {
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'customer_id' }),
    __metadata("design:type", customer_entity_1.Customer)
], Subscription.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'start_date' }),
    __metadata("design:type", Date)
], Subscription.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'end_date' }),
    __metadata("design:type", Date)
], Subscription.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Subscription.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('jsonb'),
    __metadata("design:type", String)
], Subscription.prototype, "subscriber", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'subscription_type' }),
    __metadata("design:type", String)
], Subscription.prototype, "subscriptionType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb', nullable: true }),
    __metadata("design:type", Object)
], Subscription.prototype, "default", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Subscription.prototype, "budget", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb', nullable: true }),
    __metadata("design:type", Object)
], Subscription.prototype, "custom", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Subscription.prototype, "time", void 0);
Subscription = __decorate([
    (0, typeorm_1.Entity)()
], Subscription);
exports.Subscription = Subscription;
//# sourceMappingURL=subscription.entity.js.map