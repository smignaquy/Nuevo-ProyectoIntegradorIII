import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Filtro from '../../components/Filtro/Filtro';
import TarjetaMusic from "../../components/Tarjeta/TarjetaMusic";

class VerTodoCanciones extends Component{
    constructor(){
        super(); 
        this.state = {
            dataMusic: [],
            limit: 10,
            filtro: false
        }
    }

    componentDidMount() {
        // Lógica de carga de datos al montar el componente
        this.cargarDatos();
      }
    
      cargarDatos() {
        console.log("mount" , this.state.limit)
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/data/tracks?index=0&limit=${this.state.limit}`)
          .then((res) => res.json())
          .then((data) => {
            this.setState({
              dataMusic: data.data,
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

      filtroObjetos(textoAFiltrar){
        //  Desarrollar el método
           let objetosFiltrados = this.state.dataMusic.filter(function(objeto){
                //tenemos que chequear si el texto a filtrar está dentro del nombre del personaje. Usemos la funcuión includes()
                return objeto.name.toUpperCase().includes(textoAFiltrar.toUpperCase())
            })
    
            this.setState({
                dataMusic: objetosFiltrados,
                filtro: true,
            })
        }
    

    render(){
        return(
            <>
                <h2 className="artistas">Todas las canciones</h2>
                <div clas>
                  < Filtro handle={this.filtrarObjetos}/>
                </div>
                <main className="cancionesindex">
                    {this.state.dataMusic.length === 0 ? (
                        <img src='./img/loadingGif.gif' alt='Espere a que carge..' className="gif"/>
                    ) : (
                        this.state.dataMusic.map((unaMusica) => (
                            <TarjetaMusic data={unaMusica} key={unaMusica.id}/>
                          ))
                          
                    )
                    
                }
                </main>
                {this.state.filtro ? (
                  <h2>No se pueden cargar mas opciones si filtraste!</h2>
                ) : (
                  <div className="btnVer">
                  <p>Total Artistas: {this.state.limit} </p>
                  <button id="btn" className="btnVer" onClick={()=>{this.cargarMas()}}>Cargar más</button>
              </div>
                )}
            </>
        )
    }
}
export default VerTodoCanciones;