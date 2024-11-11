import { defineConfig } from "vite";
import symfonyPlugin from "vite-plugin-symfony";

/* if you're using React */
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        react(),
        symfonyPlugin({
            stimulus: true,
        }),
    ],
    build: {
        assetsInlineLimit: 0,
        rollupOptions: {
            input: {
                app: "./assets/app.js"
            },
        }
    },
});
