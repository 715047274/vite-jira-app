import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
    mode: 'jit',
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                primary: ['Inter', ...fontFamily.sans],
            },
            colors: {
                primary: {
                    400: '#00E0F3',
                    500: '#00c4fd',
                },
                dark: '#333333',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};