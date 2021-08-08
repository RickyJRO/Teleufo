import React, { useEffect } from 'react';
import {motion, useAnimation} from 'framer-motion'
import './Home.css'
import { useInView } from 'react-intersection-observer';
import white from '../../assets/whitephone.png'
import xiaomi from '../../assets/xiaomi.png'
import apple from '../../assets/apple.png'
import huawei from '../../assets/huawei.png'
import samsung from '../../assets/samsung.png'
import { SiFacebook } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { MdPhone } from "react-icons/md";
import Serviços from '../Serviços/Serviços'
import About from '../About/About'
import Perks from '../Perks/Perks'
import Contactos from '../Contactos/Contactos'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

export default function Home() {

    const controls = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
          controls.start('visible');
        }
        if (!inView) {
          controls.start('hidden');
        }
      }, [controls, inView]);

    return (
        <>
        <div className='landing' id="home">
              <Navbar />
            <div className="hero" >
                <div className="hero__left">
                    <motion.div
                        initial={{y:120}}
                        animate={{y:0}}
                        transition={{duration:1}}
                    >
                        <motion.img
                        animate={{y: [0, 20, 0]}}
                        transition={{duration: 4, repeat: Infinity}}
                        className='mockup' src={white} />                    
                    </motion.div>
                </div>
                <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:1,duration:1}}
                className="hero__right">
                    
                    <h1>Fornecemos serviços de qualidade em reparações de todos os <span style={{color:'rgb(41, 231, 214)'}}>telemóveis</span> e venda de <span style={{color:'rgb(41, 231, 214)'}}>acessórios eletrónicos.</span></h1>
                    
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
                   
                    <a href="https://www.facebook.com/MR-MOBI-102169778632445"  target="_blank"><SiFacebook  className='socialicons'/></a>
                    <a href="https://www.instagram.com/mr.mobi_teleufo/"  target="_blank"><RiInstagramFill className='socialicons'/></a>
                    
                </div>
            </motion.div>
            <motion.div
          
            >
            </motion.div>
        </div>
        <div className="products">
                    <img src={apple} className='brandApple' />
                    <img src={xiaomi} className='brandXiaomi' />
                    <img src={huawei} className='brands' />
                    <img src={samsung} className='brandSamsung' />
                </div>
        <Serviços />
        <About />
        <Perks />
        <Contactos />
        <Footer />
        </>
    )
}
