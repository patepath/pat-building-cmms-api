import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandService {
  constructor(@InjectRepository(Brand) private brandRepos: Repository<Brand>) { }

  create(createBrandDto: CreateBrandDto) {
    return this.brandRepos.save(createBrandDto);
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    return this.brandRepos.update(id, updateBrandDto);
  }

  findAll() {
    return this.brandRepos.find({order: {name: 'ASC'}});
  }

  findOne(id: number) {
    return this.brandRepos.findOne({where: {id: id}})
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }
}
