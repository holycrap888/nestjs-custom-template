import { Module } from '@nestjs/common';
import { LoggerService } from './logger/logger.service';
import { ExceptionService } from './exception/exception.service';

@Module({
  providers: [LoggerService, ExceptionService],
  exports: [LoggerService, ExceptionService],
})
export class CoreModule {}