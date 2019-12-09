import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import DATASELECTCULTIVOS from './DataSelectCultivo';
import DATASELECTDISPOSITIVO from './DataSelectDispositivo';
import SelectElegir from './SelectElegir';
import swal from 'sweetalert'

class ModalRegistrarEstanque extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      nombre: '',
      capacidad: '',
    }
    this.OpcionSeleccionadaCultivo = this.OpcionSeleccionadaCultivo.bind(this);
    this.onSave = this.onSave.bind(this);  
    this.onChange1 = this.onChange1.bind(this);  
    this.onChange2 = this.onChange2.bind(this);  

  }
  onChange1(e) {
    this.setState({ nombre: e.target.value });
  }
  onChange2(e) {
    this.setState({ capacidad: e.target.value });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.id !== this.props.id) {
      this.setState((prevState) => ({
        id: this.props.id,
      }));
    }
  }
  componentDidMount() {
    var elem = document.querySelector(".modal");
    var instance = M.Modal.init(elem, {
    });
  }
  OpcionSeleccionadaCultivo(opcion) {
    if (opcion != null) {
        console.log("Opcion seleccionada cultivo");
        console.log(opcion);
        console.log(opcion.value);
        this.setState({ idCultivo: opcion.value, nombreCultivo: opcion.label });
    }
}
onSave=(e)=>{
  swal("Cambios guardados exitosamente!", "", "success");
}
  render() {
    return (
      <div id="modal1" class="modal">
        <div class="modal-content">
          <div class="headDetalleProyecto">
            <p>Registrar Estanque</p>
            <div class="divider"></div>
          </div>
          <form>
              <div className="row">
                <div className="col s12 m6">
                  <div className="row">
                    <div className="input-field col s12 m10">
                      <input id="icon_prefix" type="text" className="validate" value={this.state.nombre} onChange={this.onChange1} />
                      <label for="icon_prefix">Nombre</label>
                    </div>
                    <div className="col s12 m10">
                    <label>Cultivo:</label>
                    <SelectElegir listado={DATASELECTCULTIVOS} Opcion={this.OpcionSeleccionadaCultivo} />
                    </div>
                  </div>
                </div>
                <div className="col s12 m6">
                  <div className="row">
                    <div className="input-field col s12 m10">
                      <input id="icon_prefix" type="number" className="validate" value={this.state.capacidad} onChange={this.onChange2} />
                      <label for="icon_prefix">Capacidad</label>
                    </div>
                    <div className="col s12 m10">
                    <label>Dispositivo:</label>
                    <SelectElegir listado={DATASELECTDISPOSITIVO} Opcion={this.OpcionSeleccionadaCultivo} />
                    </div>
                  </div>
                </div>
              </div>
          </form>
        </div>
        <div class="modal-footer">
        <button class="modal-close btn waves-effect waves-light blue darken-2" onClick={this.onSave} type="submit" name="action">GUARDAR
                      <i class="material-icons right">save</i>
                    </button>
        <button  class="modal-close btn waves-effect waves-light red darken-2"><b>X</b></button>
        </div>
      </div>
    );
  }
}

export default ModalRegistrarEstanque;