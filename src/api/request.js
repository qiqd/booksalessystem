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
    console.log(1);

    // 在发送请求之前做些什么
    if (store.token != '') {
        config.headers["token"] = store.token
    }
    return config;
}, function (error) {
    console.log(2);

    // 对请求错误做些什么
    ElMessage({
        message: '加载失败',
        type: 'error',
        plain: true,
    })
    return Promise.reject(error);
});
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    console.log(3);

    // 2xx 范围内的状态码都会触发该函数。
    if (response.data.state > 200) {
        ElMessage({
            message: response.data.message,
            type: 'error',
            plain: true,
        })
        return Promise.reject();
    }
    // 对响应数据做点什么
    return response;
}, function (error) {
    console.log(4);

    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    ElMessage({
        message: '加载失败',
        type: 'error',
        plain: true,
    })
    return Promise.reject(error);
});
export default request