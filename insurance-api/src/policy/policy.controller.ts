import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { PolicyService } from './policy.service';
import { Policy } from './policy.entity';

@Controller('policies')
export class PolicyController {
  constructor(private readonly policyService: PolicyService) {}

  @Get()
  findAll() {
    return this.policyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.policyService.findOne(+id);
  }

  @Post()
  create(@Body() policy: Policy) {
    return this.policyService.create(policy);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() policy: Policy) {
    return this.policyService.update(+id, policy);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.policyService.remove(+id);
  }
}
