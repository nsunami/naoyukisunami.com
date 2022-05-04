module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        120: "120deg",
      },
      colors: {
        peach: "#faac7c",
      },
      backgroundImage: {
        "head-pattern": "url('/head.png')",
        "world-map": "url('/world-map-flags.PNG')",
      },
      fontFamily: {
        notoserif: ['"Noto Serif Display"'],
        titi: ['"Titillium Web"'],
        luthier: ['"Luthier"'],
        grotesque: ['"Darker Grotesque"'],
        shippori: ['"Shippori Mincho"'],
      },
    },
  },
  plugins: [],
};
