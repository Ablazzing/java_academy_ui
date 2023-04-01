import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { WebserverModule } from './webserver/webserver.module'

@Module({
  imports: [WebserverModule],
  controllers: [AppController],
  providers: []
})
export class AppModule {}
