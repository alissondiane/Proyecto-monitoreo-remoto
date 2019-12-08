import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import fondo2 from '../Imagenes/trucha.jpg';
import { browserHistory } from 'react-router-3';

class ContainerParralax extends Component {
    componentDidMount() {
        var elem = document.querySelector(".parallax");
        var instance = M.Parallax.init(elem, {
            height: "200px"
        });
    }
    render() {
        return (

            <div class="parallax-container">
                <div class="parallax"><img src={fondo2}/></div>
                <div className="container">
                <div className="headDetalleProyecto">
                    <p>Monitoreo Cultivo</p>
                    <div className="divider"></div>
                </div>
                </div>
            </div>
                );
            }
        }
        
export default ContainerParralax;