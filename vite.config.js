import { defineConfig } from "vite";
import vue              from "@vitejs/plugin-vue";
import vueDevTools      from 'vite-plugin-vue-devtools'
import { resolve }      from 'path'

export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),
    ],
    build:   {
        outDir:        "dist",
        lib:           {
            entry:    resolve(__dirname, 'src/index.ts'),
            name:     'DaiVee',
            fileName: (format) => `daiVee.${format}.js`,
        },
        rollupOptions: {
            external: ['vue'],
            output:   {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
});
