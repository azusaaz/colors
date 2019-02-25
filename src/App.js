import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Form from './Form.js';
import Report from './Report.js';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'form',
      input:{
        email: '',
        phone: '',
        color: '',
      },
      colors: {
        BLACK: 0,
        BLUE: 0,
        RED: 0,
        GREEN:0
      }
    };
  }

  componentWillMount(){
    // retrieve local storage data for report
    var record  = localStorage.getItem('colorRecord');
    if(record){
      this.setState({colors:JSON.parse(record)})
    }
  }

  render() {

    return (
      <div className="App">
        <Header />
        <Form 
          input={this.state.input}
          colors={this.state.colors}
          setInput={input => this.setState({ input })}
          setColors={colors => this.setState({ colors })}
          />
        <Report colors={this.state.colors} />
      </div>
    );
  }
}

export default App;
