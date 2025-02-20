import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { NotificationTypeEnum } from 'src/core/enums/notificatino-type.enum';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { NotificationEntity } from './entities/notification.entity';
import { TablePaginationDto } from 'src/core/dtos/table-pagination.dto';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectRepository(NotificationEntity)
    private readonly notificationRepository: Repository<NotificationEntity>,
  ) {}

  async findOne(id: number): Promise<NotificationEntity> {
    return await this.notificationRepository.findOne({ where: { id } });
  }

  async findAll(query: TablePaginationDto) {
    return await this.notificationRepository.find({
      where: {},
      skip: query.skip || 0,
      take: query.take || 10,
      order: { created_at: 'DESC' },
    });
  }

  async save(
    notifications: NotificationEntity[],
  ): Promise<NotificationEntity[]> {
    return await this.notificationRepository.save(notifications);
  }

  async addDummyData() {
    const notifications = await this.notificationRepository.find();
    if (notifications.length > 0) return;

    const dummy_notifications = [
      {
        type: NotificationTypeEnum.friend_request,
        user: 'G. Eagathagi Irudhaya Selvam',
        message: 'sent you a friend request.',
      },
      {
        type: NotificationTypeEnum.security,
        user: 'You',
        message: 'approved a login.',
      },
      {
        type: NotificationTypeEnum.post_update,
        user: 'David Thompson',
        message: 'posted an update.',
      },
      {
        type: NotificationTypeEnum.video,
        user: 'Parthi Rocko',
        message: 'added a new video.',
      },
      {
        type: NotificationTypeEnum.birthday,
        user: 'Karthi Keyan',
        message: 'had a birthday.',
      },
      {
        type: NotificationTypeEnum.video,
        user: 'BBC Earth',
        message: "posted a new video: 'Crabeater Seals’ Fight to Survive'.",
      },
    ];

    const new_notifications = dummy_notifications.map((data) => {
      const notification = new NotificationEntity();
      notification.type = data.type;
      notification.user = data.user;
      notification.message = data.message;

      return notification;
    });

    return await this.notificationRepository.save(new_notifications);
  }
}
