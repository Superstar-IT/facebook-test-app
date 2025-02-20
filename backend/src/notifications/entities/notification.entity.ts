import { ApiProperty } from '@nestjs/swagger';
import { AbstractEntity } from 'src/core/abstract.entity';
import { NotificationTypeEnum } from 'src/core/enums/notificatino-type.enum';
import { Column, Entity } from 'typeorm';

@Entity('notifications')
export class NotificationEntity extends AbstractEntity {
  @ApiProperty({
    type: NotificationTypeEnum,
    enum: NotificationTypeEnum,
    required: true,
  })
  @Column({ type: 'enum', enum: NotificationTypeEnum })
  type: NotificationTypeEnum;

  // Need to use_id instead of user name.
  @ApiProperty({ type: String, required: true })
  @Column({ type: 'varchar' })
  user: string;

  @ApiProperty({ type: String, required: true })
  @Column({ type: 'text', nullable: true })
  message: string;

  @ApiProperty({ type: Date, required: false })
  @Column({ type: 'timestamp with time zone', nullable: true })
  readAt?: Date;
}
