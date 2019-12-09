import React from 'react';
import Footer from './Footer';
import Sidebar from './SideBar';
import MantenimientoTable from './Mantenimiento-Table';
import ESTANQUES from './Data-Estanques';
import swal from 'sweetalert'
import ModalRegistrarEstanque from './ModalRegistrarEstanque';

class MantenimientoEstanques extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vehiculos: []
        }
        this.onSubmit = this.onSubmit.bind(this);  
    }
    componentWillMount() {
    }
    onSubmit=(e)=>{
        this.setState({ nombreEstanqueActual: this.state.nombreEstanque});
        swal("Agregar Estanque!", "", "success");
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
                    <p>Mantenimiento Estanques</p>
                    <div class="divider"></div>
                    </div>
                    </div>
                    <div class="row">
                        <div class="card-panel hoverable col s12 m12 l12">
                <table class="highlight">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Capacidad</th>
                            <th>Cultivo</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                  <MantenimientoTable listado={ESTANQUES}/>
                </table>
                </div>
                </div>
                <div class="row">
                    
                    <div  class="col s7 push-s5">
                    <ModalRegistrarEstanque/>
                    <button data-target="modal1" class="btn modal-trigger grey darken-3">Agregar<i class="material-icons right">add_box</i></button>

                    </div>              
                </div>                
                </div>
                                
                <Footer />
            </div>
        );
    }
}

export default MantenimientoEstanques;