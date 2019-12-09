import React from 'react';
import ModalRegistrarCultivo from './ModalRegistrarCultivo';
import swal from 'sweetalert'

class MantenimientoRowCultivo extends React.Component {
editar(e) {
    swal("Editar Cultivo!", "", "success");
    
}
ver(e) {
  swal("Ver detalle Cultivo!", "", "success");
  
}
  render() {
    return(
    <tr>
      <td className="td1">{this.props.pago.id}</td>
      <td className="td1">{this.props.pago.col1}</td>
      <td className="td1">{this.props.pago.col2}</td>
	    <td className="td1">{this.props.pago.col3}</td>
      <td className="td1">
      <a class="btn btn-medium waves-effect waves-light amber modal-trigger" onClick={(e) => this.editar(e)}><i class="material-icons">edit</i></a>
      <a class="btn btn-medium waves-effect waves-light indigo modal-trigger" onClick={(e) => this.ver(e)}><i class="material-icons">remove_red_eye</i></a></td>
	  </tr>
    )
  }
}
export default MantenimientoRowCultivo;