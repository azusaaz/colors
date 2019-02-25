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

  setCurrentPage=(page)=>{
    this.setState({currentPage: page});
  }

  render() {

    const form = this.state.currentPage ==='form'?
    <Form 
      input={this.state.input}
      colors={this.state.colors}
      setInput={input => this.setState({ input })}
      setColors={colors => this.setState({ colors })}
      setCurrentPage={this.setCurrentPage}
    />:null;  
    
    const report = this.state.currentPage ==='report'?
    <Report
      colors={this.state.colors} 
    />:null

    return (
      <div className="App">
        <Header 
        currentPage={this.state.currentPage}
        setCurrentPage={this.setCurrentPage}
        />
        {form}
        {report}
      </div>
    );
  }
}

export default App;
