import { Controller, Get, Body, Post, Headers } from '@nestjs/common'
import { WebserverService } from 'src/webserver/webserver.service'

@Controller()
export class AppController {
  constructor(
    private webServer: WebserverService,
  ) {}
  
  @Post('/api/auth/signin')
  async authSignIn(@Body() data: any) {
    const out: any = await this.webServer.post('https://ablazzing.mol.fvds.ru/api/auth/signin', data, {})
    return out
  }

  @Post('/api/auth/signup')
  async authSignUp(@Body() data: any) {
    const out: any = await this.webServer.post('https://ablazzing.mol.fvds.ru/api/auth/signup', data, {})
    console.log(out)
    return out
  }
  
  @Get('/api/v1/notification/count')
  async notificationCount(@Headers() headers: Record < string, string >) {
    let params = {}
    if(headers.authorization) params = {... params, ... {
      headers: {
        Authorization: headers.authorization
      }
    }}
    const out: any = await this.webServer.get('https://ablazzing.mol.fvds.ru/api/v1/notification/count', params)
    return out
  }

}