import { Customer } from 'src/customers/entities/customer.entity';
import { AppointmentStatus } from '../types/appointment.status.type';
import { Attender } from '../types/attender.type';
import { Establishment } from '../types/establishment.type';
export declare class CreateAppointmentDto {
    customer?: Customer;
    readonly date: Date;
    readonly time: string;
    readonly duration: number;
    attender?: Attender;
    readonly establishment: Establishment;
    status?: AppointmentStatus;
    amount: number;
}
