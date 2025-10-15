import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('api/echo')
  getEcho(): string {
    return this.appService.getEcho();
  }

  @Get('api/todos/:id')
  getTodo(@Param('id') id: string): any {
    return this.appService.getTodo(Number(id));
  }
}
