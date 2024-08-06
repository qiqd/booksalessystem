import axios from 'axios';
import { useCounterStore } from '@/stores/counter';
import { ElMessage } from 'element-plus';

const store = useCounterStore();

const request = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 2000,
});

// 添加请求拦截器
request.interceptors.request.use(
    function (config) {
        if (store.token !== '') {
            config.headers["token"] = store.token;
        }
        return config;
    },
    function (error) {
        ElMessage({
            message: '请求配置失败',
            type: 'error',
            plain: true,
        });
        return Promise.reject(error);
    }
);

// 添加响应拦截器
request.interceptors.response.use(
    function (response) {
        // 如果请求成功，直接返回响应数据
        return response;
    },
    function (error) {
        if (!error.response) {
            // 如果没有 response 对象，说明网络问题或服务器未运行
            ElMessage({
                message: '服务器未响应，请检查网络连接或服务器状态',
                type: 'error',
                plain: true,
            });
        } else {
            // 如果有 response 对象，可以根据 status code 处理错误
            switch (error.response.status) {
                case 401:
                    ElMessage({
                        message: '未授权，请登录',
                        type: 'error',
                        plain: true,
                    });
                    break;
                case 404:
                    ElMessage({
                        message: '找不到资源',
                        type: 'error',
                        plain: true,
                    });
                    break;
                default:
                    ElMessage({
                        message: error.response.data.message || '未知错误',
                        type: 'error',
                        plain: true,
                    });
            }
        }

        return Promise.reject(error);
    }
);

export default request;