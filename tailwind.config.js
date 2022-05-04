module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'light-purple': '#d8b4fe',
        'dark-purple': '#6b21a8',
        'purple': '#9333ea',
        'white': '#fff',
        'white2':'#F6f1f4',
        'tmava':'#301934',
        'white0':'#F8F8FF',
        'plum':'#DDA0DD'
      },
      fontfamily:{
        Poppins:['Poppins, sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens:{
          lg: '1124px',
          xl: '1124px',
          '2xl':'1124px',
        }
    },
    },
  },
  plugins: [],
}