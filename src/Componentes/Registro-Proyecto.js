import React from 'react';
import Footer from './Footer';
import CategoriaCombo from './Categoria-Combo';
import NecesidadCombo from './Necesidad-Combo';

class RegistroProyecto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      organizacion: '',
      objetivo: '',
      descripcion: '',
      correo: '',
      ubicacion: '',
      telefono: '',
      link:'',
      categorias: [],
      necesidades:[]
    };
    this.onSubmit = this.onSubmit.bind(this);

    this.onChange1 = this.onChange1.bind(this);
    this.onChange2 = this.onChange2.bind(this);
    this.onChange3 = this.onChange3.bind(this);
    this.onChange4 = this.onChange4.bind(this);
    this.onChange5 = this.onChange5.bind(this);
    this.onChange6 = this.onChange6.bind(this);
    this.onChange7 = this.onChange7.bind(this);
    this.onChange8 = this.onChange8.bind(this);
  }
  componentWillMount() {
    fetch('https://hackatonesan.herokuapp.com/categoria/list')
      .then((response) => {
        return response.json()
      })
      .then((data) => {

        console.log("Data recibida de la consultas");
        console.log(data);
        this.setState({
          categorias: data
        })

      })
      .catch(error => {
        // si hay algún error lo mostramos en consola
        console.error(error)
      });

      fetch('https://hackatonesan.herokuapp.com/necesidad/list')
      .then((response) => {
        return response.json()
      })
      .then((data) => {

        console.log("Data recibida de la consultas");
        console.log(data);
        this.setState({
          necesidades: data
        })

      })
      .catch(error => {
        // si hay algún error lo mostramos en consola
        console.error(error)
      });
  }


  onSubmit = (e) => {
    
    fetch('https://hackatonesan.herokuapp.com/proyecto/create',
    {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(
      {
        "categoria": [
          1,2,3
        ], 
        "comentarios": [], 
        "correo": this.state.correo, 
        "descripcion": this.state.descripcion, 
        "facebook": "", 
        "link": this.state.link, 
        "linkedin": "", 
        "necesidad": [
          1,2,3], 
        "nombre": this.state.nombre,
        "objetivo": this.state.objetivo,
        "resultado": "Resultado1", 
        "organizacion": this.state.organizacion, 
        "twitter": "", 
        "ubicacion": this.state.ubicacion,
        "telefono": this.state.telefono
      }
    )
})
.then(function(res){ console.log(res) })
.catch(function(res){ console.log(res) })

    console.log("Nombre" + this.state.nombre);
    console.log(this.state.organizacion);
    console.log(this.state.objetivo);
    console.log(this.state.descripcion);
    console.log(this.state.correo);
    console.log(this.state.ubicacion);
    console.log(this.state.telefono);
    console.log(this.state.link);

    alert("Registro exitoso");
    e.preventDefault();

  }


  onChange1(e) {
    this.setState({ nombre: e.target.value });
  }
  onChange2(e) {
    this.setState({ organizacion: e.target.value });
  }
  onChange3(e) {
    this.setState({ objetivo: e.target.value });
  }

  onChange4(e) {
    this.setState({ descripcion: e.target.value });
  }
  onChange5(e) {
    this.setState({ correo: e.target.value });
  }
  onChange6(e) {
    this.setState({ ubicacion: e.target.value });
  }
  onChange7(e) {
    this.setState({ telefono: e.target.value });
  }
  onChange8(e) {
    this.setState({ link: e.target.value });
  }



  render() {
    const { nombres, isLoading, isValid } = this.state;

    return (

      <div >
        <nav className="purple">
          <div className="container">
            <div class="nav-wrapper">
              <a href="#" class="brand-logo">Co-laborando</a>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="/Vista/Inicio"><i class="material-icons left">home</i>INICIO</a></li>
                <li><a href="#"><i class="material-icons left">phone</i>CONTÁCTANOS</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <hr />
        <div className="container">


          <form onChange={this.onChange}>

            <div className="margen_top">
              <p className="labels">Registro de Proyecto Social </p>
              <div className="row ">
                <div className="col s12 m6 l6 margen_top">
                  <div className="input-field col s12 m10">
                    <i className="material-icons prefix">home</i>
                    <input id="icon_prefix" type="text" className="validate" value={this.state.nombre} onChange={this.onChange1} />
                    <label for="icon_prefix">Nombre</label>
                  </div>
                  <div className="input-field col s12 m10">
                    <i className="material-icons prefix">location_city</i>
                    <input id="icon_prefix" type="text" className="validate" value={this.state.organizacion} onChange={this.onChange2} />
                    <label for="icon_prefix">Organización</label>
                  </div>
                  <div className="input-field col s12 m10">
                    <i className="material-icons prefix">call_made</i>
                    <input id="icon_prefix" type="text" className="validate" value={this.state.objetivo} onChange={this.onChange3} />
                    <label for="icon_prefix">Objetivo</label>
                  </div>
                  <div className="input-field col s12 m10">
                    <i className="material-icons prefix">more_horiz</i>
                    <textarea id="textarea1" className="materialize-textarea" value={this.state.descripcion} onChange={this.onChange4}></textarea>
                    <label for="textarea1">Descripción</label>
                  </div>
                  <div className="input-field col s12 m10">
                    <i className="material-icons prefix">email</i>
                    <input id="email" type="email" className="validate" value={this.state.correo} onChange={this.onChange5} />
                    <label for="email">Correo</label>
                    <span class="helper-text" data-error="Ingrese un correo válido" data-success="Correcto"></span>
                  </div>
                  <div className="input-field col s12 m10">
                    <i className="material-icons prefix">add_location</i>
                    <textarea id="textarea1" className="materialize-textarea" value={this.state.ubicacion} onChange={this.onChange6}></textarea>
                    <label for="textarea1">Ubicación</label>
                  </div>
                  <div className="input-field col s12 m10">
                    <i className="material-icons prefix">phone</i>
                    <input type="number" id="icon_telephone" type="tel" className="validate" value={this.state.telefono} onChange={this.onChange7} />
                    <label for="icon_telephone">Teléfono</label>
                  </div>
                </div>
                <div className="col s12 m6 l6 margen_top">
                  <div className="input-field col s12 m10">
                    <i className="material-icons prefix">attach_file</i>
                    <input type="number" id="icon_attach_file" type="tel" className="validate" value={this.state.link} onChange={this.onChange8} />
                    <label for="icon_attach_file">Enlace Imágen</label>
                  </div>
                  <div className="col s12 m10">
                  <label >Categorías:</label>
                  <CategoriaCombo listado={this.state.categorias} />
                  </div>
                  <div className="col s12 m10">
                  <label >Necesidades:</label>
                  <NecesidadCombo listado={this.state.necesidades} />
                  </div>
                </div>
                <div className="SplitPane">
                  <div className="SplitPane-right margen_top">
                    <button class="btn waves-effect waves-light purple" onClick={this.onSubmit} type="submit" name="action">REGISTRAR
                      <i class="material-icons right">send</i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default RegistroProyecto;