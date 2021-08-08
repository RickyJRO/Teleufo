import React from 'react'
import { SiFacebook } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { IoLocation } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import {motion} from 'framer-motion';
import './Contactos.css'
export default function Contactos() {
    return (
        <div>
            <div className='contactos' id="contactos">
            <h1 className='tituloAboutContactos'>Contactos</h1>
                <div className='columnaa'>      
                    <div className='iconscontacto'>
                        <a href='' target="_blank">
                        <motion.div 
                            whileHover={{
                                scale:1.5
                                
                            }}
                        className='iconContacto'>
                            <a href="https://www.facebook.com/MR-MOBI-102169778632445"   target="_blank"><SiFacebook size='60' color='rgb(41, 231, 214)' style={{marginRight: '20px'}}/></a>
                         
                         </motion.div>
                         </a>
                         <a href='https://www.instagram.com/mr.mobi_teleufo/' target="_blank">
                         <motion.div 
                         whileHover={{
                            scale:1.5
                            
                        }}
                         className='iconContacto'>
                         <RiInstagramFill size ='60' color='rgb(41, 231, 214)'/>
                         </motion.div>
                         </a>
                     </div>
            
                  
             </div>
                <div className='roww'>
                
                    <div className='columnn'>
                        <div className='solid'></div>
                    <IoLocation  size='40' color='rgb(41, 231, 214)' className='iconscc'></IoLocation><h3 className='headerContactos'>Morada</h3>
                    <p className='txtcc'>Av.Praia da Vitória 50-C 1050-184 Lisboa</p>   
                    </div>
                    <div className='columnn'>

                    <IoCall size='40'color='rgb(41, 231, 214)'className='iconscc'></IoCall><h3 className='headerContactos'>Telefone</h3><p className='txtcc'>966 095 069</p>
                    </div>
                    <div className='columnn'>

                    <MdEmail size='40'color='rgb(41, 231, 214)'className='iconscc'></MdEmail><h3 className='headerContactos'>E-mail</h3><p className='txtcc'>Teleufo.saldanha@gmail.com</p>
                    </div>
                    
                 </div>


                 <iframe width="100%" height="295" id="gmap_canvas" src="https://maps.google.com/maps?q=Mr%20Mobi&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
        </div>
    )
}
