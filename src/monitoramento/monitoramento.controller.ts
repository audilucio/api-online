import { Controller, Get } from '@nestjs/common';

@Controller('monitoramento')
export class MonitoramentoController {

  @Get()
  status() {
    return {
      status: 'monitoramento ativo',
    };
  }
}
