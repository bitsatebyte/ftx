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
exports.CreateSubscriptionDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const customer_entity_1 = require("../../customers/entities/customer.entity");
class CreateSubscriptionDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { endDate: { required: false, type: () => String }, budget: { required: true, type: () => Number }, subscriber: { required: false, type: () => Object }, subscriptionType: { required: true, type: () => Object }, default: { required: true, type: () => Object }, custom: { required: true, type: () => Object }, customerId: { required: true, type: () => Number }, customer: { required: true, type: () => require("../../customers/entities/customer.entity").Customer }, time: { required: true, type: () => String } };
    }
}
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateSubscriptionDto.prototype, "endDate", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateSubscriptionDto.prototype, "budget", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateSubscriptionDto.prototype, "subscriber", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['order', 'appointment']),
    __metadata("design:type", String)
], CreateSubscriptionDto.prototype, "subscriptionType", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", Object)
], CreateSubscriptionDto.prototype, "default", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateSubscriptionDto.prototype, "custom", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateSubscriptionDto.prototype, "customerId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", customer_entity_1.Customer)
], CreateSubscriptionDto.prototype, "customer", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSubscriptionDto.prototype, "time", void 0);
exports.CreateSubscriptionDto = CreateSubscriptionDto;
//# sourceMappingURL=create-subscription.dto.js.map