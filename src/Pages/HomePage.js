import React, { Component } from 'react';
import UpperPage from './UpperPage';
import LowerPage from './LowerPage';
import suiteData from '../Data/suite_data.json';

class HomePage extends Component {
  constructor(props){
    super(props)
    this.state = {
      upperTV: true
    }
  }

  handleClick = ()=>{
    this.setState({
      upperTV: !this.state.upperTV
    })
  }

  render() {
    if (this.state.upperTV){
      return (
          < UpperPage suites={suiteData} handleClick={this.handleClick.bind(this)}/>
      );
    } else {
      return (
        < LowerPage suites={suiteData} handleClick={this.handleClick.bind(this)}/>
      )
    }
  }
}

export default HomePage;
