import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        port: 2222
    },
    css: {
        output: './css'
    },
    build: {
        emptyOutDir: true,
        rollupOptions: {
            input: {
                mariokart: 'pages/mario_kart.html',
                mortalkombat: 'pages/mortal_kombat11.html',
                index: 'index.html'
            }
        }
    }
});
