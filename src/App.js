import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Form from './Form.js';
import Report from './Report.js';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      colors: {
        BLACK: 2,
        BLUE: 0,
        RED: 0,
        GREEN:0
      }
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <Report colors={this.state.colors} />
      </div>
    );
  }
}

export default App;
