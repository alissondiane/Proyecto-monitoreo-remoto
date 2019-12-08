import React from 'react'
class CategoriaCombo extends React.Component {
    
    render() { 
      if( this.props.listado.length>0){
      return (
        <p>     
        {
            this.props.listado.map((categoria) => {
              return <label key={categoria.id} className="row">
                <input
                className="clase_concepto"
                name={categoria.nombre}
                type="checkbox" />

                <span key={categoria.id} className="mdc-checkbox">
                {categoria.nombre}
              
                
                </span>
            </label>
            })
          }
          
        </p>
      )}
      else{
        return <p className="text-center">Cargando categorias...</p>
      }
    }
  }
  export default CategoriaCombo;