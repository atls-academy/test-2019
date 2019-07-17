import { CanActivate, ExecutionContext } from '@nestjs/common'
import { Reflector } from '@nestjs/core'

export class AccessGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
  ) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const [, , ctx, req] = context.getArgs()
    const user = ctx.user || req.user

    const withAuthAccess = this.reflector.get('AuthAccess', context.getHandler())

    throw new Error('To be implemented AccessGuard.canActivate (╯°□°）╯︵ ┻━┻')
  }
}
