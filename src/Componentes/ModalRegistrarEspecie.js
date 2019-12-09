import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import DATASELECTCULTIVOS from './DataSelectCultivo';
import SelectElegir from './SelectElegir';
import swal from 'sweetalert'

class ModalRegistrarEspecie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      descripcion: '',
      ruta:''
    }
    this.onChange1 = this.onChange1.bind(this);  
    this.onChange2 = this.onChange2.bind(this); 
    this.onChange3 = this.onChange3.bind(this);  
 
  }
  componentDidMount() {
    var elem = document.querySelector(".modal");
    var instance = M.Modal.init(elem, {
    });
  }
  onChange1(e) {
    console.log(e.target.value);
    this.setState({ nombre: e.target.value });
  }
  onChange2(e) {
    console.log(e.target.value);
    this.setState({ descripcion: e.target.value });
  }
  onChange3(e) {
    console.log(e.target.value);
    this.setState({ ruta: e.target.value });
  }
onSave=(e)=>{
  swal("Cambios guardados exitosamente!", "", "success");
}
  render() {
    return (
      <div id="modal3" class="modal">
        <div class="modal-content">
          <div class="headDetalleProyecto">
            <p>Registrar Especie</p>
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
                    <div className="input-field col s12 m10">
                      <input id="icon_prefix" type="text" className="validate" value={this.state.ruta} onChange={this.onChange3} />
                      <label for="icon_prefix">Ruta de imagen</label>
                    </div>
                  </div>
                </div>
                <div className="col s12 m6">
                  <div className="row">
                  <div className="input-field col s12 m10">
                    <textarea id="textarea1" className="materialize-textarea" value={this.state.descripcion} onChange={this.onChange2}></textarea>
                    <label for="textarea1">Descripción</label>
                  </div>
                    <div className="input-field col s12 m10">
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

export default ModalRegistrarEspecie;