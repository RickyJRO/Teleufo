import React, { useEffect } from 'react';
import './Serviços.css'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import serviceIphone from '../../assets/service1B.png'
import xiaomiPhone from '../../assets/xiaomiPhone.png'
import lojaext from '../../assets/lojaint2.jpg'
import capas from '../../assets/capas.png'
import {
  Link as LinkR
} from "react-router-dom";

function FadeInWhenLeft({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
      if(!inView){
          controls.start("hidden");
      }
    }, [controls, inView]);
  
    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 1}}
        variants={{hidden:{opacity: 0},
        visible:{opacity:1}
    }}
      >
        {children}
      </motion.div>
    );
  }
  function FadeInWhenRight({ children }) { //sou paneleiro UwU
    const controls = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
      if(!inView){
        controls.start("hidden");
    }
    }, [controls, inView]);
  
    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 1}}
        variants={{hidden:{opacity: 0},
        visible:{opacity:1}
    }}
      >
        {children}
      </motion.div>
    );
  }
export default function Serviços() {


    return (
        <div className='serviços' id="serviços">
            <FadeInWhenLeft>
            <motion.div
            className="service__iphone">
                <div className="iphone__left">
                    <motion.img animate={{y: [0, 35, 0]}}
                        transition={{duration: 4, repeat: Infinity}} className="service__iphoneIMG" src={serviceIphone} />
                </div>
                <div className="iphone__right">
                    <h2>Reparação e Diagnóstico de</h2>
                    <h1><span style={{color:'rgb(41, 231, 214)',textShadow: "0.5px 0.5px 2px black"}}>Iphones</span></h1>
                    <h3>Efetuamos reparações e diagnósticos para todos os modelos Iphone na hora!</h3>
                    <LinkR to="/ReparaçõesIphone">
                    <motion.button
                    onClick={{LinkR}}
                     whileHover={{
                         cursor:'pointer',
                        textShadow: "0px 0px 8px rgb(255,255,255)",
                        boxShadow:"0px 0px 4px rgb(0,31 ,80)",
                        scale:1.05}}
                    className='buttonDark'>Saber Mais</motion.button>
                    </LinkR>
                </div>
                
            </motion.div>
            </FadeInWhenLeft>
            
              <div className="service">
              <FadeInWhenRight >
            <motion.div
            className="service__phones">
              
                <div className="phones__left">
                <h2>Reparação e Diagnóstico de todos os tipos de <span style={{color:'rgb(41, 231, 214)',textShadow: "0.5px 0.5px 1px black"}}><br></br>Telemóvel/Smartphone</span></h2>
                    <h3>Efetuamos reparações e diagnósticos para todos os modelos Smartphone na hora!</h3>
                    <LinkR to="/ReparaçõesSmartphone">
                    <motion.button
                     whileHover={{
                         cursor:'pointer',
                        textShadow: "0px 0px 8px rgb(255,255,255)",
                        boxShadow:"0px 0px 4px rgb(255,255,255)",
                        scale:1.05}}
                    className='buttonDark'>Saber Mais</motion.button>
                    </LinkR>
                </div>
                <div className="phones__right">
                        <motion.img  src={xiaomiPhone} className="service__phoneIMG" />
                </div>
               
            </motion.div>
            </FadeInWhenRight>
            </div>
            <FadeInWhenLeft>
            <motion.div
            className="service__accessories">
                <div className="accessories__left">
                        <img src={capas} className="accessoriesIMG" />
                </div>
                <div className="accessories__right">
                <h2>Venda de</h2>
                    <h1><span style={{color:'rgb(41, 231, 214)',textShadow: "0.5px 0.5px 2px black"}}>Acessórios Eletrónicos</span></h1>
                    <h3>(capas de telemóveis, speakers, microfones, películas, headphones)</h3>
                    <LinkR to="/CapasAcessórios">
                    <motion.button
                     whileHover={{
                         cursor:'pointer',
                        textShadow: "0px 0px 8px rgb(255,255,255)",
                        boxShadow:"0px 0px 4px rgb(255,255,255)",
                        scale:1.05}}
                    className='buttonDark'>Saber Mais</motion.button>
                    </LinkR>
                </div>
            </motion.div>
            </FadeInWhenLeft>
        </div>
    )
}
