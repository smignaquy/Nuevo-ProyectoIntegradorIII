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
        let albumCancion = this.state.dataCancion.album ? this.state.dataCancion.album.title : 'Nombre no disponible';
        
        return (
            <>
           
                <h2 className="artistas">{this.state.dataCancion.title}</h2>
                <article className="cajita-canciones">
                    <img src={`https://e-cdn-images.dzcdn.net/images/cover/${this.state.dataCancion.md5_image}/264x264-000000-80-0-0.jpg`} alt="Portada del Album"/>
                    <h2>Artista: </h2><h3>{nombreArtista}</h3>
                    <h2>Pertenece al album: </h2><h3>{albumCancion}</h3>
                    <div className="detalle">
                        <iframe className="detalle" src={this.state.dataCancion.preview} frameBorder="0"/>
                    </div>
                </article>
            
            </>
          );
    }
    
}
export default ScreenCancion; 

