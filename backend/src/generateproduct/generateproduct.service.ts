import { Injectable } from '@nestjs/common';
import { CreateGenerateproductDto } from './dto/create-generateproduct.dto';
import { UpdateGenerateproductDto } from './dto/update-generateproduct.dto';

@Injectable()
export class GenerateproductService {
  create(createGenerateproductDto: CreateGenerateproductDto) {
    return 'This action adds a new generateproduct';
  }

  findAll() {
    return `This action returns all generateproduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} generateproduct`;
  }

  update(id: number, updateGenerateproductDto: UpdateGenerateproductDto) {
    return `This action updates a #${id} generateproduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} generateproduct`;
  }
}
