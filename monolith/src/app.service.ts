import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getEcho(): string {
    return 'Echo response';
  }

  getTodo(id: number): any {
    return {
      userId: 1,
      id: id,
      title: `Sample todo ${id}`,
      completed: false
    };
  }
}
