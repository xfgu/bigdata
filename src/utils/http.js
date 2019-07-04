import axios from 'axios'
import { Message } from 'element-ui';
// 创建axios实例
const service = axios.create({
    // `withCredentials` 表示跨域请求时是否需要使用凭证
    withCredentials: true,
    //baseURL:"/",
    baseURL:"http://10.68.15.191:8080/api",
    // baseURL:"http://192.168.18.24:58089/api",
    timeout: 50000, // 请求超时时间
})
//添加请求拦截器
service.interceptors.request.use(config => {
    //config.headers['token'] = '234324'
    // config.headers['Accept']='application/json'
    return config
}, error => {
    Message({
        message: '加载数据超时',
        type: 'error',
        center: true,
        duration: 1000,
        showClose: true
    });
    return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        Message({
            message: '加载数据失败',
            type: 'error',
            center: true,
            showClose: true
        });
        return Promise.reject(error)
    }
)

export default service
