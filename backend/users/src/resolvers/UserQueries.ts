import { Query, Args } from '@nestjs/graphql'
import { Injectable } from '@nestjs/common'
import { AuthAccess, ResourceAccess } from '@backend/common'

@Injectable()
export class UserQueries {
  @AuthAccess()
  @Query()
  async me() {
    return {}
  }

  @ResourceAccess('user', 'read')
  @Query()
  async user(@Args('id') id: number) {
    return {}
  }

  @ResourceAccess('user', 'read')
  @Query()
  users() {
    return {
      rows: [],
      count: 0,
    }
  }
}
