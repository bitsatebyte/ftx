import { CreateOrderDto } from 'src/orders/dto/create-order.dto';
import { OrdersService } from 'src/orders/orders.service';
import { Subscription } from 'src/subscriptions/entities/subscription.entity';
import { SubscriptionsService } from 'src/subscriptions/subscriptions.service';
import { OrderStatus } from 'src/orders/types/order.status.type';
import { AppointmentsService } from 'src/appointments/appointments.service';
import { CreateAppointmentDto } from 'src/appointments/dto/create-appointment.dto';
export declare class TasksService {
    private readonly ordersService;
    private readonly subscriptionsService;
    private readonly appointmentsService;
    constructor(ordersService: OrdersService, subscriptionsService: SubscriptionsService, appointmentsService: AppointmentsService);
    private readonly logger;
    handleCreateOrderCron(): Promise<void>;
    handleCreateAppointmentCron(): Promise<void>;
    prepareOrderEntity(subscription: Subscription): CreateOrderDto;
    prepareAppointmentEntity(subscription: Subscription): CreateAppointmentDto;
    handleSubscriptionExceptions(options: Subscription): void;
    orderProcessing(id: number, status: OrderStatus): Promise<void>;
}
