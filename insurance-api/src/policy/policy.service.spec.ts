import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PolicyService } from './policy.service';
import { Policy } from './policy.entity';

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;

const mockPolicyRepository: MockRepository<Policy> = {
  find: jest.fn(),
  findOne: jest.fn(),
  save: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
};

describe('PolicyService', () => {
  let service: PolicyService;
  let repository: MockRepository<Policy>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PolicyService,
        {
          provide: getRepositoryToken(Policy),
          useValue: mockPolicyRepository,
        },
      ],
    }).compile();

    service = module.get<PolicyService>(PolicyService);
    repository = module.get(getRepositoryToken(Policy));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find all policies', async () => {
    const expectedPolicies = [];
    repository.find.mockResolvedValue(expectedPolicies);
    const policies = await service.findAll();
    expect(policies).toEqual(expectedPolicies);
  });

  it('should find a policy by id', async () => {
    const expectedPolicy = new Policy();
    repository.findOne.mockResolvedValue(expectedPolicy);
    const policy = await service.findOne(1);
    expect(policy).toEqual(expectedPolicy);
  });

  it('should create a policy', async () => {
    const policyToCreate = new Policy();
    const createdPolicy = new Policy();
    repository.save.mockResolvedValue(createdPolicy);
    const policy = await service.create(policyToCreate);
    expect(policy).toEqual(createdPolicy);
  });

  it('should update a policy', async () => {
    const policyToUpdate = new Policy();
    await service.update(1, policyToUpdate);
    expect(repository.update).toHaveBeenCalledWith(1, policyToUpdate);
  });

  it('should remove a policy', async () => {
    await service.remove(1);
    expect(repository.delete).toHaveBeenCalledWith(1);
  });
});
