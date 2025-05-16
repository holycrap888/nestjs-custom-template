import { Injectable } from '@nestjs/common';

@Injectable()
export class ExceptionService {
  handle(error: unknown) {
    console.error('Exception caught:', error);
  }
}
