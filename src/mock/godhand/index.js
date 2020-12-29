var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@souche-vue3/frame-base"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const frame_base_1 = require("@souche-vue3/frame-base");
    let GodHandService = class GodHandService {
        getCallbackStageBySpm(request) {
            let data = null;
            // 根据request返回不同的mock data
            if (request.query.name) {
                data = {
                    foo: 3
                };
            }
            else {
                data = {
                    bar: 1
                };
            }
            return {
                data,
                resHeaders: {},
                resStatusCode: 200
            };
        }
    };
    __decorate([
        frame_base_1.mockRequest({
            method: 'get',
            path: '/market/getMarket.json'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GodHandService.prototype, "getCallbackStageBySpm", null);
    GodHandService = __decorate([
        frame_base_1.defineMockInstance({
            host: 'http://godhand.dasouche.net'
        })
    ], GodHandService);
    module.exports = GodHandService;
});
