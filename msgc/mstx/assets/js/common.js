// 存放公用js方法
// 常用方法
// jq函数名$
class R{
    // 静态方法 static
    static search(name){
        // 考虑到URL可能出现中文编码问题 需要转码
        const search=decodeURI(location.search)
        const params=new URLSearchParams(search)
        return params.get(name)
    }
}