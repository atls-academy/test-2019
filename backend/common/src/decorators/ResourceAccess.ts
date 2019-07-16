import { SetMetadata } from '@nestjs/common'

export const ResourceAccess =
  (resource, action, options?: any) => SetMetadata('ResourceAccess', { resource, action, options })
