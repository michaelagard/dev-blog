import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'
// import GitHub from 'typography-theme-github' // Not needed now

Wordpress2016.overrideThemeStyles = () => ({
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

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
