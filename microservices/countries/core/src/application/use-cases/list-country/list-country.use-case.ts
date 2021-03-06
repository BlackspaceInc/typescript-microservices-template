/* eslint @typescript-eslint/no-non-null-assertion: 0 */

import {
  UseCase,
  UseCaseUnexpectedError,
  Transform,
} from '@micro/kernel/lib/application';
import { Either, Result } from '@micro/kernel/lib/result';
import { CountryRepository, Country } from '../../../domain';
import { IsoDto, CountryDto } from '../../dtos';
import { CountryTransform } from '../../transforms';

type Response<T> = Either<UseCaseUnexpectedError, T>;

export class ListCountryUseCase
  implements UseCase<IsoDto, Response<CountryDto[]>> {
  private repository: CountryRepository;
  private transform: Transform<Country, CountryDto>;

  constructor(repository: CountryRepository) {
    this.repository = repository;
    this.transform = new CountryTransform();
  }

  async execute(): Promise<Response<CountryDto[]>> {
    try {
      const countries = await this.repository.findAll();
      return Result.ok(this.transform.toCollection!(countries));
    } catch (err) {
      return Result.fail(UseCaseUnexpectedError.create(err));
    }
  }
}
