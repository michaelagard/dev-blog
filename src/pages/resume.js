import React from 'react'
import Layout from '../components/Layout'

const resumeStyle = {
  position: "absolute",
  left: "15px"
}

const returnHome = {
  position: "absolute",
  left: "15px",
  top: "1140px"
}

class Resume extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <iframe style={resumeStyle} src="https://resume.creddle.io/embed/38bt9aibm6t"
          width="850" height="1100" align="middle" scrolling="no" seamless></iframe>
        <p style={returnHome}><a href="/">return home</a></p>
      </Layout>
    )
  }
}

export default Resume
