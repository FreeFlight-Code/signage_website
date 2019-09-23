import React,  { Component } from 'react';
import Universal from './Layouts/Universal';
import axios from 'axios';
import './App.scss'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  pathName = window.location.pathname.slice(1).split('/');

  // grabs the tv request from the url
  location = {
    building: this.pathName[1],
    tvIndex: this.pathName[2]
  }

  componentDidMount(){
    axios.get(`/tvdata/${this.location.building}/${this.location.tvIndex}`)
      .then( res=>{
        if (res.data) {
          this.setState({
            tv: res.data
          });

        }
      })
      .catch(err=>console.log('no data from backend'));
  }

  render(){
    const { tv } = this.state;
    if(tv && tv.orientation && tv.dataBottom.length)
    {
      return < Universal data={tv} />
    }
    else 
    {
      return <div>  Undefined Route... format should be /tvData/[buildingName]/[tv number]  </div>
    }
  }

}
export default App;