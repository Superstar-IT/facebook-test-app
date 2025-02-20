import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
  Query,
} from '@nestjs/common';
import { TablePaginationDto } from 'src/core/dtos/table-pagination.dto';
import { NotificationsService } from './notifications.service';
import { NotificationEntity } from './entities/notification.entity';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Get()
  @ApiOkResponse({ type: NotificationEntity, isArray: true })
  async getNotifications(
    @Query() query: TablePaginationDto,
  ): Promise<NotificationEntity[]> {
    return await this.notificationsService.findAll(query);
  }

  @Patch(':id/read')
  @ApiOkResponse({ type: NotificationEntity })
  async read(@Param('id') id: string): Promise<NotificationEntity> {
    const notification = await this.notificationsService.findOne(+id);
    if (!notification) throw new NotFoundException('Notification not found');
    notification.readAt = new Date();
    const [updatedNotification] = await this.notificationsService.save([
      notification,
    ]);

    return updatedNotification;
  }
}
