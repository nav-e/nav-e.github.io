import Typography from 'typography'
import CodePlugin from 'typography-plugin-code'

const options = {
  headerFontFamily: ['Roboto Slab', 'sans-serif'],
  bodyFontFamily: ['Roboto', 'sans-serif'],
  baseFontSize: '16px',
  bodyWeight: 300,
  headerWeight: 700,
  baseLineHeight: 1.65,
  scaleRatio: 2.25,
  googleFonts: [
    {
      name: 'Roboto Slab',
      styles: [
        '700',
        '700i',
      ],
    },
    {
      name: 'Roboto',
      styles: [
        '300',
        '300i',
        '700',
        '700i',
      ],
    },
  ],
  plugins: [
    new CodePlugin(),
  ],
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
