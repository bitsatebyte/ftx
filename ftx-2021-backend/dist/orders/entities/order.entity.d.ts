import { Customer } from 'src/customers/entities/customer.entity';
import { Item } from 'src/subscriptions/types/items.type';
import { OrderStatus } from '../types/order.status.type';
export declare class Order {
    id: number;
    customer: Customer;
    createdOn: Date;
    items: Array<Item>;
    restaurant: string;
    total: number;
    status: OrderStatus;
    description?: string;
}
