import React from 'react';
import ModalRegistrarCultivo from './ModalRegistrarCultivo';
import swal from 'sweetalert'

class MantenimientoRowEspecie extends React.Component {
  render() {
    return(
      <div className="col s12 m6 l4">
      <div class="card hoverable">
        <div className="card-image">
          <img src={this.props.pago.url} />
        </div>
        <div className="card-content">
          <span className="card-title"><strong>{this.props.pago.nombre}</strong></span>
          <span>{this.props.pago.descripcion}</span>
        </div>
        <div className="card-action">
          <div className="row">
          </div>
        </div>
      </div>
    </div>
    )
  }
}
export default MantenimientoRowEspecie;