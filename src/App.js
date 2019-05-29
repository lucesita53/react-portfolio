import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()

    this.state = { displayBio: false }
  }

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <p>My name is Luciana. I'm a software engineer.</p>
        <p>I'm always looking forward to working on meaningful projects.</p>
        {this.state.displayBio ? (
          <div>
            <p>I live in Cordoba, and code every day</p>
            <p>My favorite language is JavaScript, and I think React.js is awesome.</p>
            <p>Besides coding, I also love play videogames</p>
          </div>
        ) : null}
      </div>
    )
  }
}

export default App
