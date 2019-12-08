import React from 'react';
import $ from 'jquery';
import Footer from './Footer';
import Sidebar from './SideBar';
import ChartExample from './Chart';
import DATACHART1 from './Data-Chart';
import DATACHART2 from './Data-Chart2';
import DATACHART3 from './Data-Chart3';
import DETALLEGRAFICO from './DataDetalleGrafico';
import TablaDetalleGrafico from './TableDetalleGrafico';

class VistaInicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            DATACHART: []
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
                            <p>Histórico de cultivos</p>
                            <div class="divider"></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s12 m12 l7">
                            <ChartExample title="MONITOREO DE TEMPERATURA" data={DATACHART1} />
                        </div>
                        <div class="col s12 m12 l5">
                            <table class="highlight">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Parámetro</th>
                                        <th>Fecha</th>
                                    </tr>
                                </thead>
                                <TablaDetalleGrafico listado={DETALLEGRAFICO} />
                            </table>
                        </div>
                        <div class="col s12 m12 l7">
                            <ChartExample title="MONITOREO DE OXIGENO DISUELTO" data={DATACHART2} />
                        </div>
                        <div class="col s12 m12 l5">
                            <table class="highlight">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Parámetro</th>
                                        <th>Fecha</th>
                                    </tr>
                                </thead>
                                <TablaDetalleGrafico listado={DETALLEGRAFICO} />
                            </table>
                        </div>
                        <div class="col s12 m12 l7">
                            <ChartExample title="MONITOREO DE PH" data={DATACHART3} />
                        </div>
                        <div class="col s12 m12 l5">
                            <table class="highlight">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Parámetro</th>
                                        <th>Fecha</th>
                                    </tr>
                                </thead>
                                <TablaDetalleGrafico listado={DETALLEGRAFICO} />
                            </table>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default VistaInicio;