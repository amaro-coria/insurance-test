"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolicyController = void 0;
const common_1 = require("@nestjs/common");
const policy_service_1 = require("./policy.service");
const policy_entity_1 = require("./policy.entity");
let PolicyController = class PolicyController {
    constructor(policyService) {
        this.policyService = policyService;
    }
    findAll() {
        return this.policyService.findAll();
    }
    findOne(id) {
        return this.policyService.findOne(+id);
    }
    create(policy) {
        return this.policyService.create(policy);
    }
    update(id, policy) {
        return this.policyService.update(+id, policy);
    }
    remove(id) {
        return this.policyService.remove(+id);
    }
};
exports.PolicyController = PolicyController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PolicyController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PolicyController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [policy_entity_1.Policy]),
    __metadata("design:returntype", void 0)
], PolicyController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, policy_entity_1.Policy]),
    __metadata("design:returntype", void 0)
], PolicyController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PolicyController.prototype, "remove", null);
exports.PolicyController = PolicyController = __decorate([
    (0, common_1.Controller)('policies'),
    __metadata("design:paramtypes", [policy_service_1.PolicyService])
], PolicyController);
//# sourceMappingURL=policy.controller.js.map