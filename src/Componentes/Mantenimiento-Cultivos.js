import React from 'react';
import Footer from './Footer';
import Sidebar from './SideBar';
import MantenimientoTable from './Mantenimiento-Table';
import ESTANQUES from './Data-Estanques';
import ModalAgregarCultivo from './ModalAgregarCultivo';

class MantenimientoCultivo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vehiculos: []
        }
    }
    componentWillMount() {
    }
    render() {
        const { nombres, isLoading, isValid } = this.state;

        return (
            <div className="">
                
                <div className="nav-wrapper navLogo">
                    <a href="#" data-target="slide-out" className="sidenav-trigger">
                            <i className="material-icons">menu</i>
                    </a>
                </div>
                <Sidebar />
                <div class="container">
                    <div className="row">
                    <div class="headDetalleProyecto">
                    <p>Mantenimiento Cultivo</p>
                    <div class="divider"></div>
                    </div>
                    </div>
                    <div class="row">
                        <div class="col s12 m12 l12 z-depth-1">
                <table class="highlight">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre del cultivo</th>
                            <th>Capacidad</th>
                            <th>Especie</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                  <MantenimientoTable listado={ESTANQUES}/>
                </table>
                </div>
                </div>
                <div class="row">
                    <div  class="col s7 push-s5">
                    </div>              
                </div>                
                </div>
                                <button data-target="modal2" class="btn modal-trigger">Modal</button>
                <ModalAgregarCultivo/>
                <Footer />
            </div>
        );
    }
}

export default MantenimientoCultivo;