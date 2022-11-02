import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default class ModificarPersonaje extends Component {

    cajaSerieRef = React.createRef();
    cajaPersonajeRef = React.createRef();

    state={
        series:[],
        personajes:[],
        status:false
    }

    //CARGAMOS LAS SERIES EN UN COMPONENTE
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


    //CARGAMOS LOS POERSONAJES EN UN COMPONENTE
    cargarPersonajes=()=>{
        var request = "api/Personajes";
        var url=Global.urlPersonajes+request
        axios.get(url).then(res =>{
            this.setState({
                personajes:res.data,
                status:true
            })
        })
    }

    //LLAMAMOS AL COMPONENETE cargarPersonajes() Y cargarSeries()
    //PARA MOSTRALO POR PANTALLA
    componentDidMount=()=>{
        this.cargarSeries();
        this.cargarPersonajes();
    }


    //COGEMOS EL ID DE LA SERIE Y EL PERSONAJE PARA HACER UN
    //UPDATE PARA MODIFICARLO
    updateSeries=(e)=>{
        e.preventDefault();
        var idSerie = parseInt(this.cajaSerieRef.current.value);
        var idPersonaje = parseInt(this.cajaPersonajeRef.current.value);
        var data ={
            idSerie:idSerie,
            idPersonaje:idPersonaje
        }
        var request = "api/Personajes/"+idPersonaje+"/"+idSerie;
        var url = Global.urlPersonajes+request
        axios.put(url,data).then(res =>{
            this.setState({
                status:true,
                mensaje:"Personaje modificado!!"
            })
        })
    }

  render() {
    return (
      <div>
        <form>
            <label>Seleccione una serie</label>
            <select ref={this.cajaSerieRef}>
                {
                    //HACMEOS UN MAP DE LAS SERIES PARA MOSTRALOS
                    //EN EL SELECT
                        this.state.series.map((serie,index)=>{
                            return(<option value={serie.idSerie}>
                            {serie.nombre}
                            </option>)
                        })
                }    
            </select><br/>
            <label>Seleccione un personaje</label>
            <select ref={this.cajaPersonajeRef}>
            {
                         //HACMEOS UN MAP DE LOS PERSONAJES PARA MOSTRALOS
                        //EN EL SELECT
                        this.state.personajes.map((per,index)=>{
                            return(<option value={per.idPersonaje}>
                            {per.nombre}
                            </option>)
                        })
                }     
            </select><br/>
            <button className='btn btn-info' onClick={this.updateSeries}>
                Guardar cambios
            </button>
        </form>
 
        <h2 style={{color:"blue"}}>
            {this.state.mensaje}
        </h2>
      </div>
    )
  }
}
