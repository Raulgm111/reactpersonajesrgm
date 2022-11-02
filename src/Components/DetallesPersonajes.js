import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'

export default class DetallesPersonajes extends Component {
    state={
        detallesP:[],
        status:false
    }
    cargarPersonajes=()=>{
        var numero=parseInt(this.props.id)
        console.log(numero)
        var request = "/api/Series/PersonajesSerie/"+numero;
        var url=Global.urlPersonajes+request
        axios.get(url).then(res =>{
            this.setState({
                detallesP:res.data,
                status:true
            })
        })
    }

    componentDidMount=()=>{
        this.cargarPersonajes();
    }
  render() {
    return (
      <div>
        <table className='table table-bordered table-dark'>
            <thead>
                <tr>
                <th>Personaje</th>
                <th>Imagen</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.detallesP.map((per,index)=>{
                        return(<tr>
                            <td>{per.nombre}</td>
                            <td><img style={{width:"150px"}} src={per.imagen}/></td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}
