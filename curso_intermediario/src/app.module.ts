import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpFilterException } from './common/filters/http_filter_exception.filter';
import { ResponseTransformationInterceptor } from './core/http/response-transformation.interceptor';
import { UserModule } from './Users/user.module';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpFilterException
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseTransformationInterceptor
    }
  ],
})
export class AppModule {}
