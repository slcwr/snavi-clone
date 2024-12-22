import { Test, TestingModule } from '@nestjs/testing';
import { GenerateproductService } from './generateproduct.service';

describe('GenerateproductService', () => {
  let service: GenerateproductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenerateproductService],
    }).compile();

    service = module.get<GenerateproductService>(GenerateproductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
