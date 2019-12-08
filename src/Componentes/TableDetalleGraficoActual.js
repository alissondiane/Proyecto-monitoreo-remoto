import React from 'react'
import TableDetalleGraficoActualRow from './TableDetalleGraficoActualRow'

class TableDetalleGraficoActual extends React.Component {

  render() {
    return (
        <tbody>
          {
            this.props.listado.map((pago) => {
              return <TableDetalleGraficoActualRow key={pago.id} 
                                  pago={pago} />
                        
            })
          }
        </tbody>
    )
  }
}

export default TableDetalleGraficoActual