import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class ScreenArtista extends Component{
    constructor(props){
        super(props); 
        const id = this.props.match.params.id
        this.state = {
            dataArtist: [],
            aElegido: [],
            id : id
        }
    }

    // componentDidMount(){
    //     console.log(this.state.id)
    //     //let id = props.match.params.id
    //     //console.log(this.props)
    //     //llamo a la api
    //     fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/artist/${this.state.id}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         this.setState({
    //             dataArtist: data,
    //         })
    //     })
    //     .catch(function(error){
    //     console.log('El error es: ' + error);
    //     })

    //     //this.artistaClickeado(id)
    // }

    // artistaClickeado(id){
    //     //  Desarrollar el método
    //     let artistaElegido = this.state.dataArtist.filter(function(unArtista){
    //         //tenemos que chequear si el tecto a filtrar esta dentro del nonmbre del personaje. Usemos la funcion includes()
    //         return unArtista.id.includes(id)
    //     })
        
    //     this.setState({
    //         aElegido: artistaElegido,
    //     })
    // }

    render(){
        return(
            <>
                <h2 className="artistas">Artista CLICKEADO tiene id {this.state.id}</h2>
                <article className="lamona">
                    <h4>La Mona Jimenez</h4>
                    <p>Genero Cuarteto</p>
                    <img src='' alt="" />
                    <br />
                    <i className="fa-brands fa-youtube"></i>
                </article>
                <button id="btn" className="BotonFavoritos"><Link to='/playlist'>Agregar a favoritos</Link></button>
            </>
        )
    }
}
export default ScreenArtista;