import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

class ModalDetalleCultivo extends Component {
  constructor(props) {
    super(props);
    this.state={
        id: ""
    }
}
componentDidUpdate(prevProps, prevState) {
  if (prevProps.id !== this.props.id) {     
          this.setState((prevState)=>({
              id: this.props.id,
          }));   
      }
  }
    componentDidMount() {
        var elem = document.querySelector(".modal");
        var instance = M.Modal.init(elem, {
        });
    }
    render() {
        return (
          <div id="modal1" class="modal">
          <div class="modal-content">
            <h3>Detalle de Cultivo</h3>
            <p>{this.props.id}</p>
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Cerrar</a>
          </div>
        </div>
        );
        }
    }
            
export default ModalDetalleCultivo;