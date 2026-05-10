import { ApiProperty } from '@nestjs/swagger';

export class DadosDto {

  @ApiProperty()
  dispositivo: string;

  @ApiProperty()
  temperatura: number;

  @ApiProperty()
  umidade: number;

  @ApiProperty()
  status: string;
}
