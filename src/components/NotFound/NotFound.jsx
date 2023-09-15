import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


class NotFound extends Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <div className="contenedorNF">
                <img className="NF" src="https://miro.medium.com/v2/resize:fit:800/1*hFwwQAW45673VGKrMPE2qQ.png" alt="404 Not Found" />
            </div>
        )
    };
}

export default NotFound;