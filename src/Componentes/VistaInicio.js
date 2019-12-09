import React from 'react';
import $ from 'jquery';
import Footer from './Footer';
import Sidebar from './SideBar';
import ChartExample from './Chart';
import DATACHART1 from './Data-Chart';
import DATACHART2 from './Data-Chart2';
import DATACHART3 from './Data-Chart3';
import SelectElegir from './SelectElegir';
import DATASELECTESTANQUE from './DataSelectEstanque';
import DETALLEGRAFICOACTUAL from './DataDetalleGraficoActual';
import ChartActual from './ChartActual';
import TablaDetalleGraficoActual from './TableDetalleGraficoActual';
import swal from 'sweetalert'

class VistaInicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            DATACHART: [],
            idEstanque: 0,
            nombreEstanque: '',
            nombreEstanqueActual: '',
            count : 25
        }
        this.OpcionSeleccionadaCultivo = this.OpcionSeleccionadaCultivo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.getRandomArbitrary = this.getRandomArbitrary.bind(this);
    }
    componentWillMount() {
    }
    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
    OpcionSeleccionadaCultivo(opcion) {
        if (opcion != null) {
            console.log("Opcion seleccionada de Estanque");
            console.log(opcion);
            console.log(opcion.value);
            this.setState({ idEstanque: opcion.value, nombreEstanque: opcion.label });
        }
    }
    onSubmit = (e) => {
        this.setState({ nombreEstanqueActual: this.state.nombreEstanque });
        swal("Busqueda realizada exitosamente!", "", "success");
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
                            <SelectElegir listado={DATASELECTESTANQUE} Opcion={this.OpcionSeleccionadaCultivo} />
                        </div>
                        <div className="col s12 m12 l6">
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
                    <div className="row">
                        <div className="col s12 m12 l6">
                            <ChartActual lower={0} upper={50} unidad={"°C"} title={"Monitoreo de temperatura"} minValue={25} maxValue={30} valor={this.getRandomArbitrary(0, 50)} />
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
                            <ChartActual lower={60} upper={150} unidad={"db"} title={"Monitoreo de oxigeno disuelto"} minValue={80} maxValue={120} valor={this.getRandomArbitrary(60, 150)} />
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
                            <ChartActual lower={0} upper={14} unidad={"ph"} title={"Monitoreo de PH"} minValue={5} maxValue={7} valor={this.getRandomArbitrary(0, 14)} />
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