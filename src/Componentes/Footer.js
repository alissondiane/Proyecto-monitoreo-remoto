import React from 'react';

import {
    TwitterIcon,
    FacebookIcon,
    WhatsappIcon,
    EmailIcon
  } from 'react-share';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <footer class="page-footer blue">
                <div class="container">
                    <div class="row">
                        <div class="col l6 s12">
                            <h5 class="white-text">SMRCA</h5>
                            <p class="grey-text text-lighten-4">

                            Sistema de Monitoreo Remoto de parámetros de calidad del agua en cultivos acuícolas
                            </p>
                        </div>
                        <div class="col l4 offset-l2 s12">
                            <h5 class="white-text">Enlaces</h5>
                            <ul>
                                <li><a class="grey-text text-lighten-3" href="/Vista/inicio">Monitoreo</a></li>
                                <li><a class="grey-text text-lighten-3" href="/Historico-Cultivo">Histórico de cultivo</a></li>
                                <li><a class="grey-text text-lighten-3" href="/Mantenimiento-Estanque">Mantenimiento de Estanque</a></li>
                                <li><a class="grey-text text-lighten-3" href="/Mantenimiento-Cultivo">Mantenimiento de Cultivo</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                        © 2019
                        <div className="divSocial right"><a><TwitterIcon size={38} round={true} /></a></div>
                        <div className="divSocial right"><a><FacebookIcon size={38} round={true} /></a></div>
                        <div className="divSocial right"><a><EmailIcon size={38} round={true} /></a></div>
                        <div className="divSocial right"><a><WhatsappIcon size={38} round={true} /></a></div>
                       
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;