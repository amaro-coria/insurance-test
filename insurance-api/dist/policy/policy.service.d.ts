import { Repository } from 'typeorm';
import { Policy } from './policy.entity';
export declare class PolicyService {
    private policyRepository;
    constructor(policyRepository: Repository<Policy>);
    findAll(): Promise<Policy[]>;
    findOne(id: number): Promise<Policy>;
    create(policy: Policy): Promise<Policy>;
    update(id: number, policy: Policy): Promise<void>;
    remove(id: number): Promise<void>;
}
