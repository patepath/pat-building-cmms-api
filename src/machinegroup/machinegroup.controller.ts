import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { MachinegroupService } from './machinegroup.service';
import { CreateMachinegroupDto } from './dto/create-machinegroup.dto';
import { UpdateMachinegroupDto } from './dto/update-machinegroup.dto';

@Controller('machinegroup')
export class MachinegroupController {
  constructor(private readonly machinegroupService: MachinegroupService) {}

  @Post()
  create(@Body() createMachinegroupDto: CreateMachinegroupDto) {
    return this.machinegroupService.create(createMachinegroupDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMachinegroupDto: UpdateMachinegroupDto) {
    return this.machinegroupService.update(+id, updateMachinegroupDto);
  }

  @Get()
  findAll() {
    return this.machinegroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.machinegroupService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.machinegroupService.remove(+id);
  }
}
