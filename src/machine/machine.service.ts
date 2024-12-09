import { Injectable } from '@nestjs/common';
import { CreateMachineDto } from './dto/create-machine.dto';
import { UpdateMachineDto } from './dto/update-machine.dto';
import { Machine } from './entities/machine.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Like, Repository } from 'typeorm';

@Injectable()
export class MachineService {
  constructor(@InjectRepository(Machine) private machineRepos: Repository<Machine>) { }

  create(createMachineDto: CreateMachineDto) {
    return this.machineRepos.save(createMachineDto);
  }

  update(id: number, updateMachineDto: UpdateMachineDto) {
    return this.machineRepos.update(id, updateMachineDto);
  }

  findAll() {
    return this.machineRepos.find();
  }
  
  findById(id: number) {
    return this.machineRepos.findOne({where: {id:id}});
  }

  findOne(id: number) {
    return `This action returns a #${id} machine`;
  }

  findByMachineGroup(machineGroupId: number) {
    return this.machineRepos.find({where: {machineGroup: {id: machineGroupId}}})
  }

  findByMachineName(machineName: string) {
    return this.machineRepos.find({where : {name: Like(`%${machineName}%`)}, take: 20})
//    let sql = `
//      select A.id as id, A.name as name, B.name as groupname, C.name as categoryname 
//      from machine as A 
//      left join machinegroup as B on B.id=A.machinegroupid
//      left join system as C on C.id=B.systemid
//      where A.name like '%${machineName}%' 
//      group by name 
//      limit 20
//    `;
//
//    return this.machineRepos.query(sql);
  }

//  findBySN(sn: string) {
//    return this.machineRepos.find({where: {sn: Like(`${sn}%`)}, take: 20})
//  }

  remove(id: number) {
    return `This action removes a #${id} machine`;
  }
}
