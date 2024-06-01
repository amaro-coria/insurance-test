import { Test, TestingModule } from '@nestjs/testing';
import { PolicyController } from './policy.controller';
import { PolicyService } from './policy.service';
import { Policy } from './policy.entity';

type MockPolicyService = Partial<Record<keyof PolicyService, jest.Mock>>;

const mockPolicyService: MockPolicyService = {
  findAll: jest.fn(),
  findOne: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
};

describe('PolicyController', () => {
  let controller: PolicyController;
  let service: MockPolicyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PolicyController],
      providers: [
        {
          provide: PolicyService,
          useValue: mockPolicyService,
        },
      ],
    }).compile();

    controller = module.get<PolicyController>(PolicyController);
    service = module.get(PolicyService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get all policies', async () => {
    const expectedPolicies = [];
    service.findAll.mockResolvedValue(expectedPolicies);
    const policies = await controller.findAll();
    expect(policies).toEqual(expectedPolicies);
  });

  it('should get a policy by id', async () => {
    const expectedPolicy = new Policy();
    service.findOne.mockResolvedValue(expectedPolicy);
    const policy = await controller.findOne('1');
    expect(policy).toEqual(expectedPolicy);
  });

  it('should create a policy', async () => {
    const policyToCreate = new Policy();
    const createdPolicy = new Policy();
    service.create.mockResolvedValue(createdPolicy);
    const policy = await controller.create(policyToCreate);
    expect(policy).toEqual(createdPolicy);
  });

  it('should update a policy', async () => {
    const policyToUpdate = new Policy();
    await controller.update('1', policyToUpdate);
    expect(service.update).toHaveBeenCalledWith(1, policyToUpdate);
  });

  it('should delete a policy', async () => {
    await controller.remove('1');
    expect(service.remove).toHaveBeenCalledWith(1);
  });
});
