// 存放网络请求相关代码
class Req{
    // 统一存放基础路径
    static baseURL='https://serverms.xin88.top/'

    // req.get('video?page=1',data=>{})
    static get(url,callback){
        $.get(Req.baseURL + url,callback)
    }

    // post请求 ：路径和参数分开传递
    // $.post(地址，参数，回调函数)
    static post(url,params,cb){
        $.post(Req.baseURL + url,params,cb)
    }
}