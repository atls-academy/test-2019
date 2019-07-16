import { NestModule, MiddlewareConsumer, Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from '@aunited/users'
import { RolesModule } from '@aunited/roles'
import { APP_GUARD } from '@nestjs/core'
import { AccessGuard, ResourceGuard } from '@aunited/common'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'db',
      database: process.env.DB_NAME || 'au',
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || 'root',
      entities: [
        '../**/src/**/entities/**.ts',
      ],
      migrations: [
        '../**/migrations/**.ts',
      ],
      migrationsRun: false,
      synchronize: true,
      logging: false,
    }),
    GraphQLModule.forRoot({
      path: '/graphql',
      typePaths: [
        '../**/*.graphql',
      ],
      installSubscriptionHandlers: false,
      rootValue: ({ req }) => req,
      formatError: error => {
        return error
      },
      playground: true,
    }),
    UsersModule,
    RolesModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AccessGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ResourceGuard,
    },
  ],
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // TODO: connect middleware here
  }
}
