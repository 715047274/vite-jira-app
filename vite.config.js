import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';
import {fileURLToPath} from 'url';
import tailwindcss from 'tailwindcss'
import VitePluginHtmlEnv from 'vite-plugin-html-env';


// const __dirname = path.dirname(__filename);
//const __filename = fileURLToPath(import.meta.url);

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: [
            //{ find: '@', replacement: path.resolve(__dirname, '/src') }
            {find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url))},
        ],

    },
    plugins: [react(), VitePluginHtmlEnv()],
    css: {
        preprocessorOptions: {
            less: {
                math: "always",
                relativeUrls: true,
                javascriptEnabled: true
            }
        },
        postcss: {
            plugins: [tailwindcss()],
        },
    }
})
