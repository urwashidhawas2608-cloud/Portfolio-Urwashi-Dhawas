const c = (v) => `rgb(var(--${v}) / <alpha-value>)`
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: { bg: c('bg'), surface: c('surface'), fg: c('fg'), mute: c('mute'), violet: c('violet'), cyan: c('cyan') },
      fontFamily: { display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'], sans: ['"DM Sans"', 'system-ui', 'sans-serif'], mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'] }
    }
  },
  plugins: []
}
