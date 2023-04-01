import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { WebserverService } from './webserver.service'

@Module({
  providers: [WebserverService],
  imports: [HttpModule],
  exports: [WebserverService]
})

export class WebserverModule {}