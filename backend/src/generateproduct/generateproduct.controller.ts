import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GenerateproductService } from './generateproduct.service';
import { CreateGenerateproductDto } from './dto/create-generateproduct.dto';
import { UpdateGenerateproductDto } from './dto/update-generateproduct.dto';

@Controller('generateproduct')
export class GenerateproductController {
  constructor(private readonly generateproductService: GenerateproductService) {}

  @Post()
  create(@Body() createGenerateproductDto: CreateGenerateproductDto) {
    return this.generateproductService.create(createGenerateproductDto);
  }

  @Get()
  findAll() {
    return this.generateproductService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.generateproductService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGenerateproductDto: UpdateGenerateproductDto) {
    return this.generateproductService.update(+id, updateGenerateproductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.generateproductService.remove(+id);
  }
}
