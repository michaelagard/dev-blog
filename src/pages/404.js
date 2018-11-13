import React from 'react'
import Layout from '../components/Layout'

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <h1>404</h1>
        <p><a href="/">return home</a></p>
      </Layout>
    )
  }
}

export default NotFoundPage
