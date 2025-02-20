import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, ValidateIf } from 'class-validator';

export class PaginationDto {
  @ApiProperty({ required: false, type: Number })
  @ValidateIf((obj) => obj.skip !== undefined)
  skip?: number;

  @ApiProperty({ required: false, type: Number })
  @ValidateIf((obj) => obj.take !== undefined)
  take?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  readonly sort_by?: string[];

  @ApiProperty({ required: false })
  @IsOptional()
  keyword: string;
}