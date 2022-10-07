module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        '1-color': '#0b132bff',
        '2-color': '#1c2541ff',
        '3-color': '#3a506bff',
        '4-color': '#5bc0beff',
        '5-color': '#6fffe9ff'
      },
      fontFamily: {
        "josefin": "'Josefin Sans', sans-serif",
        "nunito": "'Nunito', sans-serif"
      },
      spacing: {
        '127': '31rem',
        '128': '32rem',
        '129': '5.5rem'
       },
      backgroundImage: (theme) => ({
        'page-destinations': "url('/src/images/pageD.jpg')",
        'rock-lake': "url('/src/images/bgM.jpg')"
      }),
    }
  },
  plugins: [],
};
