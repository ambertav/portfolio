/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
            animation: {
                'text-slide': 'text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
            },
            keyframes: {
                'text-slide': {
                    '0%, 20%': {
                        transform: 'translateY(0%)',
                    },
                    '25%, 45%': {
                        transform: 'translateY(-20%)',
                    },
                    '50%, 70%': {
                        transform: 'translateY(-40%)',
                    },
                    '75%, 95%': {
                        transform: 'translateY(-60%)',
                    },
                    '100%': {
                        transform: 'translateY(-80%)',
                    },
                },                    
            },
        },
    },
}
