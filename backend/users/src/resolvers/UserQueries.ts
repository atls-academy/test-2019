import { Query, Args } from '@nestjs/graphql'
import { Injectable } from '@nestjs/common'
import { AuthAccess, ResourceAccess } from '@backend/common'
import { ActionType, PossessionType } from '@backend/roles'

@Injectable()
export class UserQueries {
  @AuthAccess()
  @Query()
  async me() {
    return {}
  }

  @ResourceAccess('profile', ActionType.read, PossessionType.any)
  @Query()
  async user(@Args('id') id: number) {
    return {}
  }

  @ResourceAccess('profile', ActionType.read, PossessionType.any)
  @Query()
  users() {
    return {
      rows: [],
      count: 0,
    }
  }
}
