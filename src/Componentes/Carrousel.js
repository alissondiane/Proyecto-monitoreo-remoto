import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
class Carrousel extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Carousel autoPlay={true} showThumbs={false} transitionTime={2} emulateTouch={true}>
                <div>
                    <img src="https://ep01.epimg.net/elpais/imagenes/2016/03/13/planeta_futuro/1457868966_000530_1457870222_noticia_normal_recorte1.jpg" />
                    <p className="legend">Proyecto Don Quijote</p>
                </div>
                <div>
                <img src="https://mansunides.org/sites/default/files/proyecto-salud-america-ong-peru-acceso-agua-potable-01.jpg" />
                    <p className="legend">Proyecto Salud América</p>
                </div>
                <div>
                <img src="https://mansunides.org/sites/default/files/peru_1.jpg" />
                    <p className="legend">Proyecto Agropecuario América</p>
                </div>
            </Carousel>
        );
    }
}

export default Carrousel;