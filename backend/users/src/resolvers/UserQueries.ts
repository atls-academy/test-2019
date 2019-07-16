import { Query, Args } from '@nestjs/graphql'
import { Injectable } from '@nestjs/common'
import { AuthAccess, ResourceAccess } from '@aunited/common'

@Injectable()
export class UserQueries {
  @AuthAccess()
  @Query()
  async me() {
    return {}
  }

  @ResourceAccess('publicProfile', 'read')
  @Query()
  async publicProfile(@Args('id') id: number) {
    return {}
  }
}
