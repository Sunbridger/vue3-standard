import { defineMockInstance, mockRequest } from '@souche-vue3/frame-base'

@defineMockInstance({
  host: 'http://skyline.dasouche.net'
})
class SkylineService {
  @mockRequest({
    method: 'get',
    path: '/market/:id/getCallbackStageBySpm.json'
  })
  getCallbackStageBySpm (request: any) {
    let data = null
    // 根据request返回不同的mock data
    if (request.query.name) {
      data = {
        foo: 1
      }
    } else {
      data = {
        bar: 1
      }
    }
    return {
      data,
      resHeaders: {
        'X-Hello': 'WORLD',
        'X-FOO': 'FOO'
      },
      resStatusCode: 200
    }
  }
}

module.exports = SkylineService
