import { Query } from '@nestjs/graphql'
import { Injectable } from '@nestjs/common'

@Injectable()
export class UserQueries {
  @Query()
  async me() {
    return {}
  }
}
