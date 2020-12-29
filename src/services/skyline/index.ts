import BaseRequest from '../base'
// 搜车框架
import { CarListInterface, CarListParams, JxShowRequest, JxShowRes } from './types/getDepartmentList'

export default class Coastline extends BaseRequest {
  constructor () {
    super({
      baseUrl: process.env.VUE_APP_SKYLINE_URL
    })
  }

  public getDepartmentList (params: CarListParams): Promise<CarListInterface> {
    return this.request({
      method: 'get',
      url: `/market/${params.spm}/getCallbackStageBySpm.json`,
      data: params
    })
  }

  public getDepartmentList2 (params: CarListParams): Promise<CarListInterface> {
    return this.request({
      method: 'get',
      url: `/v1/department/${params.spm}/getDepartmentList.json`,
      data: params
    })
  }

  public jxShow (params: JxShowRequest): Promise<JxShowRes> {
    return this.request({
      method: 'get',
      url: '/market/jxShow.json',
      data: params
    })
  }
}
