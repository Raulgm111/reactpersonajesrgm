import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class DetallesSerie extends Component {
    state={
        detallesS:{},
        status:false
    }

    //CARGAMOS LAS SERIES EN UN COMPONENTE
    cargarSeries=()=>{
        var numero = parseInt(this.props.id)
        var request = "api/Series/"+numero;
        var url=Global.urlPersonajes+request
        axios.get(url).then(res =>{
            this.setState({
                detallesS:res.data,
                status:true
            })
        })
    }

    //LLAMAMOS AL COMPONENETE cargarSeries() 
    //PARA MOSTRALO POR PANTALLA
    componentDidMount=()=>{
        this.cargarSeries();
    }


    //ACTUALIZAMOS EL COMPONENTE PARA QUE SE MUESTRE POR PANTALLA
    componentDidUpdate=(oldProps)=>{
        if(oldProps.id != this.props.id){
            this.cargarSeries();
        }
      }
  render() {
    return (
      <div>
         <img style={{width:"650px"}} src={this.state.detallesS.imagen}/>
         <h2>{this.state.detallesS.nombre}</h2>
         <p>IMDB: {this.state.detallesS.puntuacion}</p>
         <button className="btn btn-success"><NavLink  className="nav-link active" to={"/detallesPersonajes/"+this.state.detallesS.idSerie}>Personajes</NavLink></button>
      </div>
    )
  }
}
