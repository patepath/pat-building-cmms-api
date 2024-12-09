import { Injectable } from '@nestjs/common';
import { CreateMachinegroupDto } from './dto/create-machinegroup.dto';
import { UpdateMachinegroupDto } from './dto/update-machinegroup.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Machinegroup } from './entities/machinegroup.entity';

@Injectable()
export class MachinegroupService {
  constructor(@InjectRepository(Machinegroup) private machinegroupRepos: Repository<Machinegroup>) { }

  create(createMachinegroupDto: CreateMachinegroupDto) {
    return this.machinegroupRepos.save(createMachinegroupDto);
  }

  update(id: number, updateMachinegroupDto: UpdateMachinegroupDto) {
    return this.machinegroupRepos.update(id, updateMachinegroupDto);
  }

  findAll() {
    return this.machinegroupRepos.find({order: {name: 'ASC'}});
  }

  findOne(id: number) {
    return this.machinegroupRepos.findOne({where: {id: id}});
  }

  findBySystem(systemId: number) {
    return this.machinegroupRepos.find({
      where: {system: {id: systemId}},
      order: {name: 'ASC'}
    });
  }

  remove(id: number) {
    return `This action removes a #${id} machinegroup`;
  }
}
