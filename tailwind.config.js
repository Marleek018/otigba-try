/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      transitionProperty: {
        height: "height",
      },
      backgroundImage: {
        tabimg:
          'url("https://res.cloudinary.com/dizfuix3a/image/upload/v1723476504/samtab_itvuc2.png")',
        deskimg:
          'url("https://res.cloudinary.com/dizfuix3a/image/upload/v1723499276/samDesktop_vj5aln.png")',
      },
    },
  },
  plugins: [],
};
