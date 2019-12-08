import React from 'react'
import { browserHistory } from 'react-router-3';
class Nav extends React.Component {
    constructor(props) {
        super(props);
        
        this.VistaRegistro = this.VistaRegistro.bind(this);
    }
    VistaRegistro = (e) => {

        browserHistory.push('/Registro/proyecto');
        e.preventDefault();

    }

    render() {
        return (
            
            <nav className="purple">
                <div className="container">
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo">Monitoreo</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="/Vista/inicio"><i class="material-icons left">home</i>INICIO</a></li>
                        <li><a href="#"><i class="material-icons left">phone</i>CONTÁCTANOS</a></li>
                        <li><a onClick={this.VistaRegistro} class="waves-effect waves-light btn purple">REGISTRAR</a></li>
                    </ul>
                </div>
                </div>
            </nav>
        )
    }
}
//<td className="td">{this.props.pago.idRec}</td>
//<td className="td">{this.props.pago.alumno.idAlum}</td>
export default Nav;