import {
  defineConfig,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'
import clsx from 'clsx'

const brandColors = {
  github: '#1a1a1a',
  twitter: '#43b7e9',
  youtube: '#ee3939',
  linkedin: '#2d68ff',
  twitch: '#ee3fc8',
  gitlab: '#eb4925',
  codepen: '#333333'
}

export default defineConfig({
  content: { pipeline: { include: [/\.(js|jsx)($|\?)/] } },
  theme: {
    boxShadow: {
      DEFAULT: '0px 0px 32px rgba(0, 0, 0, 0.10)'
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
      danger: '#ff3939',
      ...brandColors
    },
    fontFamily: {
      sans: '"Instrument Sans Variable", sans-serif'
    }
  },
  safelist: Object.keys(brandColors).map(brand => `bg-${brand}`),
  shortcuts: [
    {
      'btn-primary': clsx(
        'bg-primary-300 text-default-50 transition',
        'hover:(bg-primary-200 shadow shadow-primary-300/25)',
        'disabled:(bg-primary-300/25 shadow-none)'
      ),
      'btn-outline':
        'border border-primary-300 text-primary-300 hover:bg-primary-100'
    }
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
