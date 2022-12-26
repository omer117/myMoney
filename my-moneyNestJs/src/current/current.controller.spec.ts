import { Test, TestingModule } from '@nestjs/testing';
import { CurrentController } from './current.controller';
import { CurrentService } from './current.service';

describe('CurrentController', () => {
  let controller: CurrentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CurrentController],
      providers: [CurrentService],
    }).compile();

    controller = module.get<CurrentController>(CurrentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
