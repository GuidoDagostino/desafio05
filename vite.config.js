export default {
    server: {
        port: 2222
    },

    build: {

        emptyOutDir: true,
        rollupOptions: {
            input: {
                mariokart: resolve('pages/mario_kart.html'),
                mortalkombat: resolve('pages/mortal_kombat11.html'),
                index: resolve('index.html')
            }
        }
    }
}