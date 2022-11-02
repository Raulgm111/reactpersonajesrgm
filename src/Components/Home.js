import React, { Component } from 'react'
import imagen from '../assets/images/series.jpg'
export default class Home extends Component {
  render() {
    return (
      <div>
        <img src={imagen}/>
      </div>
    )
  }
}
