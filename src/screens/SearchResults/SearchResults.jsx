import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import TarjetaAlbum from "../../components/Tarjeta/TarjetaAlbum";
import TarjetaArtist from "../../components/Tarjeta/TarjetaArtist";
import TarjetaMusic from "../../components/Tarjeta/TarjetaMusic";

class SearchResults extends Component{
    constructor(props){
        super(props); 
        this.state = {
            busqueda : new URLSearchParams(this.props.location.search).get("buscar"),
            results : [],
            resultsAlbum : [],
            resultsMusic : [],
            resultsArtist : [],
            limit: 25,
        }
    }
    componentDidMount() {
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search?q=${this.state.busqueda}`)
          .then((res) => res.json())
          .then((data) => {
            this.setState({
              results: data.data,
            }, () => {
              // Llama a la funcin acomodar después de que se haya actualizado el estado
              this.acomodar();
            });
          })
          .catch(function (error) {
            console.log('El error es: ' + error);
          });
      }
      
      acomodar() {
        let resultsMusic = [];
        let resultsAlbum = [];
        let resultsArtist = [];
      
        this.state.results.map((opcion) => {
            // console.log(opcion.type);
          if (opcion.type === 'track') {
            resultsMusic.push(opcion);
            // console.log(resultsMusic);
          } else if (opcion.type === 'album') {
            resultsAlbum.push(opcion);
          } else if (opcion.type === 'artist') {
            resultsArtist.push(opcion);
          }
        });
      
        this.setState({
          resultsMusic: resultsMusic,
          resultsAlbum: resultsAlbum,
          resultsArtist: resultsArtist,
        });

      }
      

    render(){
        console.log(this.state.resultsMusic);
        return(
            <>
                  <h3 className="search">Resultado de la busqueda: {this.state.busqueda}</h3>
                  <main className="cancionesindex">
                  {this.state.resultsMusic.length === 0 ? (
                            <img src='./img/loadingGif.gif' alt='Espere a que carge..' className="gif"/>
                      ) : (
                          this.state.resultsMusic.slice(5).map((unaMusica) => (
                              <TarjetaMusic data={unaMusica} key={unaMusica.id}/>
                            ))
                            
                      ) 
                      
                  }
                  </main>
            </>
        )
    }



}

export default SearchResults