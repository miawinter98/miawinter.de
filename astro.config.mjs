import {defineConfig} from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(
        {
            applyBaseStyles: false
        }
    )],
    image: {
        remotePatterns: [{protocol: "https"}],
        domains: ["miawinter.de", "winter-software.com", "geekslist.de", "tech.lgbt", "matrix.org", "ko-fi.com"]
    }
});