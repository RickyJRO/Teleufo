import React from 'react'
import './Footer.css'
import reclamacoes from '../../assets/reclamacoes.png'


export default function Footer() {
    return (
        <div>
            <div className='footer-container'>
            <section className='social-media'>
                <div className='social-media-wrap'>
                <small className='website-rights'>© Copyright <strong>Teleufo.</strong> Direitos reservados</small>
                <a target="_blank" href="http://www.livroreclamacoes.pt"><img className='imgreclamacoes' src={reclamacoes}/></a>
                <div className='linkss'>
                    <small style={{color:'white'}}>Developed By RicardoJRO</small>
                    </div>
                </div>
            </section>
            </div>
        </div>
    )
}
