import React from 'react'
import ComentarioRow from './Comentario-row'

class ComentarioList extends React.Component {
  render() {
    return (
        <div class>
          {
            this.props.listado.map((vehiculo) => {
              return <ComentarioRow  key={vehiculo.toString()} 
                                  vehiculo={vehiculo} />
            })
          }
        </div>
    )
  }
}

export default ComentarioList