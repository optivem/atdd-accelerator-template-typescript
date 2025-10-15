import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getEcho(): string {
    return 'Echo response';
  }

  async getTodo(id: number): Promise<any> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return await response.json();
  }
}
