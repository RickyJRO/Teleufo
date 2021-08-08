import React from 'react'
import Navbar from '../NavbarR/NavbarR'
import AboutAcessorios from './aboutAcessorios/AboutAcessorios'
import Heroacessorios from './heroAcessorios/heroAcessorios'
import GaleriaAcessorios from './GaleriaAcessorios/GaleriaAcessorios'
import Perks from '../../Perks/Perks'
import Contactos from '../../Contactos/Contactos'
import Footer from '../../Footer/Footer'
export default function acessorios() {
    return (
        <div>
            <Heroacessorios />
            <AboutAcessorios/>
            <GaleriaAcessorios />
            <Perks/>
            <Contactos/>
            <Footer/>
        </div>
    )
}
