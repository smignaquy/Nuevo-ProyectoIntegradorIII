import React, { Component } from "react";

class Favoritos extends Component{
    constructor(props){
        super(props); 
        this.state = {
            textoFavoritos:"Agregar a Favoritos",
            favoritos: false,
        }
    }
    botonFavoritos(){
        if(this.state.favoritos == false){
            this.setState({
                textoFavoritos : 'Quitar de favoritos',
                favoritos: true
            })
        } else{
            this.setState({
                textoFavoritos: 'Agregar a favoritos',
                favoritos: false
            })
        }
    }

    //primero hay que chequiar si el id ya esta en la lista de favoritos. 
    componentDidMount(){
        let recuperoStorage = localStorage.getItem('favoritos');

        if (recuperoStorage !== null){
            let favoritos = JSON.parse(recuperoStorage);
    
            //si está el id, cambiar el texto del botón
            if(favoritos.includes(this.props.datosPersonaje.id)){
                this.setState({
                    textoBoton: "Quitar de favoritos"
                })
            }
        }
    }
// si no esta, lo agregamos y le cambiamos el texto. 
    agregaraFavoritos() {
        let favoritos = [] 
        let recuperoStorage = localStorage.getItem('favoritos');
        
        if(recuperoStorage !== null){
            favoritos = JSON.parse(recuperoStorage);

           if(favoritos.includes(this.props.datosPersonaje.id)){
             this.setState({
                textoFavoritos: 'Quitar de favoritos'
             })
              
        }
        //guardar en loocal storage 
        let favoritosToString = JSON.stringify(favoritos);        
        localStorage.setItem('favoritos', favoritosToString);

        console.log(localStorage);

    }

    }
// esto hay que cambiarlo no me anda 
    render(){
        return(
            <>
                <h2 class="favoritos"> <botton> AGREGAR A FAVORITOS </botton> </h2>
                <button className='btnFavoritos'type='button'> onClick={() => this.botonFavoritos()} {this.state.textoBoton}</button> 
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
export default Favoritos; 