import React from 'react'
import CategoriaRow from './Categoria-Row'

class CategoriaList extends React.Component {
  render() {
    return (
        <div >
          {
            this.props.listado.map((vehiculo) => {
              return <CategoriaRow  key={vehiculo.toString()} 
                                  vehiculo={vehiculo} />
            })
          }
        </div>
    )
  }
}

export default CategoriaList