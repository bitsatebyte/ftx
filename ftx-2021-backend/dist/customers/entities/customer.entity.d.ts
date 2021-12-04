import { Appointment } from 'src/appointments/entities/appointment.entity';
import { Order } from 'src/orders/entities/order.entity';
import { Subscription } from 'src/subscriptions/entities/subscription.entity';
export declare class Customer {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    walletBalance: number;
    subscriptions: Array<Subscription>;
    orders: Array<Order>;
    appointments: Array<Appointment>;
}
