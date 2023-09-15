import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
// let limit = 10

class VerTodoArtista extends Component{
    constructor(){
        super(); 
        this.state = {
            dataArtist: [],
            limit: 10,
        }
    }

    componentDidMount() {
        // Lógica de carga de datos al montar el componente
        this.cargarDatos();
      }
    
      cargarDatos() {
        console.log("mount" , this.state.limit)
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/data/artists?index=0&limit=${this.state.limit}`)
          .then((res) => res.json())
          .then((data) => {
            this.setState({
              dataArtist: data.data,
            });
          })
          .catch(function (error) {
            console.log('El error es: ' + error);
          });
      }
    
      cargarMas() {
        this.setState(
          {
            limit: this.state.limit + 10,
          },
          () => {
            this.cargarDatos();
          }
        );
      }

    

    render(){
        console.log(this.state.dataArtist);
        return(
            <>
                <h2 className="artistas">Todas las canciones</h2>
                <main className="cancionesindex">
                    {this.state.dataArtist.length === 0 ? (
                        <img src='./img/loadingGif.gif' alt='Espere a que carge..' className="gif"/>
                    ) : (
                        this.state.dataArtist.map((unArtista,idx ) => (
                            <div key={idx} className='album'>
                                <Link to={`/detalle/artista/${unArtista.id}`}>
                                    <img src={unArtista.picture} alt="" />
                                    <p className="nombreHome" key={idx}>{unArtista.name}</p>
                                </Link>
                            </div>
                        ))
                    )}
                </main>
                <div className="btnVer">
                    <p>Total Artistas: {this.state.limit} </p>
                    <button id="btn" className="btnVer" onClick={()=>{this.cargarMas(); this.componentDidMount();}}>Cargar más</button>
                </div>
            </>
        )
    
    }
    
}
export default VerTodoArtista;