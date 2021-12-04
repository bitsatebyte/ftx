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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const appointment_entity_1 = require("./entities/appointment.entity");
let AppointmentsService = class AppointmentsService {
    constructor(appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }
    async create(createAppointmentDto) {
        createAppointmentDto.status = 'processing';
        const order = this.appointmentRepository.create(createAppointmentDto);
        try {
            const save = await this.appointmentRepository.save(order);
            return save;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async findAll() {
        try {
            const appointments = await this.appointmentRepository.find();
            if (!appointments) {
                throw new common_1.NotFoundException('Order not found');
            }
            return appointments;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    findOne(id) {
        return `This action returns a #${id} appointment`;
    }
    async update(id, updateAppointmentDto) {
        try {
            await this.appointmentRepository.update(id, updateAppointmentDto);
            return true;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    remove(id) {
        return `This action removes a #${id} appointment`;
    }
};
AppointmentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(appointment_entity_1.Appointment)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AppointmentsService);
exports.AppointmentsService = AppointmentsService;
//# sourceMappingURL=appointments.service.js.map