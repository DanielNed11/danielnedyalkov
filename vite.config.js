import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        { enforce: 'pre', ...mdx({
            remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter]
        }) },
        react(),
        ViteImageOptimizer({
            png: {
                quality: 80,
            },
            jpeg: {
                quality: 80,
            },
            jpg: {
                quality: 80,
            },
            webp: {
                quality: 80,
            },
        }),
    ],
    base: process.env.GITHUB_PAGES ? "/Portfolio/" : "/",
});
