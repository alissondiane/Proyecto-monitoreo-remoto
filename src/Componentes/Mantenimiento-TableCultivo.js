import React from 'react'
import MantenimientoRowCultivo from './Mantenimiento-RowCultivo'

class MantenimientoTableCultivo extends React.Component {

  render() {
    return (
        <tbody>
          {
            this.props.listado.map((pago) => {
              return <MantenimientoRowCultivo key={pago.id} 
                                  pago={pago} />
                        
            })
          }
        </tbody>
    )
  }
}

export default MantenimientoTableCultivo