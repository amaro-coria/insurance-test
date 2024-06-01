import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Policy } from './policy.entity';

@Injectable()
export class PolicyService {
  constructor(
    @InjectRepository(Policy)
    private policyRepository: Repository<Policy>,
  ) {}

  findAll(): Promise<Policy[]> {
    return this.policyRepository.find();
  }

  findOne(id: number): Promise<Policy> {
    return this.policyRepository.findOne({ where: { id } });
  }

  create(policy: Policy): Promise<Policy> {
    return this.policyRepository.save(policy);
  }

  async update(id: number, policy: Policy): Promise<void> {
    await this.policyRepository.update(id, policy);
  }

  async remove(id: number): Promise<void> {
    await this.policyRepository.delete(id);
  }
}
