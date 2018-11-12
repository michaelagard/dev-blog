import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'
import GitHub from 'typography-theme-github'

GitHub.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
  'body': {
    background: '#393f4d',
  },
  'p,a,small': {
    color: '#d4d4dc',
  },
  'h1,h2,h3,h4,h5,h6': {
    color: '#d4d4dcda'
  }
})

delete GitHub.googleFonts

const typography = new Typography(GitHub)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
