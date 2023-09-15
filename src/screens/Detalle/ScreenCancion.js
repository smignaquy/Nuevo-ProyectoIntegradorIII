import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class ScreenCancion extends Component{
    constructor(props){
        super(props); 
        this.state = {
            id : this.props.match.params.id,
            dataCancion: [],
            textoBoton: "Agregar a favoritos",
            favoritos: []
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

        let arrayFavoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos');
        
        if(recuperoStorage !== null){
            arrayFavoritos = JSON.parse(recuperoStorage);

           if(arrayFavoritos.includes(this.state.dataCancion.id)){
             this.setState({
                 textoBoton: 'Quitar de favoritos'
             })
           }    
        }
    }

    agregarAFavoritos(id){
        // Agregar un id dentro de array y colocar ese array en localStorage
        let arrayFavoritos = []
        let recuperoStorage = localStorage.getItem('favoritos');
        
        if(recuperoStorage !== null){
           arrayFavoritos = JSON.parse(recuperoStorage);   
        }
           
        if(arrayFavoritos.includes(id)){
            //Si el id está en el array queremos sacar el id.
            arrayFavoritos = arrayFavoritos.filter( unId => unId !== id);

            this.setState({
                textoBoton: "Agregar a Favoritos"
            })


        } else {
            arrayFavoritos.push(id);
            this.setState({
                textoBoton: "Quitar de favoritos"
            })
        }

        //Subirlo a local storage stringifeado
        let arrayFavoritosAString = JSON.stringify(arrayFavoritos)
        localStorage.setItem('favoritos', arrayFavoritosAString)

        console.log('storage', localStorage)
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
                    {/* informacion */}
                    <h2>Artista: </h2><h3>{nombreArtista}</h3>
                    <h2>Pertenece al album: </h2><h3>{albumCancion}</h3>
                    <h2>Fecha de publicacion</h2><h3>{this.state.dataCancion.release_date}</h3>
                    <div className="detalle">
                        <iframe className="detalle" src={this.state.dataCancion.preview} frameBorder="0"/>
                    </div>
                    <button id="btn" className="btnVer verIndex" onClick={()=>this.agregarAFavoritos(this.state.dataCancion.id)} type="button">{ this.state.textoBoton }</button>      
                </article>
            
            </>
          );
    }
    
}
export default ScreenCancion; 

