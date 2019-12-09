import React from 'react'
import TableDetalleParametrosRow from './TableDetalleParametrosRow';

class TableDetalleParametros extends React.Component {

  render() {
    return (
        <tbody>
          {
            this.props.listado.map((pago) => {
              return <TableDetalleParametrosRow key={pago.id} 
                                  pago={pago} />
                        
            })
          }
        </tbody>
    )
  }
}

export default TableDetalleParametros