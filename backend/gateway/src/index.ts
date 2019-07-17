import { NestFactory } from '@nestjs/core'
import { ApplicationModule } from './app'

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule)

  await app.listen(process.env.PORT || 3000)
}

bootstrap()
