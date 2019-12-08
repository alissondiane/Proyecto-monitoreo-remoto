import React from 'react'
class NecesidadCombo extends React.Component {
    
    render() { 
      if( this.props.listado.length>0){
      return (
        <p>     
        {
            this.props.listado.map((necesidad) => {
              return <label key={necesidad.id} className="row">
                <input
                className="clase_concepto"
                name={necesidad.nombre}
                type="checkbox" />

                <span key={necesidad.id} className="mdc-checkbox">
                {necesidad.nombre}
              
                
                </span>
            </label>
            })
          }
        </p>
      )}
      else{
        return <p className="text-center">Cargando necesidades...</p>
      }
    }
  }
  export default NecesidadCombo;