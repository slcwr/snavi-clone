import { Module } from '@nestjs/common';
import { GenerateproductService } from './generateproduct.service';
import { GenerateproductController } from './generateproduct.controller';

@Module({
  controllers: [GenerateproductController],
  providers: [GenerateproductService],
})
export class GenerateproductModule {}
