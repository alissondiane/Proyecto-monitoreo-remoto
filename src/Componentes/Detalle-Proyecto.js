import React from 'react';
import PROYECTOS from './Data-proyecto';
import Footer from './Footer';
import ComentarioList from './Comentario-List'
import CategoriaList from './Categoria-List';

class DetalleProyecto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.params.id,
      casa: {},
      nombre: '',
      email: '',
      fechaInicio: '',
      fechaFin: '',
      categorias: [],
      comentarios: []
    };

    this.onSubmit = this.onSubmit.bind(this);

    this.onChange1 = this.onChange1.bind(this);
    this.onChange2 = this.onChange2.bind(this);
    this.SeleccionFechaInicio = this.SeleccionFechaInicio.bind(this);
    this.SeleccionFechaFin = this.SeleccionFechaFin.bind(this);


  }
  componentWillMount() {
    var casarecibida = PROYECTOS[this.state.id - 1];
    console.log(PROYECTOS);
    console.log("CASA QUE OBTENGO");
    //console.log(casarecibida);
    //this.setState({ casa: casarecibida })

    fetch('https://hackatonesan.herokuapp.com/proyecto/' + this.state.id)
      .then((response) => {
        return response.json()
      })
      .then((data) => {

        console.log("Data recibida de la consultas");
        console.log(data);
        var listado = data.categoria;
        var listado2 = data.comentarios;
        var opcionesCategorias = [];
        var opcionesComentarios = [];
        for (let i = 0; i < listado.length; i++) {
          var id = listado[i].id;
          var nombre = listado[i].nombre;
          var option = { id: id, nombre: nombre };
          opcionesCategorias.push(option);
        }
        for (let i = 0; i < listado2.length; i++) {
          var detalle = listado2[i].detalle;
          var puntaje = listado2[i].puntaje;
          var option2 = { detalle: detalle, puntaje: puntaje };
          opcionesComentarios.push(option2);
        }
        this.setState({
          casa: data,
          categorias: opcionesCategorias,
          comentarios: opcionesComentarios
        })

      })
      .catch(error => {
        // si hay algún error lo mostramos en consola
        console.error(error)
      });

  }
  onSubmit = (e) => {
    /*
  fetch('http://127.0.0.1:8000/api/modelos-vehiculos/',
  {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  method: "POST",
  body: JSON.stringify(
      {
          "model_name": this.state.nombre,
          "daily_hire_rate": this.state.tasaAlquiler,
          "manufacturer": {
              "manufacturer_id": 1,
              "manufacturer_name": "TOYOTA",
              "manufacturer_details": "JAPON"
          }
      }
    
  )
})
.then(function(res){ console.log(res) })
.catch(function(res){ console.log(res) })*/
    /*
    console.log(this.state.nombre);
    console.log(this.state.tasaAlquiler);  
    console.log(this.state.manufactura);
   
    */
    alert("prueba-boton");
    console.log("nombre enviado")
    console.log(this.state.nombre);
    console.log("email enviado")
    console.log(this.state.email);
    console.log("fecha inicio");
    console.log(this.state.fechaInicio);
    console.log("fecha fin");
    console.log(this.state.fechaFin);
    alert("Formulario enviado");
    e.preventDefault();

  }

  SeleccionFechaInicio(Fecha) {
    console.log(Fecha);
    var fecha1 = new String(Fecha);
    console.log(fecha1);
    this.setState({ fechaInicio: fecha1 });

  }
  SeleccionFechaFin(Fecha) {
    console.log(Fecha);
    var fecha1 = new String(Fecha);
    console.log(fecha1);
    this.setState({ fechaFin: fecha1 });

  }


  onChange1(e) {
    this.setState({ nombre: e.target.value });
  }
  onChange2(e) {
    this.setState({ email: e.target.value });
  }

  render() {
    const { nombres, isLoading, isValid } = this.state;

    return (

      <div className="">
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
        <div className="portada">
          <img className="responsive-img" src={this.state.casa.link} />
        </div>
        <div className="headDetalleProyecto">
          <p>{this.state.casa.nombre}</p>
        </div>
        <div className="row">
          <div className="col s12 m6 l6">
            <img class=" responsive-img" src="https://blog.oxfamintermon.org/wp-content/uploads/2018/10/ayuda-social.jpg" />
          </div>
          <div className="col s12 m6 l6">
            <div className="containerDetalle">
              <label className="labels">Organización</label>
              <span >{this.state.casa.organizacion}</span>
              <br></br>
              <label className="labels" >Descripción</label>
              <span>{this.state.casa.descripcion}</span>
              <br></br>
              <label className="labels" >Objetivo</label>
              <span>{this.state.casa.objetivo}</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div className="col s12 m6 l6">
            <div className="containerDetalle">
              <label className="labels">Ubicación</label>
              <span >{this.state.casa.ubicacion}</span>
              <br></br>
              <label className="labels" >Correo</label>
              <span>{this.state.casa.correo}</span>
              <br></br>
              <label className="labels" >Teléfono</label>
              <span>{this.state.casa.telefono}</span>
            </div>
          </div>
          <div className="col s12 m6 l6">
            <img class=" responsive-img" src="https://images.unsplash.com/photo-1478476868527-002ae3f3e159?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" />

          </div>
        </div>

        <div className="headDetalleProyecto">
          <p>COMENTARIOS</p>
        </div>
        <div className="row center-xs">
          <div className="container">

            <ComentarioList listado={this.state.comentarios} />


          </div>
        </div>
        <div className="headDetalleProyecto">
          <p>CATEGORÍAS</p>
        </div>
        <div className="row center-xs">
          <div className="container">
            <div className="container-categoria">
              <CategoriaList listado={this.state.categorias} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default DetalleProyecto;