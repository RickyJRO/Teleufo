import React from 'react'
import './aboutiphone.css'
import foto1 from '../../../../assets/reaparacaoiphone.jfif'
import foto2 from '../../../../assets/pecasiphone.jfif'
import { Link, animateScroll as scroll } from "react-scroll";

export default function aboutiphone2() {
    return (
        <div>
            <div className="aboutiphone2">
                <div className="aboutiphone2__container">
                    <div className="aboutiphone2__left">
                        <img src={foto1} className="aboutiphone2__img"/>
                    </div>
                    <div className="aboutiphone2__right">
                    <img src={foto2} className="aboutiphone2__img"/>
                    </div>
                    <div className="aboutiphone2__card">
                        <div className="aboutiphone2card__text">
                        <h2>Não está convencido?</h2>
                        <h3>Não hesite em contactar-nos, temos uma equipa disposta 24/7 para o seu auxilio</h3>
                        <Link to="contactos"spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} >
                        <button>Ligue já!<br></br>966 095 069</button>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
