import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { MachineService } from './machine.service';
import { CreateMachineDto } from './dto/create-machine.dto';
import { UpdateMachineDto } from './dto/update-machine.dto';

@Controller('machine')
export class MachineController {
  constructor(private readonly machineService: MachineService) {}

  @Post()
  create(@Body() createMachineDto: CreateMachineDto) {
    return this.machineService.create(createMachineDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMachineDto: UpdateMachineDto) {
    return this.machineService.update(+id, updateMachineDto);
  }

  @Get()
  findAll() {
    return this.machineService.findAll();
  }

  @Get('findbyid/:id')
  findById(@Param('id') id: string) {
    return this.machineService.findById(+id);
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.machineService.findOne(+id);
  }

  @Get('/machinegroup/:machinegroupid')
  findByMachineGroup(@Param('machinegroupid') machineGroupId: string) {
    return this.machineService.findByMachineGroup(+machineGroupId);
  }

  @Get('/machinename/:name')
  findByMachineName(@Param('name') machineName: string) {
    return this.machineService.findByMachineName(machineName);
  }

//  @Get('findbysn/:sn')
//  findBySN(@Param('sn') sn: string) {
//    return this.machineService.findBySN(sn);
//  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.machineService.remove(+id);
  }
}
