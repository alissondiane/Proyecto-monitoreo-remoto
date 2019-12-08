import React from 'react';

class TableDetalleGraficoRow extends React.Component {

  render() {
    return(
    <tr>
      <td className="td1">{this.props.pago.id}</td>
      <td className="td1">{this.props.pago.parametro}</td>
      <td className="td1">{this.props.pago.fecha}</td>
	</tr>
    )
  }
}
export default TableDetalleGraficoRow;