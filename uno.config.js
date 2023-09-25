import {
  defineConfig,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'
import clsx from 'clsx'

export default defineConfig({
  theme: {
    boxShadow: {
      DEFAULT: "0px 0px 32px theme('colors.primary.300 / 25%')"
    },
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
  },
  shortcuts: [
    {
      'btn-primary': clsx(
        'bg-primary-300 text-default-50 transition',
        'hover:(bg-primary-200 shadow)',
        'disabled:(bg-primary-300/60 shadow-none)'
      )
    }
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
