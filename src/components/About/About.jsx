import React, {useEffect} from 'react'
import './About.css'
import logo from '../../assets/teleufopng.png'
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import loja from '../../assets/lojaext.jpeg'

function FadeInWhenVisible({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
      if(!inView){
          controls.start("hidden")
      }
    }, [controls, inView]);
  
    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 }
        }}
      >
        {children}
      </motion.div>
    );
  }

export default function About() { //lol gay chavalo ass:cristo
    return (
        <div id="sobre">
            <FadeInWhenVisible>
            <div className="about" >
                <div className="about__left">
                    <img src={loja} className='img__about' />
                </div>
                <div className="about__right">
                    <img src={logo} className="logoabout" />
                    <h2>Teleufo, com o estabelecimento cujo nome Mr.Mobi, fundada em 2020, com a missão de prevenir e solucionar necessidades de 
                        clientes na área electrónica tem como objetivo no futuro próximo estabelecer uma cadeia de várias entidades.<br></br>
                        A nossa missão é fornecer serviços de qualidade e com alta eficiência com reparações de todos os telemóveis,
                        e venda de acessórios electrónicos sempre com os nossos valores em mente.</h2>
                </div>
            </div>
            </FadeInWhenVisible>
        </div>
    )
}
