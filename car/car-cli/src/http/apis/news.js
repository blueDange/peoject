/**该文件仅产品选购相关的接口API */
import myaxios from '../MyAxios'
//引入路径前缀
import BASEURL from '../BaseUrl'
const { CARURL } = BASEURL

const newsApi = {
    /**新闻咨询列表 */
    list(params) {
        let url = CARURL + '/news/list'
        return myaxios.get(url, params)
    },
    /**新闻咨询详情 */
    deta(params) {
        let url = CARURL + '/news/deta'
        return myaxios.get(url, params)
    },
    /**新闻咨询主页列表 */
    home(params) {
        let url = CARURL + '/news/home'
        return myaxios.get(url, params)
    },
    // 搜索
    search(params) {
        let url = CARURL + '/news/search'
        return myaxios.get(url, params)
    },
}

export default newsApi