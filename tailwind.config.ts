/** @type {import('tailwindcss').Config} */

const config = {
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
            }
        }
    }
}
