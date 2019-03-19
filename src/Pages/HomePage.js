import React, { Component } from 'react';

class App extends Component {
  render() {
      console.log(window.location)
    return (
      <div className="App">
        Home Page
        <a href='/lower'>Lower Level</a>
        <a href='/upper'>Upper Level</a>
      </div>
    );
  }
}

export default App;
