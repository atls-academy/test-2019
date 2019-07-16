import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User, Profile } from './entities'
import { CqrsModule } from '@nestjs/cqrs'
import { Resolvers } from './resolvers'
import { CommandHandlers } from './commands/handlers'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Profile,
    ]),
    CqrsModule,
  ],
  providers: [
    ...Resolvers,
    ...CommandHandlers,
  ],
})
export class UsersModule {}
