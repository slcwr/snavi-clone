import { Test, TestingModule } from '@nestjs/testing';
import { GenerateproductController } from './generateproduct.controller';
import { GenerateproductService } from './generateproduct.service';

describe('GenerateproductController', () => {
  let controller: GenerateproductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenerateproductController],
      providers: [GenerateproductService],
    }).compile();

    controller = module.get<GenerateproductController>(GenerateproductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
