import React from 'react'
import TableDetalleGraficoRow from './TableDetalleGraficoRow'

class TableDetalleGrafico extends React.Component {

  render() {
    return (
        <tbody>
          {
            this.props.listado.map((pago) => {
              return <TableDetalleGraficoRow key={pago.id} 
                                  pago={pago} />
                        
            })
          }
        </tbody>
    )
  }
}

export default TableDetalleGrafico