import { Injectable } from '@nestjs/common';
import { CreateMachinelogDto } from './dto/create-machinelog.dto';
import { UpdateMachinelogDto } from './dto/update-machinelog.dto';
import { Machinelog } from './entities/machinelog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MachinelogService {
  constructor(@InjectRepository(Machinelog) private machinelogRepos: Repository<Machinelog>) { }

  create(createMachinelogDto: CreateMachinelogDto) {
    return this.machinelogRepos.save(createMachinelogDto);
  }

  update(id: number, updateMachinelogDto: UpdateMachinelogDto) {
    return this.machinelogRepos.update(id, updateMachinelogDto);
  }
  
  findById(id: number) {
    return this.machinelogRepos.findOne({where: {id: id}});
  }

  findAll() {
    return this.machinelogRepos.find({order: {id: 'DESC'}});
  }

  findByMachine(machineid: number) {
    let sql = `
      select 
        A.id as id,
        A.createddate,
        B.id as machineid,
        B.name as name,
        A.sn as sn,
        B.model as model,
        C.name as brand,
        A.location as location,
        A.contactname as contactname,
        A.contactphone as contactphone,
        A.description
      from machinelog as A
      left join machine as B on B.id=A.machineid
      left join brand as C on C.id=B.brandid
      where B.id=${machineid}
      order by A.createddate;
    `;

    return this.machinelogRepos.query(sql);
  }

  findByCategory(categoryid: number) {
    let sql = `
      select 
        A.id as id,
        A.createddate,
        B.id as machineid,
        B.name as name,
        A.sn as sn,
        B.model as model,
        C.name as brand,
        A.location as location,
        A.contactname as contactname,
        A.contactphone as contactphone,
        A.description
      from machinelog as A
      left join machine as B on B.id=A.machineid
      left join brand as C on C.id=B.brandid
      where B.machinegroupid=${categoryid}
    `;

    return this.machinelogRepos.query(sql);
  }

  findOne(id: number) {
    return `This action returns a #${id} machinelog`;
  }


  remove(id: number) {
    return `This action removes a #${id} machinelog`;
  }
}
