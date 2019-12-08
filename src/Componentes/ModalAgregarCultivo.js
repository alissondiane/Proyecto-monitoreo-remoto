import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

class ModalAgregarCultivo extends Component {
    componentDidMount() {
        var elem = document.querySelector(".modal");
        var instance = M.Modal.init(elem, {
        });
    }
    render() {
        return (
          <div id="modal2" class="modal">
          <div class="modal-content">
            <h3>Agregar un cultivo</h3>
          </div>
          <div class="modal-footer">
            <button data-target="modal1" class="btn modal-trigger">Cerrar</button>
          </div>
        </div>
        );
        }
    }
            
export default ModalAgregarCultivo;