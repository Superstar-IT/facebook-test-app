'use strict';

import { ApiProperty } from '@nestjs/swagger';
import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class AbstractEntity {
  @PrimaryGeneratedColumn('increment')
  @ApiProperty({ type: Number, required: true })
  id: number;

  @CreateDateColumn()
  @ApiProperty({ type: Date, required: true })
  created_at!: Date;

  @UpdateDateColumn()
  @ApiProperty({ type: Date, required: true })
  updated_at!: Date;

  @DeleteDateColumn()
  @ApiProperty({ type: Date, required: false })
  deleted_at?: Date;
}
