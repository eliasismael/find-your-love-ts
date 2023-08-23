/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#ff3b3f",
                secondary: "#e60073",
            },
        },
    },
    plugins: [],
};
