/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./content/**/*.{html,js}", "./layouts/**/*.{html,js}"],
    theme: {
        extend: {
            height: {
                '128': '32rem',
            }
        },
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
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
                    "neutral-content": "#f2f2f2",
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
