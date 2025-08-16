import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import content from './src/content.js';

export default defineConfig({
    root: './src',

    build: {
        outDir: resolve(__dirname, 'dist'),
        emptyOutDir: true, // equivalent to CleanWebpackPlugin
        rollupOptions: {
            input: {
                main: resolve(__dirname, './src/index.html'),
                hu: resolve(__dirname, './src/hu/index.html'),
                en: resolve(__dirname, './src/en/index.html'),
                404: resolve(__dirname, './src/404/index.html'),
            },
        },
    },
    server: {
        open: true,
    },
    publicDir: 'static',
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'src/templates'),
            context(pagePath) {
                if (pagePath.includes('/hu/')) {
                    return content.hu;
                } else if (pagePath.includes('/404/')) {
                    return { name: "I can't find it :(" };
                } else {
                    return content.en;
                }
            },
        }),
    ],
});
