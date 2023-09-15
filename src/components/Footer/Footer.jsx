import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


class Footer extends Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <div className='divFooter'>
                <div className="footer">
                    <Link to="/"><p className="nombre">Renée Music</p></Link>
                    <Link to="instagram.com"><i className="fa-brands fa-instagram"></i></Link>
                    <Link to="twitter.com"><i className="fa-brands fa-twitter"></i></Link>
                    <Link to="facebook.com"><i className="fa-brands fa-facebook-square"></i></Link>
                </div>
                <div className="integrantes">
                    <p><strong>Integrantes : Remondino Bautista - Santiago Mignaquy - Malena Laborda Moreno</strong></p>
                </div>
            </div>
        )
    };
}

export default Footer;