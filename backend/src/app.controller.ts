import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { AppService } from './app.service';

@Controller('v2')
@ApiTags('Health')
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}

}
