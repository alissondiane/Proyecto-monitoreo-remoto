import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import foto2 from '../Imagenes/foto2.jpg';
import fondo from '../Imagenes/fondo.jpg';
import { browserHistory } from 'react-router-3';

class Sidebar extends Component {
    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
        this.VistaMonitoreo= this.VistaMonitoreo.bind(this);
        this.VistaHistoricoCultivo= this.VistaHistoricoCultivo.bind(this);
        this.VistaMantenimientoCultivo= this.VistaMantenimientoCultivo.bind(this);
        this.VistaMantenimientoEstanque= this.VistaMantenimientoEstanque.bind(this);
        this.VistaMantenimientoEspecie= this.VistaMantenimientoEspecie.bind(this);

    }
   
    VistaMonitoreo = (e) => {
        browserHistory.push('/Vista/Inicio');
        e.preventDefault();
    }
    VistaHistoricoCultivo = (e) => {
        browserHistory.push('/Historico-Cultivo');
        e.preventDefault();
    }
    VistaMantenimientoCultivo = (e) => {
        browserHistory.push('/Mantenimiento-Cultivo');
        e.preventDefault();
    }
    VistaMantenimientoEstanque = (e) => {
        browserHistory.push('/Mantenimiento-Estanque');
        e.preventDefault();
    }
    VistaMantenimientoEspecie= (e) => {
        browserHistory.push('/Mantenimiento-Especie');
        e.preventDefault();
    }
    render() {
        return (
                <ul id="slide-out" className="sidenav">
                    <li><div className="user-view">
                        <div className="background">
                            <img src={fondo}/>
                        </div>
                            <a href="#user"><img class="circle" src={foto2}/></a>
                            <a href="#name"><span class="white-text name">Rejina Gutierrez</span></a>
                            <a href="#email"><span class="white-text email">rejina2143@gmail.com</span></a>
                        </div>
                    </li>
                        <li>
                            <a onClick={this.VistaMonitoreo}>
                                <i className="material-icons">remove_red_eye</i>Monitoreo
                            </a>
                        </li>
                        <li>
                            <a onClick={this.VistaHistoricoCultivo}>
                                <i className="material-icons">history</i>Histórico
                            </a>
                        </li>
                        <li>
                            <a onClick={this.VistaMantenimientoEstanque}>
                                <i  className="material-icons">mode_edit</i>Mantenimiento Estanques
                            </a>
                        </li>
                        <li>
                            <a onClick={this.VistaMantenimientoCultivo}>
                                <i className="material-icons">mode_edit</i>Mantenimiento Cultivos
                            </a>
                        </li>
                        <li>
                            <a onClick={this.VistaMantenimientoEspecie}>
                                <i className="material-icons">mode_edit</i>Mantenimiento Especies
                            </a>
                        </li>
                </ul>
                    );
                }
            }
            
export default Sidebar;