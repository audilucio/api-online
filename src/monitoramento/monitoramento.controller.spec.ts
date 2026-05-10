import { Test, TestingModule } from '@nestjs/testing';
import { MonitoramentoController } from './monitoramento.controller';

describe('MonitoramentoController', () => {
  let controller: MonitoramentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MonitoramentoController],
    }).compile();

    controller = module.get<MonitoramentoController>(MonitoramentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
