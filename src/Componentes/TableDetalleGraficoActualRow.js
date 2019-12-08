import React from 'react';

class TableDetalleGraficoActualRow extends React.Component {

  render() {
    return(
    <tr>
      <td className="td1">{this.props.pago.rango}</td>
      <td className="td1">{this.props.pago.estado}</td>
      <td className="td1">{this.props.pago.color}</td>
	</tr>
    )
  }
}
export default TableDetalleGraficoActualRow;