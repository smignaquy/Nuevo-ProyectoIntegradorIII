import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


class TarjetaAlbum extends Component{
    constructor(props){
        super(props)
        this.state = {
            verMas: false,
            textoVerMas: 'Ver Más',
            miniDescripcion: {
            },
        }
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
        console.log(this.props)
        // Accede a las propiedades de unArtista a través de this.props.data
        const unAlbum = this.props.data;
        return(
            <>
            <div key={unAlbum.id} className='album'>
                <Link to={`/detalle/album/${unAlbum.id}`}>
                    <img src={unAlbum.cover} alt="" />
                    <div className="nombresIndex">
                        <p className="nombreHome" key={unAlbum.id}>{unAlbum.title}</p>
                    </div>
                </Link>
                <div className="width">
                    <button id="btn" className="btnVer verIndex" onClick={() => this.botonVerMas()}>{this.state.textoVerMas}</button>
                </div>
                <div className="miniDescrip">
                    <p>{this.state.miniDescripcion.name}</p>
                </div>  
            </div>
            </>
        )
    };
}

export default TarjetaAlbum;