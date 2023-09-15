import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class ScreenCancion extends Component{
    constructor(props){
        super(props); 
        this.state = {
            id : this.props.match.params.id,
            dataCancion: [],
        }
    }

    componentDidMount(){
        //llamo a la api
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${this.state.id}`)
        .then(res => res.json())
        .then(data => {
            console.log('data', data)
            this.setState({
                dataCancion: data,
            })

        })
        .catch(function(error){
        console.log('El error es: ' + error);
        })

        //this.artistaClickeado(id)
    }

    render(){
        // console.log(this.state.dataCancion.album);
        let nombreArtista = this.state.dataCancion.artist ? this.state.dataCancion.artist.name : 'Nombre no disponible';
        let albumCancion = this.state.dataCancion.album ? this.state.dataCancion.album : 'Nombre no disponible';
        
        return (
            <>
           
                <h2 className="artistas">{this.state.dataCancion.title}</h2>
                <article className="cajita-canciones">
                    <img className="foto" src={albumCancion.cover_medium} alt="Portada del album"/>                    {/* informacion */}
                    <h2>Pertenece al album: </h2>
                    <h3>{albumCancion.title}</h3>
                    <h2>Artista: </h2><h3>{nombreArtista}</h3>
                    <h2>Fecha de publicacion</h2><h3>{this.state.dataCancion.release_date}</h3>
                    <div className="detalle">
                        <iframe className="detalle" src={this.state.dataCancion.preview} frameBorder="0"/>
                    </div>
                </article>
            
            </>
          );
    }
    
}
export default ScreenCancion;