import { Customer } from 'src/customers/entities/customer.entity';
import { Item } from 'src/subscriptions/types/items.type';
import { OrderStatus } from '../types/order.status.type';
export declare class CreateOrderDto {
    customer?: Customer;
    readonly items: Array<Item>;
    readonly restaurant: string;
    readonly total: number;
    status: OrderStatus;
    readonly description?: string;
}
