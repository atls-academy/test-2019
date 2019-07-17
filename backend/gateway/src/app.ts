import { NestModule, MiddlewareConsumer, Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from '@backend/users'
import { RolesModule } from '@backend/roles'
import { APP_GUARD } from '@nestjs/core'
import { AccessGuard, ResourceGuard } from '@backend/common'
import { GraphQLDate, GraphQLTime, GraphQLDateTime } from 'graphql-iso-date'

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
      resolvers: {
        Date: GraphQLDate,
        Time: GraphQLTime,
        DateTime: GraphQLDateTime,
      },
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
