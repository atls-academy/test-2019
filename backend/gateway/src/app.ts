import { NestModule, MiddlewareConsumer, Module } from '@nestjs/common'

@Module({})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // TODO: connect middleware here
  }
}
