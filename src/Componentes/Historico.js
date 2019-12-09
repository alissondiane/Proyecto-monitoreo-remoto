import React from 'react';
import $ from 'jquery';
import Footer from './Footer';
import Sidebar from './SideBar';
import ChartExample from './Chart';
import DATACHART1 from './Data-Chart';
import DATACHART2 from './Data-Chart2';
import DATACHART3 from './Data-Chart3';
import DATASELECTESTANQUES from './DataSelectEstanque';
import DATASELECTCULTIVOS from './DataSelectCultivo';
import DETALLEGRAFICO from './DataDetalleGrafico';
import TablaDetalleGrafico from './TableDetalleGrafico';
import SelectElegir from './SelectElegir';
import swal from 'sweetalert'

class VistaInicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            DATACHART: [],
            idCultivo: 0,
            nombreCultivo: '',
            idEstanque: 0,
            nombreEstanque: '',
            nombreEstanqueActual:''
        }
        this.OpcionSeleccionadaEstanque = this.OpcionSeleccionadaEstanque.bind(this);
        this.OpcionSeleccionadaCultivo = this.OpcionSeleccionadaCultivo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onExportar = this.onExportar.bind(this);  
    }
    componentWillMount() {
    }
    OpcionSeleccionadaEstanque(opcion) {
        if (opcion != null) {
            console.log("Opcion seleccionada estanque");
            console.log(opcion);
            console.log(opcion.value);
            this.setState({ idEstanque: opcion.value, nombreEstanque: opcion.label });
        }
    }
    OpcionSeleccionadaCultivo(opcion) {
        if (opcion != null) {
            console.log("Opcion seleccionada cultivo");
            console.log(opcion);
            console.log(opcion.value);
            this.setState({ idCultivo: opcion.value, nombreCultivo: opcion.label });
        }
    }
    onSubmit=(e)=>{
        this.setState({ nombreEstanqueActual: this.state.nombreEstanque});
        swal("Busqueda realizada exitosamente!", "", "success");
    }
    onExportar=(e)=>{

        swal("Exportar Gráficos!", "", "success");
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
                        <div className="headDetalleProyecto">
                            <p>Histórico de cultivos</p>
                            <div className="divider"></div>
                        </div>
                        <div className="SeccionCabecera">
                            <p>Búsqueda</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s12 m6 l6">
                            <label>Estanque:</label>
                            <SelectElegir listado={DATASELECTESTANQUES} Opcion={this.OpcionSeleccionadaEstanque} />
                        </div>
                        <div className="col s12 m6 l6">
                            <label>Cultivo:</label>
                            <SelectElegir listado={DATASELECTCULTIVOS} Opcion={this.OpcionSeleccionadaCultivo} />
                        </div>
                        <div className="col s12 m6 l6">
                            <label>Fecha Desde:</label>
                            <input type="date" id="start" name="trip-start"
                                min="2018-01-01" max="2018-12-31" />
                        </div>
                        <div className="col s12 m6 l6">
                            <label>Fecha Hasta:</label>
                            <input type="date" id="start" name="trip-start"
                                min="2018-01-01" max="2018-12-31" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s12 m6 l10">
                        </div>
                        <div class="col s12 m6 l2">
                            <button onClick={this.onSubmit} class="btn waves-effect waves-light grey darken-3" type="submit" name="action">Buscar
                            <i class="material-icons right">search</i>
                            </button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="SeccionCabecera">
                            <p>Gráficos {this.state.nombreEstanqueActual}</p>
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
                    <div className="row">
                        <div className="col s12 m6 l2">
                    <button class="modal-close btn waves-effect waves-light blue darken-2" onClick={this.onExportar} type="submit" name="action">EXPORTAR
                      <i class="material-icons right">file_download</i>
                    </button>
                    </div>
                    </div>
                </div>
                <Footer />
            </div >
        );
    }
}

export default VistaInicio;