import React from 'react'
import { browserHistory } from 'react-router-3';
import CategoriaList from './Categoria-List';

import {
  TwitterIcon,
  FacebookIcon
} from 'react-share';

class ProyectoRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      casa: this.props.vehiculo
    };
    this.VistaAlquiler = this.VistaAlquiler.bind(this);

  }
  VistaAlquiler = (e) => {

    browserHistory.push('/Detalle/' + this.state.casa.id);
    e.preventDefault();

  }
  render() {
    return (
      <div className="col s12 m6 l4">
        <div class="card z-depth-3">
          <div className="card-image">
            <img src={this.state.casa.link} />
            <a onClick={this.VistaAlquiler} className="btn-floating halfway-fab waves-effect waves-light purple"><i class="material-icons">add</i></a>
          </div>
          <div className="card-content">
            <span className="card-title"><strong>{this.state.casa.nombre}</strong></span>
          </div>
          <div className="card-action">
            <div className="row">
              <div className="col s12 m8">
              <CategoriaList listado={this.state.casa.categoria}/>
              </div>
              <div className="col s12 m4">
                <div className="divSocial"><a><TwitterIcon size={38} round={true} /></a></div>
                <div className="divSocial"><a><FacebookIcon size={38} round={true} /></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ProyectoRow;