import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    base: './', // 打包路径
    server: {
        port: 3001,
        open: true,
        cors: true,
        proxy: {
            '/api': {
                target: 'https://xx.xx.xx.xx:8080',
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace('/api', '')
            }
        }
    }
});
