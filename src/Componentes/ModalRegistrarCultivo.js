import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import DATASELECTESPECIE from './DataSelectEspecie';
import DATASELECTETAPA from './DataSelectEtapa';
import PARAMETROS from './DataParametros';
import SelectElegir from './SelectElegir';
import swal from 'sweetalert'
import TableDetalleParametros from './TableDetalleParametros';

class ModalEditarCultivo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      descripcion: '',
    }
    this.OpcionSeleccionadaEspecie = this.OpcionSeleccionadaEspecie.bind(this);
    this.OpcionSeleccionadaEtapa = this.OpcionSeleccionadaEtapa.bind(this);

    this.onSave = this.onSave.bind(this);  
    this.onChange1 = this.onChange1.bind(this);  
    this.onChange2 = this.onChange2.bind(this);  

  }
  onChange1(e) {
    this.setState({ nombre: e.target.value });
  }
  onChange2(e) {
    this.setState({ descripcion: e.target.value });
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
  OpcionSeleccionadaEspecie(opcion) {
    if (opcion != null) {
        console.log("Opcion seleccionada especie");
        console.log(opcion);
        console.log(opcion.value);
        this.setState({ idEspecie: opcion.value, nombreEspecie: opcion.label });
    }
}
OpcionSeleccionadaEtapa(opcion) {
  if (opcion != null) {
      console.log("Opcion seleccionada etapa");
      console.log(opcion);
      console.log(opcion.value);
      this.setState({ idEtapa: opcion.value, nombreEtapa: opcion.label });
  }
}
onSave=(e)=>{
  swal("Cambios guardados exitosamente!", "", "success");
}
  render() {
    return (
      <div id="modal2" class="modal">
        <div class="modal-content">
          <div class="headDetalleProyecto">
            <p>Agregar Cultivo</p>
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
                    <label>Especie:</label>
                    <SelectElegir listado={DATASELECTESPECIE} Opcion={this.OpcionSeleccionadaEspecie} />
                    </div>
                  </div>
                </div>
                <div className="col s12 m6">
                  <div className="row">
                    <div className="input-field col s12 m10">
                      <input id="icon_prefix" type="text" className="validate" value={this.state.descripcion} onChange={this.onChange2} />
                      <label for="icon_prefix">Descripción</label>
                    </div>
                    <div className="col s12 m10">
                    <label>Etapa:</label>
                    <SelectElegir listado={DATASELECTETAPA} Opcion={this.OpcionSeleccionadaEtapa} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col s12 m10">
              <table class="highlight centered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Parámetro</th>
                            <th>Rango Mínimo</th>
                            <th>Rango Máximo</th>
                        </tr>
                    </thead>
                    <TableDetalleParametros listado={PARAMETROS}/>
                </table>
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

export default ModalEditarCultivo;