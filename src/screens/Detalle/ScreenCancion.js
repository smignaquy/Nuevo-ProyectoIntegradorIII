import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class ScreenCancion extends Component{
    constructor(props){
        super(props); 
        this.state = {
            id : this.props.match.params.id,
            dataCancion: [],
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

        //this.artistaClickeado(id)
    }

    render(){
        console.log(this.state.dataCancion.album)
        return(
            <>
                <h2 class="artistas">{this.state.dataCancion.title}</h2>
                <article className="cajita-canciones">
                    {/* <img src={this.state.dataCancion.album} alt="Portada del Album" />  */}
                    {/* <h3>Artista: {this.state.dataCancion.artist.name}</h3> */}
                    {/* <h3> Pertenece al disco: {this.state.dataCancion.album.title}</h3> */}
                    <iframe src={this.state.dataCancion.preview} width="80%" height="300" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                </article>
            </>
        )
    }
}
export default ScreenCancion; 

