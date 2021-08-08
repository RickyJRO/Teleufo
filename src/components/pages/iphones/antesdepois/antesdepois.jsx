import React,{useEffect} from 'react'
import './antesdepois.css'
import antes from '../../../../assets/iphonepartido.jfif'
import depois from '../../../../assets/iphoneFuncional.jfif'
import iphoneantesdepois from '../../../../assets/iphoneantesdepois.jfif'
import iphoneantesdepois2 from '../../../../assets/iphoneantesdepois2.jfif'
import iphonereparacao from '../../../../assets/iphonereparacao.jfif'
import iphonetablet from '../../../../assets/tabletreparacao.jfif'
import iphonepartido1 from '../../../../assets/iphonepartido1.jfif'
import {motion, useAnimation,AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import foto from '../../../../assets/reparacoes1.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import foto1 from '../../../../assets/reaparacaoiphone.jfif'
import foto2 from '../../../../assets/pecasiphone.jfif'
import { Link, animateScroll as scroll } from "react-scroll";
export default function antesdepois() {

    function SlideLeftWhenVisible({ children }) {
        const controls = useAnimation();
        const [ref, inView] = useInView();
      
        useEffect(() => {
          if (inView) {
            controls.start("visible");
          }if (!inView){
              controls.start("hidden");
          }
        }, [controls, inView]);
      
        return (
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.50 }}
            variants={{
              visible: { x:0, scale: 1 },
              hidden: { x:-500, scale: 0 }
            }}
          >
            {children}
          </motion.div>
        );
      }
      function SlideRightWhenVisible({ children }) {
        const controls = useAnimation();
        const [ref, inView] = useInView();
      
        useEffect(() => {
          if (inView) {
            controls.start("visible");
          }if (!inView){
              controls.start("hidden");
          }
        }, [controls, inView]);
      
        return (
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.50 }}
            variants={{
              visible: { x:0, scale: 1 },
              hidden: { x:500, scale: 0 }
            }}
          >
            {children}
          </motion.div>
        );
      }

      const Slideshow = ({ image }) => (
        <AnimatePresence>
          <motion.img
            key={image.src}
            src={image.src}
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        </AnimatePresence>
      )

    return (
        <div> 
          <div className="antesdepois__top">
           
            <div className="antesdepoistop__text">
              <h1>Reparamos o seu Iphone na Hora!</h1>
            <h2>Na Teleufo o diagnóstico é relizado na hora independentemente do local de compra do telemóvel. Todos os serviços de reparação têm diagnóstico gratuito.</h2>
            <div className="antesdepois__carousel2containerr">
            <Carousel autoPlay="true" infiniteLoop="true" showThumbs={0} showIndicators={0} showIndicators={0} showStatus={0}>
                  <div>
                  <img className="antesdepois__carousel2container" src={iphonereparacao}  />
                  </div>
                  <div>
                  <img className="antesdepois__carousel2container" src={iphonepartido1}  />
                  </div>
                  <div>
                  <img className="antesdepois__carousel2container" src={iphonetablet}  />
                  </div>
            </Carousel>
            </div>
            
            <h1>Tipos de Reparações</h1>
            <h2>A necessidade de arranjar o Iphone pode surgir por várias questões. Connosco o arranjo do telemóvel fica á responsabilidade de uma equipa certificada e com experiência em diversos tipos de reparação de Iphones. Alguns dos mais comuns são:<br></br>
         
            <ul>
              <li>Câmara</li>
              <li>Porta de Ligação ou Porta de Carregamento</li>
              <li>Danos de água ou outros líquidos</li>
              <li> Problemas de som</li>
              <li>Ecrã (vidro)</li>
              <li>Bateria</li>
              <li>Botões</li>
              <li>Sensores</li>
              <li>Antenas Wi-fi, Bluetooth e GPS</li>
            </ul>
  
            Se o seu Iphone também não tem sido o que esperava ou tem vindo a perder a performance inicial, fale connosco! Na Teleufo damos conta do recado, fazemos diagnóstico na hora, gratuito e sem compromisso!</h2>
            </div>
            <div className="antesdepois__container">
            <h2>Antes/Depois</h2>
            <div className="antesdepois__carousel">
              <Carousel autoPlay="true" infiniteLoop="true" showThumbs={0} showIndicators={0} showIndicators={0} showStatus={0}>
                  <div>
                  <img src={antes}  />
                  </div>
                  <div>
                  <img src={depois}  />
                  </div>
                  <div>
                  <img src={iphoneantesdepois}  />
                  </div>
                  <div>
                  <img src={iphoneantesdepois2}  />
                  </div>
              </Carousel>  
              </div> 
            </div>
              </div>  
              <div className="aboutiphone2">
                <div className="aboutiphone2__container">
                    <div className="aboutiphone2__left">
                        <img src={foto1} className="aboutiphone2__img"/>
                    </div>
                    <div className="aboutiphone2__right">
                    <img src={foto2} className="aboutiphone2__img"/>
                    </div>
                    <div className="aboutiphone2__card">
                        <div className="aboutiphone2card__text">
                        <h2>Não está convencido?</h2>
                        <h3>Temos ao seu dispor uma equipa técnica para o seu auxilio 24/7</h3>
                        
                        <button><Link to="contactos"spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} >Ligue já!</Link></button>  
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}
