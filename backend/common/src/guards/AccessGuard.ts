import { CanActivate, ExecutionContext } from '@nestjs/common'

export class AccessGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    throw new Error('To be implemented AccessGuard.canActivate')
  }
}
