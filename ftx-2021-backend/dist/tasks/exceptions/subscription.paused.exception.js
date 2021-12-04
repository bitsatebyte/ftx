"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionPausedException = void 0;
const common_1 = require("@nestjs/common");
class SubscriptionPausedException extends common_1.HttpException {
    constructor() {
        super('SubscriptionPaused', common_1.HttpStatus.FORBIDDEN);
    }
}
exports.SubscriptionPausedException = SubscriptionPausedException;
//# sourceMappingURL=subscription.paused.exception.js.map