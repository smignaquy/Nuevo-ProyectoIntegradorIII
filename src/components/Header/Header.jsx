import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


class Header extends Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <nav>
                <div className='cabecera'>
                    <Link to="/"><h1>Renée Music</h1></Link>
                    <Link to="/"><img src="./img/logo.jpg" alt="" className="logo"/></Link>
                    <div className='div_buscar'>
                        <form action="./detalles-busqueda.html" method="get">
                        <input name="buscarr" type="search" placeholder="Buscar" className="buscar"/>
                        <button type="submit" id="btn" className="btn"><i className="fa-solid fa-magnifying-glass"></i></button></form>
                    </div>
                </div>
                <div className="seccionesdiv">
                    <Link to="/" className='secciones'>Home</Link>
                    <Link to="/vertodo/canciones" className='secciones'>Ver todas las canciones</Link>
                    <Link to="/vertodo/artistas" className='secciones'>Ver todas los artistas</Link>
                    <Link to="/vertodo/albumes" className='secciones'>Ver todas los albums</Link>
                    <Link to="/playlist" className='secciones'>Playlist</Link>
                </div>
                <img src='./img/guitarrabanner.jpg' alt="" className="banner"/>
            </nav>
        )
    };
}

export default Header;