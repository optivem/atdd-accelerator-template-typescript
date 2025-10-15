import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getHello(): string {
    return 'Hello World!';
  }

  getEcho(): string {
    return 'Echo response';
  }

  async getTodo(id: number): Promise<any> {
    const baseUrl = this.configService.get<string>('TODOS_API_BASE_URL', 'https://jsonplaceholder.typicode.com');
    const response = await fetch(`${baseUrl}/todos/${id}`);
    return await response.json();
  }
}
