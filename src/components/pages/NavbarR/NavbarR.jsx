import React, { useState, useEffect } from 'react';
import logo from '../../../assets/teleufopng.png'
import {motion} from 'framer-motion'
import { ImCross } from "react-icons/im";
import { FiMenu } from "react-icons/fi";
import './Navbar.css'
import { Link, animateScroll as scroll } from "react-scroll";
import {
  Link as LinkR
} from "react-router-dom";
import { LinkRounded } from '@material-ui/icons';


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
    if (window.innerWidth <= 1024) {
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
                            ><LinkR onClick={()=> handleClick()}  to="/"spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}  className='links'>Inicio</LinkR></motion.h2>
                        <motion.h2
                          whileHover={{
                            textShadow: "0px 0px 8px rgb(255,255,255)",
                            scale:1.10}}
                            ><LinkR onClick={()=> handleClick()} to="/ReparaçõesIphone" spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} className='links'>Reparações Iphone</LinkR></motion.h2>
                            <motion.h2
                          whileHover={{
                            textShadow: "0px 0px 8px rgb(255,255,255)",
                            scale:1.10}}
                            ><LinkR onClick={()=> handleClick()} to="/ReparaçõesSmartphone" spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} className='links'>Reparações Smartphone</LinkR></motion.h2>
                            <motion.h2
                          whileHover={{
                            textShadow: "0px 0px 8px rgb(255,255,255)",
                            scale:1.10}}
                            ><LinkR onClick={()=> handleClick()} to="/CapasAcessórios" spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} className='links'>Capas e Acessórios</LinkR></motion.h2>
                            </motion.div> }
            <motion.div
           
            className="headerR">
                <motion.div
                
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
                            ><LinkR to="/" spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} className='links'>Inicio</LinkR></motion.h2>
                        <motion.h2
                          whileHover={{
                            textShadow: "0px 0px 8px rgb(255,255,255)",
                            scale:1.10}}
                            ><LinkR to="/ReparaçõesIphone" spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} className='links'>Reparações Iphone</LinkR></motion.h2>
                            <motion.h2
                          whileHover={{
                            textShadow: "0px 0px 8px rgb(255,255,255)",
                            scale:1.10}}
                            ><LinkR to="/ReparaçõesSmartphone"spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} className='links'>Reparações Smartphone</LinkR></motion.h2>
                            <motion.h2
                          whileHover={{
                            textShadow: "0px 0px 8px rgb(255,255,255)",
                            scale:1.10}}
                            ><LinkR to="/CapasAcessórios"spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} className='links'>Capas e Acessórios</LinkR></motion.h2>
                    </div>)}
                  
                   
                </motion.div>
            </motion.div>
        </div>
    )
}
