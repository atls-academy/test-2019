import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Role } from './entities'

export * from './enums'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Role,
    ]),
  ],
})
export class RolesModule {}
