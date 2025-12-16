import {defineConfig} from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    },
    trailingSlash: "ignore",
    image: {
        remotePatterns: [{protocol: "https"}],
        domains: ["miawinter.de", "winter-software.com", "geekslist.de", "tech.lgbt", "matrix.org", "ko-fi.com"]
    }
});