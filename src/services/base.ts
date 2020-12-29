import HttpRequset, { RequestParamsInterface, BasicRequestParamsInterface } from '@souche-f2e/http-request'

export default class BaseRequest {
    protected baseUrl?: string
    constructor (params: BasicRequestParamsInterface) {
      this.baseUrl = params.baseUrl
    }

    protected request (params: RequestParamsInterface) {
      params.url = `${this.baseUrl}${params.url}`
      return HttpRequset(params).catch((err) => {
        console.log(err)
      })
    }
}
