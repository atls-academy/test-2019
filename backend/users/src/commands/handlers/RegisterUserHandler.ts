import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'
import { RegisterUserCommand } from '../impl'

@CommandHandler(RegisterUserCommand)
export class RegisterUserHandler implements ICommandHandler<RegisterUserCommand> {
  async execute(command: RegisterUserCommand) {
    throw new Error('To be implemented RegisterUserHandler  (ノಠ益ಠ)ノ彡┻━┻')
  }
}
