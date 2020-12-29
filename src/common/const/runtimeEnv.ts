/**
 * @file 一些关于运行环境的全局常量
 * 拆出到new -souche-utils
 */
// import Const from './index'

const { hostname } = window.location
const u = navigator.userAgent
export default class RuntimeEnv {
    static IN_MINIPROGRAM = hostname.indexOf('ali') > -1 || hostname.indexOf('wechat') > -1;
    static IN_QQ = u.indexOf('QQ') > -1;
    static IN_ALIPAYCLIENT = u.indexOf('AlipayClient') > -1;// 支付宝客户端
    static IN_ANDROID = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
    static IN_IOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    // static IN_SAFARI = u.indexOf(Const.SAFARI) > -1;
    // static IN_CHROME = u.indexOf(Const.CHROME) > -1;
    // static IN_OPERA = u.indexOf(Const.OPERA) > -1;
    // static IN_FIREFOX = u.indexOf(Const.FIREFOX) > -1;
    static ENV = process.env.NODE_ENV;
}
