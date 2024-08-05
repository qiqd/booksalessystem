import axios from 'axios'
import { useCounterStore } from '@/stores/counter'
import { ElMessage } from 'element-plus'

const store = useCounterStore()
const request = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 2000,
    // headers: { 'X-Custom-Header': 'foobar' }
});
// 添加请求拦截器
request.interceptors.request.use(function (config) {

    // 在发送请求之前做些什么
    if (store.token != '') {
        config.headers["token"] = store.token
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    ElMessage({
        message: '加载失败',
        type: 'error',
        plain: true,
    })
    return Promise.reject(error);
});
export default request