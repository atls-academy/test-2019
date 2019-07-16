import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User, Profile } from './entities'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Profile,
    ]),
  ],
})
export class UsersModule {}
