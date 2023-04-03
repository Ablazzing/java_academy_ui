import { Controller, Get, Post, Body, Query, Param, Headers, Put } from '@nestjs/common'
import { UploadedFile, UseInterceptors } from '@nestjs/common/decorators'
import { FileInterceptor } from '@nestjs/platform-express'
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

  @Post('/api/auth/forget-password')
  async authFrogot(@Body() data: any) {
    const out: any = await this.webServer.post('https://ablazzing.mol.fvds.ru/api/auth/forget-password', data, {})
    return out
  }
  
  @Get('/api/v1/profile')
  async getProfile(@Headers() headers: Record < string, string >) {
    const params = { headers: { Authorization: headers.authorization } }
    const out: any = await this.webServer.get('https://ablazzing.mol.fvds.ru/api/v1/profile', params)
    return out
  }

  @Post('/api/v1/profile/user-data')
  async updateUserData(
    @Headers() headers: Record < string, string >,
    @Body() data: any
  ) {
    const params = { headers: { Authorization: headers.authorization } }
    const out: any = await this.webServer.post('https://ablazzing.mol.fvds.ru/api/v1/profile/user-data', data, params)
    return out
  }

  @Post('/api/v1/profile/password')
  async updateUserPassword(
    @Headers() headers: Record < string, string >,
    @Body() data: any
  ) {
    const params = { headers: { Authorization: headers.authorization } }
    const out: any = await this.webServer.post('https://ablazzing.mol.fvds.ru/api/v1/profile/password', data, params)
    return out
  }

  @Post('/api/v1/profile/photo')
  @UseInterceptors(FileInterceptor('file'))
  async updateUserPhoto(
    @Headers() headers: Record < string, string >,
    @Body() data: any,
    @UploadedFile() file: any
  ) {
    console.log(file)
    const params = {
      headers: {
        Authorization: headers.authorization,
        'Content-type': 'multipart/form-data'
      }
    }
    const out: any = await this.webServer.post('https://ablazzing.mol.fvds.ru/api/v1/profile/photo', data, params)
    return out
  }
  
  @Post('/api/v1/notification')
  async getNotificationList(@Headers() headers: Record < string, string >) {
    const params = { headers: { Authorization: headers.authorization } }
    const out: any = await this.webServer.post('https://ablazzing.mol.fvds.ru/api/v1/notification', {}, params)
    return out
  }
  
  @Get('/api/v1/notification/count')
  async getNotificationCount(@Headers() headers: Record < string, string >) {
    const params = { headers: { Authorization: headers.authorization } }
    const out: any = await this.webServer.get('https://ablazzing.mol.fvds.ru/api/v1/notification/count', params)
    return out
  }
  
  @Post('/api/v1/notification/information')
  async createNotification(
    @Headers() headers: Record < string, string >,
    @Body() data: any
  ) {
    const params = { headers: { Authorization: headers.authorization } }
    const out: any = await this.webServer.post('https://ablazzing.mol.fvds.ru/api/v1/notification/information', data, params)
    return out
  }
  
  @Get('/api/v1/user-module')
  async getUserModules(@Headers() headers: Record < string, string >) {
    const params = { headers: { Authorization: headers.authorization } }
    const out: any = await this.webServer.get('https://ablazzing.mol.fvds.ru/api/v1/user-module', params)
    return out
  }
  
  @Put('/api/v1/user-module')
  async putUserModules(
    @Headers() headers: Record < string, string >,
    @Body() data: any
  ) {
    const params = { headers: { Authorization: headers.authorization } }
    const out: any = await this.webServer.put('https://ablazzing.mol.fvds.ru/api/v1/user-module', data.params, params)
    return out
  }
  
  @Get('/api/v1/user-module/status')
  async getUserModulesStatus(@Headers() headers: Record < string, string >) {
    const params = { headers: { Authorization: headers.authorization } }
    const out: any = await this.webServer.get('https://ablazzing.mol.fvds.ru/api/v1/user-module/status', params)
    return out
  }
  
  @Get('/api/v1/user-module/full-info')
  async getUserModulesModuleInfo(
    @Headers() headers: Record < string, string >,
    @Query() data: any
  ) {
    const params = { 
      headers: { Authorization: headers.authorization },
      params: { moduleName: data.slug }
    }
    const out: any = await this.webServer.get('https://ablazzing.mol.fvds.ru/api/v1/user-module/full-info', params)
    return out
  }
  
  @Get('/api/v1/moduleInfo')
  async getModuleAdmin(
    @Headers() headers: Record < string, string >,
    @Query() data: any
  ) {
    const params = { 
      headers: { Authorization: headers.authorization },
      params: { moduleName: data.slug }
    }
    const out: any = await this.webServer.get('https://ablazzing.mol.fvds.ru/api/v1/moduleInfo', params)
    return out
  }
  
  @Post('/api/v1/moduleInfo')
  async createModule(
    @Headers() headers: Record < string, string >,
    @Body() data: any
  ) {
    const params = { headers: { Authorization: headers.authorization } }
    const out: any = await this.webServer.post('https://ablazzing.mol.fvds.ru/api/v1/moduleInfo', data, params)
    return out
  }
  
  @Put('/api/v1/moduleInfo')
  async updateModule(
    @Headers() headers: Record < string, string >,
    @Body() data: any
  ) {
    const params = { headers: { Authorization: headers.authorization } }
    const out: any = await this.webServer.put('https://ablazzing.mol.fvds.ru/api/v1/moduleInfo', data, params)
    return out
  }
  
  @Get('/api/v1/arrow')
  async getUserModulesArrow(@Headers() headers: Record < string, string >) {
    const params = { headers: { Authorization: headers.authorization } }
    const out: any = await this.webServer.get('https://ablazzing.mol.fvds.ru/api/v1/arrow', params)
    return out
  }
  
  @Get('/api/v1/user-project')
  async getUserProject(
    @Headers() headers: Record < string, string >,
    @Query() data: any
  ) {
    const params = {
      headers: { Authorization: headers.authorization },
      params: { moduleName: data.slug }
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
      headers: { Authorization: headers.authorization },
      params: { moduleName: data.slug, stepNumber: data.step }
    }
    const out: any = await this.webServer.get('https://ablazzing.mol.fvds.ru/api/v1/user-project/step/'+step, params)
    return out
  }

  @Get('/api/v1/project')
  async getProjects(@Headers() headers: Record < string, string >) {
    const params = { headers: { Authorization: headers.authorization } }
    const out: any = await this.webServer.get('https://ablazzing.mol.fvds.ru/api/v1/project', params)
    return out
  }
  
  @Post('/api/v1/user-project/user-step')
  async sendProjectStep(
    @Headers() headers: Record < string, string >,
    @Body() data: any
  ) {
    const params = { headers: { Authorization: headers.authorization } }
    const out: any = await this.webServer.post('https://ablazzing.mol.fvds.ru/api/v1/user-project/user-step', data, params)
    return out
  }
  
  @Post('/api/v1/project')
  async createProject(
    @Headers() headers: Record < string, string >,
    @Body() data: any
  ) {
    const params = { headers: { Authorization: headers.authorization } }
    const out: any = await this.webServer.post('https://ablazzing.mol.fvds.ru/api/v1/project', data, params)
    return out
  }
  
  @Get('/api/v1/quiz')
  async getQuiz(
    @Headers() headers: Record < string, string >,
    @Query() data: any
  ) {
    const params = {
      headers: { Authorization: headers.authorization },
      params: { moduleName: data.slug }
    }
    const out: any = await this.webServer.get('https://ablazzing.mol.fvds.ru/api/v1/quiz', params)
    return out
  }
  
  @Post('/api/v1/quiz/user-result')
  async sendQuiz(
    @Headers() headers: Record < string, string >,
    @Body() data: any
  ) {
    const params = { headers: { Authorization: headers.authorization } }
    const out: any = await this.webServer.post('https://ablazzing.mol.fvds.ru/api/v1/quiz/user-result', data, params)
    return out
  }
  
  @Get('/api/v1/video')
  async getVideo(
    @Headers() headers: Record < string, string >,
    @Query() data: any
  ) {
    const params = {
      headers: { Authorization: headers.authorization },
      params: { moduleName: data.slug, videoName: data.video }
    }
    const out: any = await this.webServer.get('https://ablazzing.mol.fvds.ru/api/v1/video', params)
    return out
  }
  
  @Post('/api/v1/video')
  async createVideo(
    @Headers() headers: Record < string, string >,
    @Body() data: any
  ) {
    const params = { headers: { Authorization: headers.authorization } }
    const out: any = await this.webServer.post('https://ablazzing.mol.fvds.ru/api/v1/video', data, params)
    return out
  }
  
  @Get('/api/v1/video')
  async getVideoComments(
    @Headers() headers: Record < string, string >,
    @Query() data: any
  ) {
    const params = {
      headers: { Authorization: headers.authorization },
      params: { moduleName: data.slug, videoName: data.video }
    }
    const out: any = await this.webServer.get('https://ablazzing.mol.fvds.ru/api/v1/comment', params)
    return out
  }

}
