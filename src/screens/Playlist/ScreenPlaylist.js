import React, { Component } from "react";
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
  
    // datos del storage con la clave 'favoritos'
    let recuperoStorage = localStorage.getItem('favoritos');
    // ver si hay datos almacenados en 'favoritos'
    if(recuperoStorage !== null){
      // convertirlos de JSON a un array y asignarlos a 'arrayFavoritos'
      arrayFavoritos = JSON.parse(recuperoStorage);
  
      arrayFavoritos.map((id) => {
        console.log(id);
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/'+id)
        .then(res => res.json())
        .then(data => {
          arrayFavs.push(data);

          this.setState({
            favoritos : arrayFavs
          });
        })
        .catch(function(error){
          console.log('El error es: ' + error);
        });
      });
    }
  }
  

  render(){
      return(
          <>
            <div className="playlist">
              <h2 className="h2artistas"> Esta es tu lista de favoritos: </h2>
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