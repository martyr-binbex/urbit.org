module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: '#000',
      white: '#FFF',
      gray: 'rgba(0, 0, 0, 0.6)',
      yellow: '#FCDB63',
      midYellow: 'rgba(255, 199, 0, 0.6)',
      lightYellow: 'rgba(255, 199, 0, 0.3)',
      washedYellow: 'rgba(255, 199, 0, 0.05)',
      green: 'rgba(0, 159, 101, 1)',
      midGreen: 'rgba(0, 159, 101, 0.6)',
      lightGreen: 'rgba(0, 159, 101, 0.3)',
      washedGreen: 'rgba(0, 159, 101, 0.05)',
    },
    fontFamily: {
      sans: ['Inter', '-apple-system', 'sans-serif'],
      mono: ['Source Code Pro', 'monospace'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
