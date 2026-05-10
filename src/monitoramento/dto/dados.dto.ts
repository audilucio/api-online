import { ApiProperty } from '@nestjs/swagger';

export class DadosDto {

  @ApiProperty()
  temperatura: number;

  @ApiProperty()
  umidade: number;
}
