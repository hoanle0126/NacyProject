/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    backgroundColor: {
      'white': '#fff',
      'primary': '#1B84FF',
    },
    fontSize: {
      "secondary": "22.5px",
    },
    colors: {
      "white": '#fff',
      "blue": "#1B84FF",
    },
    extend: {},
  },
  plugins: [],
};
