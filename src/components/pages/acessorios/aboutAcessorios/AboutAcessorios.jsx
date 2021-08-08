import React from 'react'
import './AboutAcessorios.css'
import lojaint1 from '../../../../assets/lojaint1.jpeg'
import lojaint2 from '../../../../assets/lojaint2.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function AboutAcessorios() {
    return (
        <div>
            <div className="aboutacessorios">
                <div className="aboutacessorios__container">
                    <div className="aboutacessorios__left">
                        <h2>Na Teleufo, para além de repararmos os seus aparelhos eletrónicos, também temos toda uma gama de acessórios para os mesmos.<br>
                        </br>Sendo estes:
                        <ul>
                        <li>Capas</li>
                        <li>Películas de Vidro</li>
                        <li>Carregadores</li>
                        <li>Cabos de Carregador</li>    
                        <li>Suportes para o Carro</li>
                        <li>Fones</li>
                        <li>Colunas</li>
                        <li>Luzes de Presença</li>  
                        <li>E muito mais!</li>                          
                        </ul>
                        Tudo para ter o melhor aproveitamento do seu aparelho ao melhor preço!<br></br>
                        Visite já a nossa loja e deixe o seu aparelho no melhor cuidado.
                        </h2>
                    </div>
                    <div className="aboutacessorios__right">
                        <div className="aboutacessorios__carousel">

                            <Carousel autoPlay="true" infiniteLoop="true" showThumbs={0} showIndicators={0} showIndicators={0} showStatus={0}>
                                <div>
                                    <img src={lojaint1} className="aboutacessorios__img" />
                                </div>
                                <div>
                                    <img src={lojaint2} className="aboutacessorios__img" />
                                </div>
                            </Carousel>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
