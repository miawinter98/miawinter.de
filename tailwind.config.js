/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./content/**/*.{html,js}", "./layouts/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
        logs: false,
        themes: [
            {
                mytheme: {
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
        ]
    }
}
