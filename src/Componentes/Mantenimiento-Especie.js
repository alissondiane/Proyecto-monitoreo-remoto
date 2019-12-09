import React from 'react';
import Footer from './Footer';
import Sidebar from './SideBar';
import MantenimientoTableEspecie from './Mantenimiento-TableEspecie';
import ESPECIES from './Data-Especie';
import swal from 'sweetalert'
import ModalRegistrarEspecie from './ModalRegistrarEspecie';

class MantenimientoEspecie extends React.Component {
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
        swal("Agregar Cultivo!", "", "success");
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
                    <p>Mantenimiento Especies</p>
                    <div class="divider"></div>
                    </div>
                    </div>
                    <div class="row">
                        <div class="col s12 m12 l12">
                        <MantenimientoTableEspecie listado={ESPECIES}/>
                        </div>
                    </div>
                <div class="row">
                    <div  class="col s7 push-s5">
                        <ModalRegistrarEspecie/>
                        <button data-target="modal3" class="btn modal-trigger grey darken-3">Agregar<i class="material-icons right">add_box</i></button>
                    </div>              
                </div>                
                </div>
                                
                <Footer />
            </div>
        );
    }
}

export default MantenimientoEspecie;