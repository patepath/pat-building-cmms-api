import { Injectable } from '@nestjs/common';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateIssueDto } from './dto/update-issue.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Between, QueryBuilder, Repository } from 'typeorm';
import { Issue } from './entities/issue.entity';

interface RSCode {
  id: number;
}

@Injectable()
export class IssueService {

  private rs: CreateIssueDto;

  constructor(@InjectRepository(Issue) private issueRepos: Repository<Issue>) { }

  async create(createIssueDto: CreateIssueDto) {
    var year = new Date(String(createIssueDto.created)).getFullYear();
    var rs: RSCode[];

    await (this.generateCode(year, createIssueDto.type)).then(s => {
      let code='';

      if(s>0) {
        let running = '00000' + (Number(s + 1));
        code = `${year + 543}-${running.substring(running.length - 5)}`

      } else {
        code = `${year+543}-00001`;
      }

      if(createIssueDto.type == 1) {
        createIssueDto.code = `OP-${code}`;
      } else {
        createIssueDto.code = `PM-${code}`;
      }
    });

    return this.issueRepos.save(createIssueDto);
  }

  update(id: number, updateIssueDto: UpdateIssueDto) {
    return this.issueRepos.update(id, updateIssueDto);
  }

  async generateCode(year: number, type: number) {
    var sql = `
      SELECT code
      FROM issue
      WHERE year(created)=${year} AND type=${type}
      ORDER BY code DESC
      LIMIT 1;
    `
    var last: number

    await this.issueRepos.query(sql).then(s => {
      if(s.length>0) {
        last = Number(s[0].code.split('-')[1]);
      } else {
        last = 0;
      }
    });

    return last;
  }

//  generateCode(year: number, type: number) {
//    return this.issueRepos.query(`
//      select count(*) as id
//      from issue
//      where year(created)=${year} and type=${type}
//    `);
//  }

  findAll() {
    return this.issueRepos.find();
  }
  
  findNewToday(type: number) {
    return this.issueRepos.createQueryBuilder('issue')
    .leftJoinAndSelect('issue.equipment', 'equipment')
    .leftJoinAndSelect('equipment.group', 'group')
    .where('type=' + type + ' and date(created) = curdate() and status=1')
    .orderBy('issue.created', 'ASC')
    .getMany();
  }

  findProceeding(type: number) {
    return this.issueRepos.find({
      where: {
        type: type,
        status: 1
      }, 
      order: {created: 'ASC'}
    });
  }

  findProceedingByDate(type: number, frmDate: string, toDate: string) {
    let frm = new Date(frmDate);
    let to = new Date(toDate);

    frm.setDate(frm.getDate()-1)
    to.setDate(to.getDate()+1)

    return this.issueRepos.find({
      where: {
        type: type,
        created: Between(frm, to),
        status: 1
      }, 
      order: {created: 'ASC'}
    });
  }

  findWaitForClose(type: number) {
    return this.issueRepos.find({
      where: {
        type: type,
        status: 2
      },
      order: {created: 'ASC'}
    });
  }

  findCompleted(type: number) {
    return this.issueRepos.find({
      where: {
        type: type,
        status: 3
      },
      order: {created: 'ASC'}
    });
  }

  findCompletedByDate(type: number, frmDate: string, toDate: string) {
    let frm = new Date(frmDate);
    let to = new Date(toDate);

    frm.setDate(frm.getDate()-1)
    to.setDate(to.getDate()+1)

    return this.issueRepos.find({
      where: {
        type: type,
        created: Between(frm, to),
        status: 3 
      },
      order: {created: 'ASC'}
    });
  }

  findCancelled(type: number) {
    return this.issueRepos.find({
      where: {
        type: type,
        status: 0
      },
      order: {created: 'ASC'}
    });
  }

  findCancelledByDate(type: number, frmDate: string, toDate: string) {
    let frm = new Date(frmDate);
    let to = new Date(toDate);

    frm.setDate(frm.getDate()-1)
    to.setDate(to.getDate()+1)

    return this.issueRepos.find({
      where: {
        type: type,
        created: Between(frm, to),
        status: 0
      },
      order: {created: 'ASC'}
    });
  }

  findOne(id: number) {
    return this.issueRepos.findOne({
      where: { id: id}
    })
  }

  remove(id: number) {
    return `This action removes a #${id} issue`;
  }

  report1(frmdate: string, todate: string) {
    var query = `
      select A.type, count(*) as total
      from issue as A
      where date(created) between '${frmdate}' and '${todate}' 
      group by A.type
      order by total desc
    `;

    return this.issueRepos.query(query);
  }

  report2(type: number, frmdate: string, todate: string) {
    var query = `
      select B.name as deptname , count(*) as total
      from issue as A
      join department as B on A.departmentId=B.id
      where A.type=${type} and date(A.created) between '${frmdate}' and '${todate}' 
      group by A.departmentId 
      order by total desc
    `;

    return this.issueRepos.query(query);
  }

  report3(type:number, frmdate: string, todate: string) {
    var query = `
      select C.name as groupname, count(*) as total
      from issue as A
      join cmms.equipment as B on A.equipmentId=B.id
      join cmms.group as C on B.groupId=C.id
      where A.type=${type} and date(A.created) between '${frmdate}' and '${todate}' 
      group by C.name
      order by total desc
    `;

    return this.issueRepos.query(query);
  }

  report4(type: number, frmdate: string, todate: string) {
    var query = `
      select A.status as status, count(*) as total
      from issue as A
      where A.type=${type} and date(A.created) between '${frmdate}' and '${todate}' 
      group by A.status
      order by total desc
    `;

    return this.issueRepos.query(query);
  }
  
  report5(type: number, frmdate: string, todate: string) {
    var query = `
      select A.satisfication as satisfaction, count(*) as total
      from issue as A
      where A.type=${type} and date(A.created) between '${frmdate}' and '${todate}' 
      group by A.satisfication
      order by total desc
    `;

    return this.issueRepos.query(query);
  }
}

