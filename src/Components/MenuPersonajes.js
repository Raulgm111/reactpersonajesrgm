import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Global from '../Global'

export default class MenuPersonajes extends Component {
    state={
        series:[],
        status:false
    }
    cargarSeries=()=>{
        var request = "api/Series";
        var url=Global.urlPersonajes+request
        axios.get(url).then(res =>{
            this.setState({
                series:res.data,
                status:true
            })
        })
    }

    componentDidMount=()=>{
        this.cargarSeries();
    }
  render() {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <NavLink className="navbar-brand" to="/">Personajes</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink className="nav-link active" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link active" to="/crear">Nuevo personaje</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link active" to="/modificar">Modificar personaje</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/modficiar/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Series
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            {
                this.state.status == true &&
                this.state.series.map((serie,index)=>{
                    return(<li>
                        <NavLink to={"/detalles/"+serie.idSerie} className="dropdown-item bg-light text-dark">{serie.nombre}</NavLink>
                    </li>)
                })
            }
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
  }
}