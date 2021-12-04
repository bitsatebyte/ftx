"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionExpiredException = void 0;
const common_1 = require("@nestjs/common");
class SubscriptionExpiredException extends common_1.HttpException {
    constructor() {
        super('SubscriptionExpired', common_1.HttpStatus.FORBIDDEN);
    }
}
exports.SubscriptionExpiredException = SubscriptionExpiredException;
//# sourceMappingURL=subscription.expired.exception.js.map