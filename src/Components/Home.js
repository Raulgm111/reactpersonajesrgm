import React, { Component } from 'react'
import imagen from '../assets/images/series.jpg'
export default class Home extends Component {
  render() {
    return (
      //AQUI INSERTAMOS LA IMAGEN QUE VERSMO EN LA PAGINA PRINCIAPL
      <div>
        <img src={imagen}/>
      </div>
    )
  }
}
