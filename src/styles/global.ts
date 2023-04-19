import { globalCss } from '@ignite-ui/react'

export const globalstyles = globalCss({
  '*': {
    boxSizing: 0,
    margin: 0,
    padding: 0,
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },
})
