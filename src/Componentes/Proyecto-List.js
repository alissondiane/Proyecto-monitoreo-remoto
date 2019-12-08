import React from 'react'
import ProyectoRow from './Proyecto-Row'

class ProyectoList extends React.Component {
  render() {
    if( this.props.listado != null){
    return (
        <div>
          {
            this.props.listado.map((vehiculo) => {
              return <ProyectoRow  key={vehiculo.toString()} 
                                  vehiculo={vehiculo} />
            })
          }
        </div>
    )}
    else{
      return <p className="text-center">Noy hay registros</p>
    }
  }
}

export default ProyectoList