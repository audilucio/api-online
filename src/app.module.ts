import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MonitoramentoModule } from './monitoramento/monitoramento.module';

@Module({
  imports: [MonitoramentoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
