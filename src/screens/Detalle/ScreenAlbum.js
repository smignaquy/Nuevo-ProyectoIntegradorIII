import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class ScreenAlbum extends Component{
    constructor(props){
        super(props); 
        this.state = {
            id: this.props.match.params.id,
            dataAlbums: [],
        }
    }
    render(){
        let nombreArtista = this.state.dataAlbums.artist ? this.state.dataCancion.artist.name : 'Nombre no disponible';
        let generosAlbum = this.state.dataAlbums.genres ? this.state.dataCancion.album.title : 'Generos no disponible';
        return(
            <></>
        //     <>  
        //     <h2 className="artistas">{this.state.dataAlbums.title}</h2>
        //     <article className="cajita-canciones">
        //         <img src={`https://e-cdn-images.dzcdn.net/images/cover/${this.state.dataAlbums.cover}/264x264-000000-80-0-0.jpg`} alt="Portada del Album"/>
        //         {/* informacion */}
        //         <h2>Artista: </h2><h3>{nombreArtista}</h3>
        //         <ul>Las canciones pertenecen a los generos: </ul>
        //         {generosAlbum.data.map((unGenero) => (
        //             <li>{unGenero.name}</li>
        //         ))}

        //         <h2>Pertenece al album: </h2><h3></h3>
        //         <h2>Fecha de publicacion</h2><h3>{this.state.dataCancion.release_date}</h3>
        //         <div className="detalle">
        //             <iframe className="detalle" src={this.state.dataCancion.preview} frameBorder="0"/>
        //         </div>  
        //     </article>
        
        // </>
        )
    }
}
export default ScreenAlbum; 