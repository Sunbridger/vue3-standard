import { defineMockInstance, mockRequest } from '@souche-vue3/frame-base'

@defineMockInstance({
  host: 'http://tgc-shop.souche.stable.dasouche.net'
})
class GodHandService {
  @mockRequest({
    method: 'get',
    path: '/api/bankCard/provinces.json'
  })
  getCallbackStageBySpm (request: any) {
    let data = null
    // 根据request返回不同的mock data
    if (request.query.name) {
      data = {
        foo: 3
      }
    } else {
      data = {
        bar: 1
      }
    }
    return {
      data,
      resHeaders: {},
      resStatusCode: 200
    }
  }
}

module.exports = GodHandService
