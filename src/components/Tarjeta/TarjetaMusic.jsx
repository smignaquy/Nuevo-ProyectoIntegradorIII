import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


class TarjetaMusic extends Component{
    constructor(props){
        super(props)
        this.state = {
            unaMusica : this.props.data,
            verMas: false,
            textoVerMas: 'Ver Más',
            miniDescripcion: {},
            textoBoton: "Agregar a favoritos",
            favoritos: []
        }
    }

    componentDidMount(){
        let arrayFavoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos');
        
        if(recuperoStorage !== null){
            arrayFavoritos = JSON.parse(recuperoStorage);

           if(arrayFavoritos.includes(this.state.unaMusica.id)){
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


    botonVerMas(){
        if(this.state.verMas == false){
            this.setState({
                textoVerMas : 'Ocultar',
                miniDescripcion : {
                    // name: this.props.data.name
                    name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam assumenda tempora veniam sed. Rerum hic quaerat ad nam impedit, incidunt magnam voluptatum doloribus cupiditate repellat laudantium ullam deleniti, aut iusto!',
                },
                verMas: true
            })
        } else{
            this.setState({
                textoVerMas : 'Ver Más',
                miniDescripcion : {},
                verMas: false
            })
        }
    }

    render(){
        //console.log(this.props)
        // Accede a las propiedades de unArtista a través de this.props.data
        const unaMusica = this.props.data;
        return(
            <>
                <div key={unaMusica.id} className='album'>
                    <Link to={`/detalle/artista/${unaMusica.id}`}>
                        <img src={unaMusica.artist.picture} alt="" />
                        <div className="nombresIndex">
                            <p className="nombreHome" key={unaMusica.id}>{unaMusica.title}</p>
                        </div>
                    </Link>
                    <div className="width">
                        <button id="btn" className="btnVer verIndex" onClick={() => this.botonVerMas()}>{this.state.textoVerMas}</button>
                    </div>
                    <div className="miniDescrip">
                        <p>{this.state.miniDescripcion.name}</p>
                    </div>   
                    <button id="btn" className="btnVer verIndex" onClick={()=>this.agregarAFavoritos(this.state.unaMusica.id)} type="button">{ this.state.textoBoton }</button>                            
                </div>
            </>
        )
    };
}

export default TarjetaMusic;