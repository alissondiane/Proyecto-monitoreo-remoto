import React from 'react';
import ModalDetalleCultivo from './ModalDetalleCultivo';

class MantenimientoRow extends React.Component {

  render() {
    return(
    <tr>
       <td className="td1">{this.props.pago.id}</td>
      <td className="td1">{this.props.pago.nombre}</td>
      <td className="td1">{this.props.pago.capacidad}</td>
	    <td className="td1">{this.props.pago.especie}</td>
      <td className="td1">
        
      <ModalDetalleCultivo id={this.props.pago.id}/>
      <a class="btn btn-medium waves-effect waves-light amber modal-trigger" href="#modal1"><i class="material-icons">edit</i></a>
      <a class="btn btn-medium waves-effect waves-light indigo darken-3"><i class="material-icons">remove_red_eye</i></a></td>
	  </tr>
    )
  }
}
export default MantenimientoRow;