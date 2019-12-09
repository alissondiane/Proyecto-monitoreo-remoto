import React from 'react'
import MantenimientoRowEspecie from './Mantenimiento-RowEspecie'

class MantenimientoTableEspecie extends React.Component {

  render() {
    return (
        <div>
          {
            this.props.listado.map((pago) => {
              return <MantenimientoRowEspecie key={pago.id} 
                                  pago={pago} />
                        
            })
          }
        </div>
    )
  }
}

export default MantenimientoTableEspecie