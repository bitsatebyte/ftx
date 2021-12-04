import { Customer } from 'src/customers/entities/customer.entity';
import { AppointmentStatus } from '../types/appointment.status.type';
import { Attender } from '../types/attender.type';
import { Establishment } from '../types/establishment.type';
export declare class Appointment {
    id: number;
    customer: Customer;
    createdOn: Date;
    updatedOn: Date;
    date: Date;
    time: string;
    duration: number;
    establishment: Establishment;
    attender: Attender;
    status: AppointmentStatus;
    amount: number;
}
