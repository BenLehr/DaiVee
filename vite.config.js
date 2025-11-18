import { defineConfig } from "vite";
import vue              from "@vitejs/plugin-vue";
import vueDevTools      from 'vite-plugin-vue-devtools'
import { resolve }      from 'path'

export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src') // Map `@` to the `src` directory
        }
    },
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
