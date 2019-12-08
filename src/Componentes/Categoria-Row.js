import React from 'react'
import { browserHistory } from 'react-router-3';

class CategoriaRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      casa: this.props.vehiculo
    };
  }
  render() {
    return (
      <span className="Categoria purple">
          {this.state.casa.nombre}
      </span>
    )
  }
}
export default CategoriaRow;