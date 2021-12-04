"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSubscriptionDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_subscription_dto_1 = require("./create-subscription.dto");
class UpdateSubscriptionDto extends (0, mapped_types_1.PartialType)(create_subscription_dto_1.CreateSubscriptionDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateSubscriptionDto = UpdateSubscriptionDto;
//# sourceMappingURL=update-subscription.dto.js.map