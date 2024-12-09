import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'

import { Brand } from './brand/entities/brand.entity';
import { BrandModule } from './brand/brand.module';
import { Category } from './category/entities/category.entity';
import { CategoryModule } from './category/category.module';
import { Department } from './department/entities/department.entity';
import { DepartmentModule } from './department/department.module';
import { Equipment } from './equipment/entities/equipment.entity';
import { EquipmentModule } from './equipment/equipment.module';
import { Group } from './group/entities/group.entity';
import { GroupModule } from './group/group.module';
import { Issue } from './issue/entities/issue.entity';
import { IssueModule } from './issue/issue.module';
import { Machine } from './machine/entities/machine.entity';
import { MachineModule } from './machine/machine.module';
import { Machinegroup } from './machinegroup/entities/machinegroup.entity';
import { MachinegroupModule } from './machinegroup/machinegroup.module';
import { Part } from './part/entities/part.entity';
import { PartModule } from './part/part.module';
import { PartProfile } from './part_profile/entities/part_profile.entity';
import { PartProfileModule } from './part_profile/part_profile.module';
import { SubgroupModule } from './subgroup/subgroup.module';
import { TypeModule } from './type/type.module';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { System } from './system/entities/system.entity';
import { SystemModule } from './system/system.module';
import { Machinelog } from './machinelog/entities/machinelog.entity';
import { MachinelogModule } from './machinelog/machinelog.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '35.103232',
      database: 'cmms',
      entities: [ User, Issue, Department, Group, Equipment, Part, PartProfile, Category, Machine, Brand, Machinegroup, System, Machinelog ],
      autoLoadEntities: true,
      synchronize: true,
    }),
    BrandModule,
    CategoryModule,
    DepartmentModule,
    EquipmentModule,
    GroupModule,
    IssueModule,
    MachineModule,
    MachinegroupModule,
    PartModule,
    PartProfileModule,
    SubgroupModule,
    TypeModule,
    UserModule,
    SystemModule,
    MachinelogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {}
}
