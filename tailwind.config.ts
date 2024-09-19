/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ['selector', '[data-theme="dark"]'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: 'rgb(var(--color-primary) / <alpha-value>)',
                'primary-content': 'rgb(var(--color-primary-content) / <alpha-value>)',
                secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
                'secondary-content': 'rgb(var(--color-secondary-content) / <alpha-value>)',
                neutral: 'rgb(var(--color-neutral) / <alpha-value>)',
                'neutral-content': 'rgb(var(--color-neutral-content) / <alpha-value>)',

                base: {
                    100: 'rgb(var(--color-base-100) / <alpha-value>)',
                    200: 'rgb(var(--color-base-200) / <alpha-value>)',
                    300: 'rgb(var(--color-base-300) / <alpha-value>)',
                },
                'base-content': 'rgb(var(--color-base-content) / <alpha-value>)',
            },
            fontSize: {
                sm: '0.750rem',
                base: '1rem',
                lg: '1.1rem',
                xl: '1.333rem',
                '2xl': '1.777rem',
                '3xl': '2.369rem',
                '4xl': '3.158rem',
                '5xl': '4.210rem'
            },
            spacing: {
                '128': '32rem',
            },
            boxShadow: {
                'block': '4px 4px 0 0 #020202'
            }
        },
        fontFamily: {
            sans: ["Josefin Sans", ...defaultTheme.fontFamily.sans],
            old: ["serif"]
        }
    },
    plugins: [],
}

export default config;