import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import inlineSource from "vite-plugin-inline-source";

export default defineConfig({
    define: {
        "process.env": {
            VITE_PUBLIC_PATH: "", // This makes asset URLs relative
        },
    },
    plugins: [
        laravel({
            input: "resources/js/app.jsx",
            refresh: true,
        }),
        react(),
        inlineSource(),
    ],
});
