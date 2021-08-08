import React from 'react'
import './aboutiphone.css'
import iphoneimg from '../../../../assets/iphoneantesdepois.jfif'
import iphonetablet from '../../../../assets/iphonetablet.jfif'
import sombraiphone from '../../../../assets/sombraiphone.png'

export default function aboutiphone() {
    return (
        <div>
            <div className="aboutiphone" >
                <div className="aboutiphone__left" id="aboutiphone">
                <img src={iphonetablet} className="aboutiphone__img2" />
                    <h2>Na Teleufo Reparações, contamos com uma equipa técnica qualificada e experiente na reparação dos seus smartphones.<br>
                    </br>
                    Somos líderes de mercado em Portugal no que toca a preço/qualidade em reparações, se procura uma empresa com experiência, contacte-nos já!<br>
                    </br>
                    Os nossos técnicos contam com uma vasta experiência multimarcas com 100% de satisfação por parte dos nossos clientes.<br></br> Damos prioridade à reparação no momento, para garantir a utilização imediata do seu equipamento após a nossa intervenção.
                       <br></br> Efetuamos reparação de todos os modelos Iphone e Ipad.</h2>
                </div>
                <div className="aboutiphone__right">
                    <img src={sombraiphone} className="aboutiphone__img" />
                    
                </div>
            </div>
        </div>
    )
}
