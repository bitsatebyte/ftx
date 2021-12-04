import { AppointmentItem } from 'src/appointments/types/appointment.type';
import { Customer } from 'src/customers/entities/customer.entity';
import { Items } from '../types/items.type';
import { Status } from '../types/status.type';
import { subscriptionType } from '../types/subscription.type';
export declare class Subscription {
    id: string;
    customer: Customer;
    startDate: Date;
    endDate: Date;
    updatedAt: Date;
    subscriber: Status;
    subscriptionType: subscriptionType;
    default?: Items | AppointmentItem;
    budget: number;
    custom?: Items | AppointmentItem;
    time: string;
}
