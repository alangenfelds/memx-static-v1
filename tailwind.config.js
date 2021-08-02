const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      navy: {
        DEFAULT: "#0A2A4B",
        dark: "#000625",
      },
      blue: {
        light: "#00D4E6",
        default: "#009FDF",
        dark: "#005DA6",
      },
      gray: colors.trueGray,
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: {
        DEFAULT: "#E7E51D",
      },
    },
    extend: {
      fontFamily: {
        hepta: ['"Hepta Slab"'],
        heptaBold: ['"Hepta Slab Bold"'],
        heptaSemiBold: ['"Hepta Slab SemiBold"'],
        ranua: ["Ranua"],
        ranuaBlack: ["Ranua Black"],
        ranuaBold: ["Ranua Bold"],
        ranuaItalic: ["Ranua Italic"],
        ranuaLight: ["Ranua Light"],
        sans: [...defaultTheme.fontFamily.sans],
        serif: [...defaultTheme.fontFamily.serif],
        mono: [...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        "p-small": "11px",
        "get-started-cta": "42px",
        "shares-traded": "118px",
        "shares-traded-mobile": "42px",
      },
      spacing: {
        "shares-table": "48.5%",
        "image-caption": "85%",
      },
      width: {
        "news-ticker": "441px",
      },
      height: {
        "news-ticker": "83px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    function ({ addUtilities }) {
      const extendUnderline = {
        ".underlineYellow": {
          // textDecoration: "underline",
          // "text-decoration-color": "yellow",
          borderBottom: "3px solid yellow",
          paddingBottom: "2px",
        },
      };

      addUtilities(extendUnderline);
    },
  ],
};
