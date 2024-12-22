import { PartialType } from '@nestjs/swagger';
import { CreateGenerateproductDto } from './create-generateproduct.dto';

export class UpdateGenerateproductDto extends PartialType(CreateGenerateproductDto) {}
