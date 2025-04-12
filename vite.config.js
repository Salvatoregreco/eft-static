import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
    plugins: [tailwindcss()],
    base: '/',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        copyPublicDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
            },
        },
    },
    publicDir: 'public',
});
