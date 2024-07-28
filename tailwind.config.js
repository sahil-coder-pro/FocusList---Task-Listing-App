/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-page-bg1' : "url('https://img.freepik.com/free-vector/lovely-blue-vibrant-fluid-background-design_1017-32112.jpg')",
        'main-page-bg2' : "url('https://img.freepik.com/free-vector/gradient-liquid-abstract-background_23-2148922300.jpg?size=626&ext=jpg&ga=GA1.2.929838798.1716836963&semt=ais_user')",
        'main-page-bg3' : "url('https://img.freepik.com/free-vector/colorful-gradient-shapes-background_23-2148152655.jpg?size=626&ext=jpg&ga=GA1.2.929838798.1716836963&semt=ais_user')",
        'main-page-bg4' : "url('https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-2934.jpg?t=st=1717443593~exp=1717447193~hmac=ac24666257b44cc7c17d4e2033ecb837dd6c453b193d67c207b8e2cec48ec0c1&w=996')",
      }
    },

  },
  plugins: [],
}