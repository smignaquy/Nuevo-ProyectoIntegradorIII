import React, {Component} from 'react';

class Filtro extends Component {

    constructor(props){
        super(props)
        this.state = {
            valorDelInput:''
        }
    }

    controlarEnvio(event){
        event.preventDefault();
        this.props.handle(this.state.valorDelInput)
    }

    guardarElInput(event){
        this.setState({
            valorDelInput: event.target.value,
        }, () => console.log(this.state.valorDelInput))
    }

    render(){
        return(
            <form action="" onSubmit={(e)=>this.controlarEnvio(e)}>
                <label className='labelFiltro' htmlFor="">Filtrar por: </label>
                <input className='inputFiltro' type="text" name="filtro" onChange={(e)=>this.guardarElInput(e)} value={this.state.valorDelInput} />
                <button id="btn" className="btnVer verIndex" type='submit'>Filtrar</button>
            </form>
        )
    }

}

export default Filtro