import { Repository } from 'typeorm';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { Appointment } from './entities/appointment.entity';
export declare class AppointmentsService {
    private appointmentRepository;
    constructor(appointmentRepository: Repository<Appointment>);
    create(createAppointmentDto: CreateAppointmentDto): Promise<Appointment>;
    findAll(): Promise<Appointment[]>;
    findOne(id: number): string;
    update(id: number, updateAppointmentDto: UpdateAppointmentDto): Promise<boolean>;
    remove(id: number): string;
}
