import { PolicyService } from './policy.service';
import { Policy } from './policy.entity';
export declare class PolicyController {
    private readonly policyService;
    constructor(policyService: PolicyService);
    findAll(): Promise<Policy[]>;
    findOne(id: string): Promise<Policy>;
    create(policy: Policy): Promise<Policy>;
    update(id: string, policy: Policy): Promise<void>;
    remove(id: string): Promise<void>;
}
