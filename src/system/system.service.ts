import { Injectable } from '@nestjs/common';
import { CreateSystemDto } from './dto/create-system.dto';
import { UpdateSystemDto } from './dto/update-system.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { System } from './entities/system.entity';

@Injectable()
export class SystemService {
  constructor(@InjectRepository(System) private systemRepos: Repository<System>) { }

  create(createSystemDto: CreateSystemDto) {
    return this.systemRepos.save(createSystemDto);  
  }

  update(id: number, updateSystemDto: UpdateSystemDto) {
    return this.systemRepos.update(id, updateSystemDto);
  }

  findAll() {
    return this.systemRepos.find({ order: {name: 'ASC'}});
  }

  findOne(id: number) {
    return `This action returns a #${id} system`;
  }


  remove(id: number) {
    return `This action removes a #${id} system`;
  }
}
