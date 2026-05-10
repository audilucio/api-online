import { Test, TestingModule } from '@nestjs/testing';
import { MonitoramentoService } from './monitoramento.service';

describe('MonitoramentoService', () => {
  let service: MonitoramentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MonitoramentoService],
    }).compile();

    service = module.get<MonitoramentoService>(MonitoramentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
