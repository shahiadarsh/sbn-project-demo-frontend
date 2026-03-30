import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "#0033E7",
                    foreground: "#FFFFFF",
                },
                secondary: {
                    DEFAULT: "#2563EB",
                    foreground: "#FFFFFF",
                },
                accent: {
                    DEFAULT: "#F1F5F9",
                    foreground: "#0F172A",
                },
                heading: "#020817",
                muted: "#64748B",
            },
            borderRadius: {
                '2xl': '1rem',
                '3xl': '1.5rem',
            },
            keyframes: {
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)', filter: 'blur(8px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
                },
                'gradient-text': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                'marquee-left': {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                'marquee-right': {
                    '0%': { transform: 'translateX(-50%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
            },
            animation: {
                'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
                'gradient-text': 'gradient-text 5s ease infinite',
                'marquee-left': 'marquee-left 25s linear infinite',
                'marquee-right': 'marquee-right 25s linear infinite',
            },
        },
    },
    plugins: [],
};
export default config;
