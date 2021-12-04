import { CustomersService } from 'src/customers/customers.service';
import { Customer } from 'src/customers/entities/customer.entity';
import { Repository } from 'typeorm';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { Subscription } from './entities/subscription.entity';
export declare class SubscriptionsService {
    private readonly subscriptionRepository;
    private readonly customersService;
    constructor(subscriptionRepository: Repository<Subscription>, customersService: CustomersService);
    private readonly logger;
    create(createSubscriptionDto: CreateSubscriptionDto): Promise<CreateSubscriptionDto>;
    findAll(): Promise<Subscription[]>;
    findOne(id: string): Promise<Subscription>;
    update(id: string, updateSubscriptionDto: UpdateSubscriptionDto): Promise<boolean>;
    handleSubscriptionExceptions(subscription: Subscription): void;
    handleDuplicateSubscription(customer: Customer, subscription: CreateSubscriptionDto): void;
    remove(id: string): string;
}
