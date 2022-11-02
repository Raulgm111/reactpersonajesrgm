import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import MenuPersonajes from './Components/MenuPersonajes'
import Home from './Components/Home'
import DetallesSerie from './Components/DetallesSerie';
import DetallesPersonajes from './Components/DetallesPersonajes';
import NuevoPersonaje from './Components/NuevoPersonaje';
import ModificarPersonaje from './Components/ModificarPersonaje';

export default class Router extends Component {
  render() {
    function DetallesSerieElement(){
        var {id}=useParams();
        return(<DetallesSerie id={id}/>)
    }
    function DetallesPersonajesElement(){
        var {id}=useParams();
        return(<DetallesPersonajes id={id}/>)
    }
    return (
      <BrowserRouter>
        <MenuPersonajes/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/detalles/:id' element={<DetallesSerieElement/>}></Route>
            <Route path='/detallesPersonajes/:id' element={<DetallesPersonajesElement/>}></Route>
            <Route path='/crear' element={<NuevoPersonaje/>}></Route>
            <Route path='/modificar' element={<ModificarPersonaje/>}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}
