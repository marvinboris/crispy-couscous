/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./features/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['Plus Jakarta Display', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: '#634092',
                secondary: {
                    50: '#fafafa',
                    100: '#f5f5f5',
                    200: '#e5e5e5',
                    300: '#d4d4d4',
                    400: '#a3a3a3',
                    500: '#737373',
                    600: '#525252',
                    700: '#404040',
                    800: '#262626',
                    900: '#171717',
                },
                blue: '#2129EE',
                sky: '#0590DE',
                night: '#2E5C9E',
                green: '#70a334',
                orange: '#F59C1C',
                red: '#dc3545',
            }
        },
    },
    plugins: [],
}
