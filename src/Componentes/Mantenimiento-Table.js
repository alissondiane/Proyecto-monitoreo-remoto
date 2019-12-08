import React from 'react'
import MantenimientoRow from './Mantenimiento-Row'

class MantenimientoTable extends React.Component {

  render() {
    return (
        <tbody>
          {
            this.props.listado.map((pago) => {
              return <MantenimientoRow key={pago.id} 
                                  pago={pago} />
                        
            })
          }
        </tbody>
    )
  }
}

export default MantenimientoTable