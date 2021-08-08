import React,{useEffect} from 'react'
import './Perks.css'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GoTools } from "react-icons/go";
import { FaUserClock } from "react-icons/fa";
import { HiShieldCheck } from "react-icons/hi";

function FadeInWhenVisible({ children }) {
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
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 }
        }}
      >
        {children}
      </motion.div>
    );
  }

export default function Perks() {
    return (
        <div>
            <div className="perks">
                <FadeInWhenVisible>
                <div className="perks__left">
                    <GoTools className="perks__icons" />
                    <h2>+5000 Reparações</h2>
                    <h3>Já efetuamos mais de 5000 reparações em todos os tipos de Smartphone</h3>
                </div>
                </FadeInWhenVisible>
                <FadeInWhenVisible>
                <div className="perks__middle">
                    <FaUserClock  className="perks__icons" />
                    <h2>Diagnóstico e Reparações na Hora</h2>
                    <h3>Diagnosticamos e reparamos os seus smartphones na hora!</h3>
                </div>
                </FadeInWhenVisible>
                <FadeInWhenVisible>
                <div className="perks__right">
                    <HiShieldCheck  className="perks__icons" />
                    <h2>+6 Anos de Experiência</h2>
                    <h3>A Teleufo conta com mais de 6 anos de experiência </h3>
                </div>
                </FadeInWhenVisible>
            </div>
        </div>
    )
}
