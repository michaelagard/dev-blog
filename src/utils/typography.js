import Typography from 'typography'
// import Wordpress2016 from 'typography-theme-wordpress-2016'
import GitHub from 'typography-theme-github' // Not needed now

GitHub.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
  'body': {
    background: '#393f4d',
  },
  'p,a,small,li': {
    color: '#d4d4dc',
  },
  'h3': {
    color: '#d7d8db'
  },
  'h1,h2,h4,h5,h6': {
    color: '#d4d4dcda'
  },
  'small': {
    fontSize: '12px'
  },
  'a': {
    textDecoration: 'underline'
  },
  'code': {
    color: '#393f4d',
    backgroundColor: '#d4d4dc',
    lineHeight: '1.0',
    fontSize: '1'
  },
  'a:hover': {
    transition: '.2s',
    color: 'white'
  },
  'blockquote': {
    color: "grey",
    borderLeft: "10px solid #ccc",
  },
  '.gatsby-highlight': {
    background: '#d4d4dc',
    padding: '25px'
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
