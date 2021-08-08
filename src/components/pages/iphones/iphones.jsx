import React from 'react'
import Navbar from '../NavbarR/NavbarR'
import Hero from './heroIphones/heroIphones'
import AntesDepois from './antesdepois/antesdepois'
import Aboutiphone from './aboutiphone/aboutiphone'
import Aboutiphone2 from './aboutiphone2/aboutiphone2'
import Contactos from '../../Contactos/Contactos'
import Footer from '../../Footer/Footer'
import Perks from '../../Perks/Perks'
export default function iphones() {
    return (
        <div style={{overflowX:"hidden"}}> 
            <Hero/>          
            <Aboutiphone />
            <AntesDepois />
            <Perks />
            <Contactos />
            <Footer />
            
        </div>
    )
}
