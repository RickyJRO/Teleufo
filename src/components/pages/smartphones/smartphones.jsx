import React from 'react'
import Navbar from '../NavbarR/NavbarR'
import Hero from './heroSmartphones/heroSmartphones'
import AboutSmartphones from './aboutsmartphones/aboutsmartphones'
import Antesdepois from './antesdepois/antesdepoissmartphones'
import Contactos from '../../Contactos/Contactos'
import Footer from '../../Footer/Footer'
import Perks from '../../Perks/Perks'
export default function smartphones() {
    return (
        <div>
            <Hero />
            <AboutSmartphones />
            <Antesdepois />
            <Perks />
            <Contactos />
            <Footer />
        </div>
    )
}
