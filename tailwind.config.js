/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
    content: ["index.html"],
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
            sans: ['Josefin Sans', ...defaultTheme.fontFamily.sans]
        }
    },
    plugins: [],
    daisyui: {
        logs: false,
        themes: [
            {
                light: {
                    "primary": "#b90068",
                    "primary-content": "#ffffff",
                    "secondary": "#74565f",
                    "secondary-content": "#ffffff",
                    "accent": "#7d5636",
                    "accent-content": "#ffffff",

                    "neutral": "#ffd9e3",
                    "neutral-content": "#201a1c",
                    "base-100": "#fffbff",
                    "base-content": "#201a1c",

                    "info": "#3ABFF8",
                    "success": "#36D399",
                    "warning": "#FBBD23",
                    "error": "#F87272",
                },
            },
            {
                dark: {
                    "primary": "#b90068",
                    "primary-content": "#f2f2f2",
                    "secondary": "#C70071",
                    "secondary-content": "#f2f2f2",
                    "accent": "#7d5636",
                    "accent-content": "#f2f2f2",

                    "neutral": "#D146B5",
                    "neutral-content": "#fff",
                    "base-100": "#400E45",
                    "base-content": "#f2f2f2",
                    "base-200": "#881D91",

                    "info": "#3ABFF8",
                    "success": "#36D399",
                    "warning": "#FBBD23",
                    "error": "#F87272",
                }
            }
        ]
    }
}
