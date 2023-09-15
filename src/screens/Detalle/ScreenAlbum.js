import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class ScreenAlbum extends Component{
    constructor(props){
        super(props); 
        this.state = {
            id: this.props.match.params.id,
            dataAlbums: [],
        }
    }
    render(){
        return(
            <>
                <h2 class="artistas">Album CLICKEADO {this.state.id}</h2>
                <button id="btn" className="BotonFavoritos"><Link to='/playlist'>Agregar a favoritos</Link></button>
                <section>
                    <article class="disc">
                    </article>
                    <main class="cantante">
                    </main>
                </section>
            </>
        )
    }
}
export default ScreenAlbum; 