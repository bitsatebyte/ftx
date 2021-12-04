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
exports.Appointment = void 0;
const openapi = require("@nestjs/swagger");
const customer_entity_1 = require("../../customers/entities/customer.entity");
const typeorm_1 = require("typeorm");
let Appointment = class Appointment {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, customer: { required: true, type: () => require("../../customers/entities/customer.entity").Customer }, createdOn: { required: true, type: () => Date }, updatedOn: { required: true, type: () => Date }, date: { required: true, type: () => Date }, time: { required: true, type: () => String }, duration: { required: true, type: () => Number }, establishment: { required: true, type: () => Object }, attender: { required: true, type: () => Object }, status: { required: true, type: () => Object }, amount: { required: true, type: () => Number } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Appointment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customer_entity_1.Customer, (customer) => customer.appointments),
    (0, typeorm_1.JoinColumn)({ name: 'customer_id' }),
    __metadata("design:type", customer_entity_1.Customer)
], Appointment.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_on' }),
    __metadata("design:type", Date)
], Appointment.prototype, "createdOn", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_on' }),
    __metadata("design:type", Date)
], Appointment.prototype, "updatedOn", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Appointment.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Appointment.prototype, "time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Appointment.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)('jsonb'),
    __metadata("design:type", Object)
], Appointment.prototype, "establishment", void 0);
__decorate([
    (0, typeorm_1.Column)('jsonb', { nullable: true }),
    __metadata("design:type", Object)
], Appointment.prototype, "attender", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Appointment.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Appointment.prototype, "amount", void 0);
Appointment = __decorate([
    (0, typeorm_1.Entity)()
], Appointment);
exports.Appointment = Appointment;
//# sourceMappingURL=appointment.entity.js.map