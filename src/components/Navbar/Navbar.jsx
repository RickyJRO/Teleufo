import React, { useState, useEffect } from 'react';
import logo from '../../assets/teleufopng.png'
import {motion} from 'framer-motion'
import { ImCross } from "react-icons/im";
import { FiMenu } from "react-icons/fi";
import './Navbar.css'
import { Link, animateScroll as scroll } from "react-scroll";



export default function Navbar() {
const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  
  const handleClick = () =>{
       setClick(!click)
       console.log(click)
    };
  const closeMobileMenu = () => setClick(false);

  const toggleUp = () =>{
    scroll.scrollToTop();
  }
  const home = () =>{
    setClick(false);
    scroll.scrollToTop();
  }
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(true);
    } else {
      setButton(false);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

    return ( 
        <div>
             {click==true && <motion.div
                            initial={{x:-700}}
                            exit={{x:-500}}
                            animate={{x:0}}
                            transition={{duration:0.2}}
                            className="header__active">
                            <div className="header__close"><button className="buttonNo" onClick={()=> handleClick()}><ImCross className="closeIcon"/></button></div> 
                            <div className="menuLogo">
                            <img className='logo__headerr' src={logo} /> 
                            
                            </div>
                            <br></br>
                            <motion.h2
                          whileHover={{
                            textShadow: "0px 0px 8px rgb(255,255,255)",
                            scale:1.10}}
                            ><Link onClick={()=> handleClick()}  to="home"spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}  className='links'>Inicio</Link></motion.h2>
                        <motion.h2
                          whileHover={{
                            textShadow: "0px 0px 8px rgb(255,255,255)",
                            scale:1.10}}
                            ><Link onClick={()=> handleClick()} to="serviços" spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} className='links'>Serviços</Link></motion.h2>
                            <motion.h2
                          whileHover={{
                            textShadow: "0px 0px 8px rgb(255,255,255)",
                            scale:1.10}}
                            ><Link onClick={()=> handleClick()} to="sobre" spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} className='links'>Sobre Nós</Link></motion.h2>
                            <motion.h2
                          whileHover={{
                            textShadow: "0px 0px 8px rgb(255,255,255)",
                            scale:1.10}}
                            ><Link onClick={()=> handleClick()} to="contactos" spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} className='links'>Contactos</Link></motion.h2>
                            </motion.div> }
            <div className="header">
                <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:1,duration:1}}
                className="header__left">
                    <img className='logo__header' src={logo} />
                </motion.div>
               <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:1,duration:1}}
                className="header__right">
                    {button==true ? <div className="icon__container" ><button className="buttonNo" onClick={() => handleClick()}><FiMenu className="icon__menu"/></button></div> : ( <div className="header__links">
                      
                        <motion.h2
                          whileHover={{
                            textShadow: "0px 0px 8px rgb(255,255,255)",
                            scale:1.10}}
                            ><Link to="serviços" spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} className='links'>Serviços</Link></motion.h2>
                            <motion.h2
                          whileHover={{
                            textShadow: "0px 0px 8px rgb(255,255,255)",
                            scale:1.10}}
                            ><Link to="sobre"spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} className='links'>Sobre Nós</Link></motion.h2>
                            <motion.h2
                          whileHover={{
                            textShadow: "0px 0px 8px rgb(255,255,255)",
                            scale:1.10}}
                            ><Link to="contactos"spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} className='links'>Contactos</Link></motion.h2>
                    </div>)}
                  
                   
                </motion.div>
            </div>
        </div>
    )
}
