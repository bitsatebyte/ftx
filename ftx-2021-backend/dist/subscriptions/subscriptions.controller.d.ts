import { SubscriptionsService } from './subscriptions.service';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
export declare class SubscriptionsController {
    private readonly subscriptionsService;
    constructor(subscriptionsService: SubscriptionsService);
    create(createSubscriptionDto: CreateSubscriptionDto): Promise<CreateSubscriptionDto>;
    findAll(): Promise<import("./entities/subscription.entity").Subscription[]>;
    findOne(id: string): Promise<import("./entities/subscription.entity").Subscription>;
    update(id: string, updateSubscriptionDto: UpdateSubscriptionDto): Promise<boolean>;
    remove(id: string): string;
}
