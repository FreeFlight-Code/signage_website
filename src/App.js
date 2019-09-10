import React,  { Component } from 'react';
import Horizontal from './Layouts/Horizontal';
import Vertical from './Layouts/Vertical';
import Universal from './Layouts/Universal';
import axios from 'axios';
import './App.scss'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      tv:{
        layout: ''
      }
    }
  }

  pathName = window.location.pathname.slice(1).split('/');

  // grabs the tv request from the url
  location = {
    building: this.pathName[1],
    tvIndex: this.pathName[2]
  }

  componentDidMount(){
    axios.get(`/tvdata/${this.location.building}/${this.location.tvIndex}`).then((res)=>{
      console.log(res, 'res...')
      this.setState({
        tv: res.data
      });
    });
  }
    render(){
    switch(this.state.tv.layout){
      case 'horizontal':
        return < Horizontal data={this.state.tv} />
      case 'vertical':
        return < Vertical data={this.state.tv} />
      case 'universal':
        return < Universal data={this.state.tv} />
      default:
        return (
          <div>Undefined Route... format should be /tvData/[buildingName]/[number]</div>
          )
        }
  }

}
export default App;