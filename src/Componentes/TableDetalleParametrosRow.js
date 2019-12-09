import React from 'react';

class TableDetalleParametrosRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        rangoMinimo: 0
    }
    
    this.onChange1 = this.onChange1.bind(this);  
  }
  onChange1(e) {
    this.setState({ rangoMinimo: e.target.value });
  }

  render() {
    return(
    <tr>
      <td className="td1">{this.props.pago.id}</td>
      <td className="td1">{this.props.pago.parametro}</td>
      <td className="td1">
      <div className="container">
      <input type="number"></input>
      </div>  
      </td>
      <td className="td1">
      <div className="container">
      <input type="number"></input>
      </div>  
      </td>
	</tr>
    )
  }
}
export default TableDetalleParametrosRow;