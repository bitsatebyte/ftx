"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetExceededException = void 0;
const common_1 = require("@nestjs/common");
class BudgetExceededException extends common_1.HttpException {
    constructor() {
        super('BudgetExceeded', common_1.HttpStatus.FORBIDDEN);
    }
}
exports.BudgetExceededException = BudgetExceededException;
//# sourceMappingURL=budget.exceeded.exception.js.map