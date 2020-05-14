import { Mapper } from '@micro/kernel/lib/infraestructure';
import { CountryRepository, Country } from '@domain/index';
import { CountryModel } from '@infraestructure/database/models';
import { CountryMapper } from '@infraestructure/mappers';

export class CountryRepositoryImpl implements CountryRepository {
  private mapper: Mapper<Country>;

  constructor() {
    this.mapper = new CountryMapper();
  }

  async findAll(): Promise<Country[]> {
    const data = await CountryModel.findAll();

    return data.map(r => this.mapper.toDomain(r));
  }

  async findByIso(iso: string): Promise<Country> {
    const item = await CountryModel.findOne({ where: { iso } });
    return this.mapper.toDomain(item);
  }

  async exists(iso: string): Promise<boolean> {
    const result = await CountryModel.findOne({ where: { iso } });

    return !!result === true;
  }

  async save(country: Country): Promise<void> {
    const exists = await this.exists(country.iso);

    if (exists) {
      await this.update(country);
    } else {
      await this.create(country);
    }
  }

  async create(country: Country): Promise<void> {
    await CountryModel.create(this.mapper.toPersistence(country));
  }

  async update(country: Country): Promise<void> {
    await CountryModel.update(this.mapper.toPersistence(country), {
      where: { id: country.id.toValue() },
    });
  }

  async delete(iso: string): Promise<void> {
    await CountryModel.destroy({
      where: { iso },
    });
  }
}
