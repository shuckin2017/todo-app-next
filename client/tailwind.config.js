module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        colors: {
            primary: {
                light: "#586BAE",
                DEFAULT: "#202D5D",
                dark: "#0A153C",
            },
            white: "#FFFFFF",
            blue: "#178efc",
            gray: {
                light: "#F1F3F8",
                DEFAULT: "#e8eaf0",
                dark: "#AFB1B4",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
