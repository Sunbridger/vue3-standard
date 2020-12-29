import BaseRequest from '../base'
// 搜车框架

export default class Coastline extends BaseRequest {
  constructor () {
    super({
      baseUrl: process.env.VUE_APP_TGC
    })
  }

  public getDepartmentList (params: any): Promise<any> {
    return this.request({
      method: 'get',
      url: '/api/bankCard/provinces.json',
      data: params
    })
  }
}
