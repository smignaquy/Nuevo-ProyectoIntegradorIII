import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import TarjetaMusic from "../../components/Tarjeta/TarjetaMusic";



class ScreenAlbum extends Component{
    constructor(props){
        super(props); 
        this.state = {
            id: this.props.match.params.id,
            dataAlbums: [],
        }
    }

    componentDidMount(){
        //llamo a la api
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${this.state.id}`)
        .then(res => res.json())
        .then(data => {
            console.log('data', data)
            this.setState({
                dataAlbums: data,
            })

        })
        .catch(function(error){
        console.log('El error es: ' + error);
        })

        //this.artistaClickeado(id)
    }

    render(){
        let nombreArtista = this.state.dataAlbums.artist ? this.state.dataAlbums.artist.name : 'Nombre no disponible';
        let generoAlbums = this.state.dataAlbums.genres ? this.state.dataAlbums.genres.data : [];
        let cancionesAlbum = this.state.dataAlbums.tracks ? this.state.dataAlbums.tracks.data : [];
        console.log(cancionesAlbum);
        return(
            <>
                <h2 className="artistas">{this.state.dataAlbums.title}</h2>
                <article className="cajita-canciones">
                    <img className="foto" src={this.state.dataAlbums.cover_medium} alt="Portada del album"/>
                    <h2>Artista: </h2><h3>{nombreArtista}</h3>
                    <h2>Fecha de publicacion</h2><h3>{this.state.dataAlbums.release_date}</h3>
                    <h2>Pertenece al genero: </h2>
                    <main className="cancionesindex">
                        {generoAlbums.length === 0 ? (
                            <img src='./img/loadingGif.gif' alt='Espere a que carge..' className="gif"/>
                        ) : (
                            generoAlbums.map((unAlbum) => (
                                <div className='album'>
                                    <img src={unAlbum.picture} alt="" />
                                    <div className="nombresIndex">
                                        <p className="nombreHome">{unAlbum.name}</p>
                                    </div>
                                </div>
                            ))
                        )}
                    </main>
                    <h2>Algunas de sus canciones son: </h2>
                    <main className="cancionesindex">
                        {cancionesAlbum.length === 0 ? (
                        <img src='./img/loadingGif.gif' alt='Espere a que carge..' className="gif"/>
                            ) : (
                            cancionesAlbum.map((unaMusica) => (
                            // console.log(unaMusica)
                            <TarjetaMusic data={unaMusica} key={unaMusica.id}/>
                          ))
                          )}
                    </main>
                    
                </article>
            </>
        )
    }
}
export default ScreenAlbum;