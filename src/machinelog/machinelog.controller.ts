import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { MachinelogService } from './machinelog.service';
import { CreateMachinelogDto } from './dto/create-machinelog.dto';
import { UpdateMachinelogDto } from './dto/update-machinelog.dto';

@Controller('machinelog')
export class MachinelogController {
  constructor(private readonly machinelogService: MachinelogService) {}

  @Post()
  create(@Body() createMachinelogDto: CreateMachinelogDto) {
    return this.machinelogService.create(createMachinelogDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMachinelogDto: UpdateMachinelogDto) {
    return this.machinelogService.update(+id, updateMachinelogDto);
  }

  @Get('findbyid/:id')
  findById(@Param('id') id: string) {
    return this.machinelogService.findByMachine(+id);
  }

  @Get()
  findAll() {
    return this.machinelogService.findAll();
  }

  @Get('findbymachine/:machineid')
  findByMachine(@Param('machineid') machineid: number) {
    return this.machinelogService.findByMachine(+machineid);
  }

  @Get('findbycategory/:categoryid')
  findByCategory(@Param('categoryid') categoryid: number) {
    return this.machinelogService.findByCategory(+categoryid);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.machinelogService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.machinelogService.remove(+id);
  }
}
