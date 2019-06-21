import React, { Component } from 'react'
import Projects from './Projects'
import SocialProfiles from './SocialProfiles'

class App extends Component {
  state = {
    displayBio: false
  }

  toggleDisplayBio = () => {
    this.setState({
      displayBio: !this.state.displayBio
    })
  }

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <p>My name is Luciana. I'm engineer in information systems.</p>
        <p>I'm always looking forward to working on meaningful projects.</p>
        {this.state.displayBio ? (
          <div>
            <p>I live in Cordoba, and code every day</p>
            <p>My favorite language is JavaScript, and I think React.js is awesome.</p>
            <p>Besides coding, I also love play videogames and sports in my free time</p>
            <button onClick={this.toggleDisplayBio}>Show less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read more</button>
          </div>
        )}

        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    )
  }
}

export default App
