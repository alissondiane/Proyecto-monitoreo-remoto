import React from 'react';
import swal from 'sweetalert'
import {browserHistory} from 'react-router-3';
 
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario : '',
      password: '',
      usuarioleido: 0
    };
    this.onChangeUsuario = this.onChangeUsuario.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);    

  }

  onSubmit=(e)=>{
    console.log("usuario:");
    console.log(this.state.usuario);
    console.log("password:");
    console.log(this.state.password);
    swal("Bienvenido !", this.state.usuario);
    browserHistory.push('/Vista/Inicio');
    e.preventDefault();
    
  }
  Mensaje(){
    if(this.state.usuarioleido == 0){
      //swal("Usuario o contraseña incorrectos!", "", "warning");
    }
  }
  onChangeUsuario(e) {
    /*if(!e.target.value){
      alert("Ingrese un nombre");
    }else{
      this.setState({usuario: e.target.value});
    }*/
    this.setState({usuario: e.target.value});
    
  }
  onChangePassword(e) {
    /*if(!e.target.value){
      alert("Ingrese una contraseña");
    }else{
      this.setState({password: e.target.value});
    }*/
    this.setState({password: e.target.value});
  }

  render() {

    return (

     <div className="fondo">
      
      <div class="vista">
      
      <h2 className="bienvenido center">Bienvenido</h2>
      <form>
      <div class="center">
        <i class="material-icons logo">person</i>
      </div>
        <div class="SplitPane1">
          <div class="SplitPane-right1">
              <input id="Usuario" className = "input" type="text" value={this.state.usuario} onChange={this.onChangeUsuario} 
              placeholder="Usuario" name="Usuario"></input>
          </div>
        </div>
        <div class="SplitPane1">
            
            <div class="SplitPane-right1">
                <input className = "input" type="password" value={this.state.password} onChange={this.onChangePassword}
          placeholder="Contraseña" name="Contraseña"></input>
            </div>
          </div>
          <div className="center margen_top">
          <button type="submit" onClick={this.onSubmit} class="waves-effect waves-light btn-large botonazul">INGRESAR</button>
      </div>       
      </form>
      </div>
      </div>
    
    );
  }
}
export default LoginForm;