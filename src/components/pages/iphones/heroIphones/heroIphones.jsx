import React from 'react'
import './heroIphones.css'
import partido from '../../../../assets/iphone.png'
import { GoTools } from "react-icons/go";
import {motion} from 'framer-motion'
import Navbar from '../../NavbarR/NavbarR'
import { Link, animateScroll as scroll } from "react-scroll";
export default function heroIphones() {
    return (
        <div className="heroIphones">
            <Navbar />
            <div className="heroiphones__container">
                
                <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:1,duration:1.5}}
                className="heroiphones__left">
                    <h2>O ecrã do seu Iphone partiu?</h2>
                    <h2>O seu Iphone deixou de funcionar?</h2>
                    <h2>A sua bateria está velha?</h2>
                    <h1>Deixe connosco!</h1>
                    <Link to="aboutiphone"spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} >
                    <motion.button
                    whileHover={{scale:1.1,cursor:'pointer', textShadow: "0px 0px 8px rgb(255,255,255)",
                    boxShadow:"0px 0px 4px rgb(0,31 ,80)",}}
                    className="sabermais">
                       Saiba Mais 
                    </motion.button>
                    </Link>
                </motion.div>
                <motion.div
                initial={{y:1000,opacity:-2}}
                animate={{y:0,opacity:1}}
                transition={{duration:1}}
                className="heroiphones__right">
                    <img src={partido} className="heroIphones__img" />
                </motion.div>
                <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:1,duration:1.5}}
                className="hero__tools">
                <motion.div
                animate={{y:[0,-40,0,-40,0]}}
                transition={{repeat:Infinity, duration:5}}
                >
                <GoTools className="tools" />
                </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
