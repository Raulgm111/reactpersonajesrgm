import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default class NuevoPersonaje extends Component {
    cajaNombreRef = React.createRef();
    cajaImagenRef = React.createRef();
    cajaSerieRef = React.createRef();

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

    insertarPersonaje = (e)=>{
        e.preventDefault();
        var request = "api/Personajes";
        var url=Global.urlPersonajes+request;
        var nombre = this.cajaNombreRef.current.value;
        var imagen = this.cajaImagenRef.current.value;
        var serie = parseInt(this.cajaSerieRef.current.value); 

        var personajes={
            nombre:nombre,
            imagen:imagen,
            idSerie:serie
        };

        axios.post(url,personajes).then(res=>{
            this.setState({
                status:true,
                mensaje:"Personaje insertado!!"
            })
        })
    }
  render() {
    return (
        <div>
        <h1>Crear Personaje</h1>
        <form>
            <label>Nombre: </label>
            <input type="text" className='form-control'
            ref={this.cajaNombreRef} required></input>
            <label>Imagen: </label>
            <input type="text" className='form-control'
            ref={this.cajaImagenRef} required></input>
            <label>Serie: </label>
            <select ref={this.cajaSerieRef}>
                {
                    this.state.series.map((serie,index)=>{
                        return(<option value={serie.idSerie}>
                            {serie.nombre}
                        </option>)
                    })
                }
            </select><br/>
            <button className='btn btn-info' onClick={this.insertarPersonaje}>
                Insertar personaje
            </button>
        </form>
        <h2 style={{color:"blue"}}>
            {this.state.mensaje}
        </h2>
      </div>
    )
  }
}
