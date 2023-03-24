import { Controller, Get, Post, Body, Query, Param, Headers } from '@nestjs/common'
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
    return out
  }
  
  @Get('/api/v1/profile')
  async getProfile(@Headers() headers: Record < string, string >) {
    const params = {
      headers: {
        Authorization: headers.authorization
      }
    }
    const out: any = await this.webServer.get('https://ablazzing.mol.fvds.ru/api/v1/profile', params)
    return out
  }
  
  @Post('/api/v1/notification')
  async getNotificationList(@Headers() headers: Record < string, string >) {
    const params = {
      headers: {
        Authorization: headers.authorization
      }
    }
    const out: any = await this.webServer.post('https://ablazzing.mol.fvds.ru/api/v1/notification', {}, params)
    return out
  }
  
  @Get('/api/v1/notification/count')
  async getNotificationCount(@Headers() headers: Record < string, string >) {
    const params = {
      headers: {
        Authorization: headers.authorization
      }
    }
    const out: any = await this.webServer.get('https://ablazzing.mol.fvds.ru/api/v1/notification/count', params)
    return out
  }
  
  @Get('/api/v1/user-module')
  async getUserModules(@Headers() headers: Record < string, string >) {
    const params = {
      headers: {
        Authorization: headers.authorization
      }
    }
    const out: any = await this.webServer.get('https://ablazzing.mol.fvds.ru/api/v1/user-module', params)
    return out
  }
  
  @Get('/api/v1/user-module/status')
  async getUserModulesStatus(@Headers() headers: Record < string, string >) {
    const params = {
      headers: {
        Authorization: headers.authorization
      }
    }
    const out: any = await this.webServer.get('https://ablazzing.mol.fvds.ru/api/v1/user-module/status', params)
    return out
  }
  
  @Get('/api/v1/user-module/full-info')
  async getUserModulesModuleInfo(
    @Headers() headers: Record < string, string >,
    @Query() data: any
  ) {
    const params = {
      headers: {
        Authorization: headers.authorization
      },
      params: {
        moduleName: data.slug
      }
    }
    const out: any = await this.webServer.get('https://ablazzing.mol.fvds.ru/api/v1/user-module/full-info', params)
    return out
  }
  
  @Get('/api/v1/arrow')
  async getUserModulesArrow(@Headers() headers: Record < string, string >) {
    let params = {}
    if(headers.authorization) params = {... params, ... {
      headers: {
        Authorization: headers.authorization
      }
    }}
    const out: any = await this.webServer.get('https://ablazzing.mol.fvds.ru/api/v1/arrow', params)
    return out
  }
  
  @Get('/api/v1/user-project')
  async getUserProject(
    @Headers() headers: Record < string, string >,
    @Query() data: any
  ) {
    const params = {
      headers: {
        Authorization: headers.authorization
      },
      params: {
        moduleName: data.slug
      }
    }
    const out: any = await this.webServer.get('https://ablazzing.mol.fvds.ru/api/v1/user-project', params)
    return out
  }
  
  @Get('/api/v1/user-project/step/:step')
  async getUserProjectStep(
    @Headers() headers: Record < string, string >,
    @Query() data: any,
    @Param('step') step: any
  ) {
    const params = {
      headers: {
        Authorization: headers.authorization
      },
      params: {
        moduleName: data.slug,
        stepNumber: data.step
      }
    }
    const out: any = await this.webServer.get('https://ablazzing.mol.fvds.ru/api/v1/user-project/step/'+step, params)
    return out
  }
  
  @Get('/api/v1/quiz')
  async getQuiz(
    @Headers() headers: Record < string, string >,
    @Query() data: any
  ) {
    const params = {
      headers: {
        Authorization: headers.authorization
      },
      params: {
        moduleName: data.slug
      }
    }
    const out: any = await this.webServer.get('https://ablazzing.mol.fvds.ru/api/v1/quiz', params)
    
    console.log(out, 'out')
    return out
  }

  @Post('/api/v1/profile/user-data')
  async updateUserData(
    @Headers() headers: Record < string, string >,
    @Body() data: any
  ) {
    const params = {
      headers: {
        Authorization: headers.authorization
      }
    }
    const out: any = await this.webServer.post('https://ablazzing.mol.fvds.ru/api/v1/profile/user-data', data, params)
    return out
  }

}
