import React from 'react'
import './heroAcessorios.css'

import cases from '../../../../assets/cases.png'
import Navbar from '../../NavbarR/NavbarR'
import {motion} from 'framer-motion'
import { SiFacebook } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { MdPhone } from "react-icons/md";

export default function heroAcessorios() {
    return (
        <div>
            <div className="heroacessorios">
                <Navbar />
            <div className="heroacessorios__container">
                <motion.div initial={{x:-1000,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1}} className="heroacessorios__left">
                    <h2>Precisa de uma capa ou de uma película nova?</h2>
                    <h2>O seu carregador estragou-se?</h2>
                    <h2>Na <span style={{color:"rgb(41, 231, 214)"}}>Teleufo</span> temos todos os acessórios para os seus aparelhos eletrónicos</h2>
                    <motion.button whileHover={{scale:1.2,cursor:'pointer'}} className="saibamais">Saiba Mais</motion.button>
                </motion.div>
                <motion.div initial={{x:1000,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1}} className="heroacessorios__right">
                    <motion.img animate={{y:[0,20,0],rotate:[0,1,0]}} transition={{repeat:Infinity,duration:2}} src={cases} className="heroacessorios__img"/>
                </motion.div>
            </div>
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:1,duration:1}}
            className="hero__bottom">
                <div className="hero__bottom__left">
                            <MdPhone className="socialicons"/><h2 className="contactoHero">+ 966 095 069</h2>
                </div>
                <div className="hero__bottom__right">
                    <SiFacebook  className='socialicons'/>
                    <RiInstagramFill className='socialicons'/>
                </div>
            </motion.div>
            </div>
        </div>
    )
}
