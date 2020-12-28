import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// controller are responsible for handling incoming request and returning response to the client
// each controller can have more than 1 route
// create controller using $ nest g controller cats command
@Controller() // decorator
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
