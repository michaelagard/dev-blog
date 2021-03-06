import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'


class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(1.0), // changed from 2.5
        }}
      >
        <img
          src={profilePic}
          alt={`Kyle Mathews`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: "12%",
            opacity: ".7",
          }}
        />
        <p>
          I'm <strong>Michael Agard</strong>, a freelance student, professional adult, and software engineer.{' '}
          <a href="https://twitter.com/AdultAgard" target="_blank">
            You should follow me on Twitter
          </a>{' '} or <a href="/resume">check out my resume</a>.
        </p>
      </div>
    )
  }
}

export default Bio
