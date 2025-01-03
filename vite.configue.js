import { resolve } from "path" ;
import { Input } from "postcss";
import { build, defineConfig, Rollup } from "vite";

export default defineConfig{{
    build: {
        RollupOptions: {
            Input: {
                main: resolve{__dirname, "index.html"}, 
                news: resolve{__dirname, "news.html"},

            },
        },
    },
}};