import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      default: {
        50: '#ffffff',
        100: '#fafafa',
        200: '#d9d9d9',
        300: '#737373',
        400: '#333333'
      },
      primary: {
        100: '#efebff',
        200: '#beadff',
        300: '#633cff'
      },
      danger: '#ff3939'
    },
    fontFamily: {
      sans: '"Instrument Sans Variable", sans-serif'
    }
  }
})
