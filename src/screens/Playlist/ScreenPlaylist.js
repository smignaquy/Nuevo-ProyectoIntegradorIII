import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Favoritos from "../../components/Favoritos/Favoritos";
import Playlist from '../../components/Playlist/Playlist'
import TarjetaMusic from "../../components/Tarjeta/TarjetaMusic";

class ScreenFavoritos extends Component{
  constructor(){
      super()
      this.state = {
        favoritos: [],
      }
  }

  componentDidMount(){
    let arrayFavoritos = [];
    let arrayFavs = [];
    let recuperoStorage = localStorage.getItem('favoritos');
      
    if(recuperoStorage !== null){
      arrayFavoritos = JSON.parse(recuperoStorage);
      arrayFavoritos.map(function(id){
        //llamo a la api
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/'+id)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          arrayFavs.push(data)
          //console.log('array favs', arrayFavs)
          this.setState({
            favoritos : this.arrayFavs
          })
          console.log('array favs state', this.state.favoritos)
        })
        .catch(function(error){
          console.log('El error es: ' + error);
        })
      })
      //console.log('array favs', arrayFavs)
    }
    //console.log('array favs', arrayFavs)
    // this.setState({
    //   favoritos : arrayFavs
    // })
    //console.log('array favs state', this.state.favoritos)
  }

  render(){
      return(
          <>
            <div className="playlist">
              <h1> Esta es tu lista de favoritos: </h1>
            </div>
            <main className="cancionesindex">
                {this.state.favoritos.length === 0 ? (
                        <img src='./img/loadingGif.gif' alt='Espere a que carge..' className="gif"/>
                    ) : (
                        this.state.favoritos.map((unaMusica) => (
                            <TarjetaMusic data={unaMusica} key={unaMusica.id}/>
                          ))
                          
                    )
                    
                }
                </main>
          </>
      )
  };
}

  
export default ScreenFavoritos;