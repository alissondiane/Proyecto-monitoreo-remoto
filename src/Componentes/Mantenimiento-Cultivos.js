import React from 'react';
import Footer from './Footer';
import Sidebar from './SideBar';
import MantenimientoTable from './Mantenimiento-Table';
import ESTANQUES from './Data-Estanques';
import ModalDetalleCultivo from './ModalDetalleCultivo';

class MantenimientoCultivo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vehiculos: []
        }
    }
    componentWillMount() {

        fetch('https://hackatonesan.herokuapp.com/proyecto/list',
            {
                headers: {
                    'Accept': 'application/json',
                },
                method: 'GET'
            }
        )
            .then((response) => {
                console.log("Respuesta de JSON")
                return response.json();
            })
            .then((alumno) => {
                console.log("Realizando la consulta");
                console.log(alumno);
                var listado = alumno;
                var proyecto = [];

                for (let i = 0; i < listado.length; i++) {
                    var id = listado[i].id;
                    var nombre = listado[i].nombre;
                    var categoria = listado[i].categoria;
                    var categorias = []
                    for (let i = 0; i < categoria.length; i++) {
                        var nombreCat = categoria[i];
                        var opcion = { nombre: nombreCat };
                        categorias.push(opcion);
                    }
                    var link = listado[i].link;
                    var option = { id: id, nombre: nombre, categoria: categorias, link: link };
                    proyecto.push(option);
                }
                console.log(proyecto)
                this.setState({ vehiculos: proyecto })

            })
            .catch(error => {
                // si hay algún error lo mostramos en consola
                console.error(error)
            });
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
                        <button class="btn waves-effect waves-light grey darken-3" type="submit" name="action">Agregar
                            <i class="material-icons right">check</i>
                        </button>
                    </div>              
                </div>                
                </div>
                <ModalDetalleCultivo/>
                
                <Footer />
            </div>
        );
    }
}

export default MantenimientoCultivo;