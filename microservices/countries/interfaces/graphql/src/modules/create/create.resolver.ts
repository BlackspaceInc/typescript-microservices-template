import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateService } from './create.service';
import { CountryInput } from '../../models';

@Resolver()
export class CreateResolver {
  constructor(private readonly service: CreateService) {}

  @Mutation(returns => Boolean)
  async create(@Args('input') input: CountryInput) {
    return await this.service.execute(input);
  }
}
