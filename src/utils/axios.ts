import Axios from 'axios';
import { ElMessage } from 'element-plus';

const baseURL = '';

const axios = Axios.create({
    baseURL,
    timeout: 20000
});

// 前置拦截：拦截请求
axios.interceptors.request.use(
    (res) => {
        // ...
        return res;
    },
    (err) => {
        // ...
        return Promise.reject(err);
    }
);

// 后置拦截，拦截响应
axios.interceptors.response.use(
    (res) => {
        // ...
        return res;
    },
    (err) => {
        if (err.response && err.response.data) {
            const code = err.response.status;
            const msg = err.response.data.message;
            ElMessage.error(`Code: ${code}, Message: ${msg}`);
        } else {
            ElMessage.error(`${err}`);
        }
        return Promise.reject(err);
    }
);

export default axios;
