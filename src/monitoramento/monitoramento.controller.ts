import { Body, Controller, Get, Post } from '@nestjs/common';
import { DadosDto } from './dto/dados.dto';

@Controller('monitoramento')
export class MonitoramentoController {

  @Get()
  status() {
    return {
      status: 'monitoramento ativo',
      servidor: 'online',
    };
  }

  @Post('dados')
  receberDados(@Body() body: DadosDto) {

    console.log('DADOS RECEBIDOS:');
    console.log(body);

    return {
      sucesso: true,
      mensagem: 'Dados recebidos com sucesso',
      dados: body,
    };
  }
}
