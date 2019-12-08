import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Componentes/App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory } from 'react-router-3';
import VistaInicio from './Componentes/VistaInicio';
import DetalleProyecto from './Componentes/Detalle-Proyecto';
import RegistroProyecto from './Componentes/Registro-Proyecto';
import Historico from './Componentes/Historico';
import MantenimientoCultivo from './Componentes/Mantenimiento-Cultivos';
import LoginForm from './Componentes/LoginForm';


class Index extends React.Component {
  
    constructor(props) {
      super(props)
      this.state = { 
        pagos: [],
        name: 'alex%20rojas'
       }
      this.FiltrarNombre= this.FiltrarNombre.bind(this);
      this.validado = true;
    }
    render() {
        return(
            <div>
            <Router history={browserHistory}>
            <Route
                component={() => <LoginForm />}
                path="/">
            </Route>
            <Route path="/Vista/Inicio" component={VistaInicio}></Route>
            <Route path="/Detalle/:id" component={DetalleProyecto}></Route>
            <Route path="/Registro/proyecto" component={RegistroProyecto}></Route>
            <Route path="/Mantenimiento-Cultivo" component={MantenimientoCultivo}></Route>
            <Route path="/Historico-Cultivo" component={Historico}></Route>
            <Route path="/login" component={LoginForm}></Route>
          </Router>
          </div>
          )
      }
      FiltrarNombre(nombre){
        this.setState({ name: nombre});
      }
}

ReactDOM.render(
    <Index/>, document.getElementById('root'));

registerServiceWorker();