import React from "react";
import './index.css'

import logo from '../../img/AulaVisión.png'
import curso1 from '../../img/curso1.png'
import curso2 from '../../img/curso2.png'
import curso3 from '../../img/curso3.jpg'
import curso4 from '../../img/curso4.jpg'
import curso5 from '../../img/curso5.jpg'
import curso6 from '../../img/curso6.jpg'
import curso7 from '../../img/curso7.jpg'
import curso8 from '../../img/curso8.png'
import curso9 from '../../img/curso9.png'
import curso10 from '../../img/curso10.png'
import curso11 from '../../img/curso11.png'
import curso12 from '../../img/curso12.jpg'
import curso13 from '../../img/curso13.jpg'
import youtubelogo from '../../img/youtube.svg'
import instalogo from '../../img/instagram.svg'
import tiktoklogo from '../../img/tiktok.svg'

const pagPrincipal = () => {
    return(
        <div>
            <div className="menu">
                <img src={logo} alt="logo" className="imglogo"/>
                <h3 className="titulo">Aula Visión</h3>
                <a href="https://www.youtube.com/channel/UCdrb_BNsud0AKvqfLPiWSUQ"><img src={youtubelogo} alt="Youtube" className="youLogo" /></a>
                <a href="https://www.instagram.com/aula_vision/"><img src={instalogo} alt="Instagram" className="instalogo" /></a>
                <a href="https://www.tiktok.com/@aula_vision"><img src={tiktoklogo} alt="TikTok" className="TikToklogo" /></a>
            </div>
            <div className="title">
                <h1>Cursos Disponibles:</h1>
            </div>
            <div className="conted">
                <div className="card">
                    <a href="https://go.hotmart.com/G81155919T"><img src={curso1} alt="Curso Postres" /></a>
                    <h4>Emprende con Postres desde Casa</h4>
                </div>
                <div className="card">
                    <a href="https://go.hotmart.com/E81155928S"><img src={curso2} alt="Curso de Guitarra" /></a>
                    <h4>Guitarra Master</h4>
                </div>
                <div className="card">
                    <a href="https://go.hotmart.com/G81155963F"><img src={curso3} alt="Curso Trapillo" /></a>
                    <h4>Bolsos Premium en Trapillo</h4>
                </div>
                <div className="card">
                    <a href="https://go.hotmart.com/T81155974G"><img src={curso4} alt="" /></a>
                    <h4>Instructor de Yoga para Niños</h4>
                </div>
                <div className="card">
                    <a href="https://go.hotmart.com/O81156001X"><img src={curso5} alt="" /></a>
                    <h4>Reflexoterapia Xpert, La Salud en tus Manos</h4>
                </div>
                <div className="card">
                    <a href="https://go.hotmart.com/Y81156015E"><img src={curso6} alt="" /></a>
                    <h4>El Arte de Diseñar Cejas, como Negocio</h4>
                </div>
                <div className="card">
                    <a href="https://go.hotmart.com/H81156048P"><img src={curso7} alt="" /></a>
                    <h4>Velas Artesanales Emprende Desde Casa</h4>
                </div>
                <div className="card">
                    <a href="https://go.hotmart.com/R81156066C"><img src={curso8} alt="" /></a>
                    <h4>Decoración con Globos por Samantha</h4>
                </div>
                <div className="card">
                    <a href="https://go.hotmart.com/U81156072P"><img src={curso9} alt="" /></a>
                    <h4>CURSO COSTURA PM PLUS</h4>
                </div>
                <div className="card">
                    <a href="https://go.hotmart.com/V81156116K"><img src={curso10} alt="" /></a>
                    <h4>Diseña carteras con crochet</h4>
                </div>
                <div className="card">
                    <a href="https://go.hotmart.com/F81157636W"><img src={curso11} alt="" /></a>
                    <h4>Portafolio Diversificado de Inversión</h4>
                </div>
                <div className="card">
                    <a href="https://go.hotmart.com/G81157876S"><img src={curso12} alt="" /></a>
                    <h4>Pasteleria Canina y Felina</h4>
                </div>
                <div className="card">
                    <a href="https://go.hotmart.com/P81158021M"><img src={curso13} alt="" /></a>
                    <h4>Aprende Piano Desde Cero Con Música Cristiana</h4>
                </div>
            </div>
        </div>
        
    )
}

export default pagPrincipal;