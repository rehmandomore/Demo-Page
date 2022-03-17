module.exports = {
  content: ["./components/**/*.{tsx,js,ts}", "./pages/**/*.tsx"],
  theme: {
    debugScreens: {
      position: ["bottom", "right"],
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      // fontFamily: { headline: ["Oswald"] },
      colors: {
        primary: "#F7F7F7",
        tertiary: "#D6D7D9",
        secondary: "#C5C7CD",
        upload_btn: "#181D30",
        upload_btn_hover: "#0b0e16",
        input_bg: "#F4F7F9",
        dark_gray: "#787C87",
        btn_border: "#1E1E1F",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-debug-screens"),
  ],
};
