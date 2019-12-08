import React from 'react';
import $ from 'jquery';
import Footer from './Footer';
import Sidebar from './SideBar';
import ChartExample from './Chart';
import DATACHART1 from './Data-Chart';
import DATACHART2 from './Data-Chart2';
import DATACHART3 from './Data-Chart3';
import ModalDetalleCultivo from './ModalDetalleCultivo';
import SelectCultivo from './SelectCultivo';
import DATASELECT from './DataSelectCultivos';
import DETALLEGRAFICOACTUAL from './DataDetalleGraficoActual';
import ChartActual from './ChartActual';
import TablaDetalleGraficoActual from './TableDetalleGraficoActual';

class VistaInicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            DATACHART: [],
            idCultivo: 0,
            nombreCultivo:''
        }
        this.OpcionSeleccionadaCultivo = this.OpcionSeleccionadaCultivo.bind(this);
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
    OpcionSeleccionadaCultivo(opcion) {
        if (opcion != null) {
            console.log("Opcion seleccionada cultivo");
            console.log(opcion);
            console.log(opcion.value);
            this.setState({ idCultivo: opcion.value,nombreCultivo:opcion.label });
        }
    }

    render() {
        const { nombres, isLoading, isValid } = this.state;
        return (
            <div>
                <div className="nav-wrapper navLogo">
                    <a href="#" data-target="slide-out" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>
                </div>
                <Sidebar />
                <div className="container">
                    <div className="row">
                        <div className="headDetalleProyecto">
                            <p>Monitoreo Cultivo</p>
                            <div className="divider"></div>
                        </div>
                        <div className="SeccionCabecera">
                            <p>Búsqueda</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 m12 l6">
                            <SelectCultivo listado={DATASELECT} Opcion={this.OpcionSeleccionadaCultivo} />
                        </div>
                        <div className="col s12 m12 l6">
                            <button class="btn waves-effect waves-light grey darken-3" type="submit" name="action">Buscar
                            <i class="material-icons right">search</i>
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="SeccionCabecera">
                            <p>Gráficos {this.state.nombreCultivo}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 m12 l6">
                            <ChartActual lower={0} upper={50} unidad={"°C"} title={"Monitoreo de temperatura"} minValue={25} maxValue={30} valor={25}/>
                        </div>
                        <div class="col s12 m12 l6">
                            <table class="highlight">
                                <thead>
                                    <tr>
                                        <th>RANGO</th>
                                        <th>ESTADO</th>
                                        <th>COLOR</th>
                                    </tr>
                                </thead>
                                <TablaDetalleGraficoActual listado={DETALLEGRAFICOACTUAL.temperatura} />
                            </table>
                        </div>
                        <div className="col s12 m12 l6">
                            <ChartActual lower={60} upper={150} unidad={"db"} title={"Monitoreo de oxigeno disuelto"} minValue={80} maxValue={120}  valor={28}/>
                        </div>
                        <div class="col s12 m12 l6">
                            <table class="highlight">
                                <thead>
                                    <tr>
                                        <th>RANGO</th>
                                        <th>ESTADO</th>
                                        <th>COLOR</th>
                                    </tr>
                                </thead>
                                <TablaDetalleGraficoActual listado={DETALLEGRAFICOACTUAL.oxigeno} />
                            </table>
                        </div>
                        <div className="col s12 m12 l6">
                            <ChartActual lower={0} upper={14} unidad={"ph"} title={"Monitoreo de PH"} minValue={5} maxValue={7}  valor={6.7}/>
                        </div>
                        <div class="col s12 m12 l6">
                            <table class="highlight">
                                <thead>
                                    <tr>
                                        <th>RANGO</th>
                                        <th>ESTADO</th>
                                        <th>COLOR</th>
                                    </tr>
                                </thead>
                                <TablaDetalleGraficoActual listado={DETALLEGRAFICOACTUAL.ph} />
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