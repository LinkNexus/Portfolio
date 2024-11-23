import { defineConfig } from "vite";
import symfonyPlugin from "vite-plugin-symfony";
import viteTsconfigPaths from 'vite-tsconfig-paths';

/* if you're using React */
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        react(),
        symfonyPlugin({
            stimulus: true,
        }),
        viteTsconfigPaths()
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
