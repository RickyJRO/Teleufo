import React from 'react'
import capas from '../../../../assets/capasTablet.jfif'
import carregadores from '../../../../assets/carregadores.jfif'
import fones from '../../../../assets/fones.jfif'
import luzes from '../../../../assets/luzes.jfif'
import './GaleriaAcessorios.css'

export default function GaleriaAcessorios() {
    return (
        <div>
            <div className="galeria__container">
                <div className="galeria__slide">
                <img src={capas} className="galeria__img"/>
                </div>
                <div className="galeria__slide">
                <img src={carregadores} className="galeria__img"/>
                </div> 

            </div>
            <div className="galeria__container">
                <div className="galeria__slide">
                <img src={fones} className="galeria__img"/>
                </div>
                <div className="galeria__slide">
                <img src={luzes} className="galeria__img"/> 
                </div>
            </div>
        </div>
    )
}
