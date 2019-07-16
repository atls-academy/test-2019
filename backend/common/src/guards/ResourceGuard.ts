import { CanActivate, ExecutionContext } from '@nestjs/common'

export class ResourceGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    throw new Error('To be implemented ResourceGuard.canActivate')
  }
}
