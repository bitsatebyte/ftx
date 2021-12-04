import { Customer } from 'src/customers/entities/customer.entity';
import { AppointmentItem } from '../../appointments/types/appointment.type';
import { Items } from '../types/items.type';
import { Status } from '../types/status.type';
import { subscriptionType } from '../types/subscription.type';
export declare class CreateSubscriptionDto {
    endDate?: string;
    readonly budget: number;
    subscriber?: Status;
    readonly subscriptionType: subscriptionType;
    readonly default: Items | AppointmentItem;
    readonly custom: Items | AppointmentItem;
    customerId: number;
    customer: Customer;
    readonly time: string;
}
