import { Body, Controller, Get, Post } from '@nestjs/common';
import { DadosDto } from './dto/dados.dto';

@Controller('monitoramento')
export class MonitoramentoController {

  @Get()
  status() {
    return {
      status: 'monitoramento ativo',
    };
  }

  @Post('dados')
  receberDados(@Body() body: DadosDto) {

    console.log(body);

    return {
      mensagem: 'Dados recebidos com sucesso',
      dados: body,
    };
  }
}
