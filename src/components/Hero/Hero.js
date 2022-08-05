import Wrapper from "../Wrapper/Wrapper"
import styles from "./Hero.module.css"
import hero from "../../assets/images/hero.png"
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from "react";

export default function Hero() {
    const {ref, inView} = useInView({threshold: 0.2})
    const animation = useAnimation()
    const [animate, setAnimate] = useState(true)

    useEffect(() => {
        if(inView) {
            animation.start({
                visibility: "visible",
                scale: 1,
                opacity: 1,
                transition: {
                    delay: .3
                }
            })
            setAnimate(false)
        }
        if(!inView && animate) {
            animation.start({
                visibility: "hidden",
                scale: .8,
                opacity: 0
            })
        }
    },[inView, animation])

    return(
        <div>
            <Wrapper>
                <div className={styles.block}>
                    <div>
                        <motion.h1 ref={ref}
                        animate={animation} style={{ color: "#232C35" }}>Compare & book <br/>ride-hailing providers</motion.h1>
                        <Para/>
                    </div>
                    <div>
                        <Img/>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

const Img = () => {
    const {ref, inView} = useInView({threshold: 0.4})
    const animation = useAnimation()
    const [animate, setAnimate] = useState(true)

    useEffect(() => {
        if(inView) {
            animation.start({
                visibility: "visible",
                translateX: 0,
                opacity: 1,
                transition: {
                    delay: .5
                }
            })
            setAnimate(false)
        }
        if(!inView && animate) {
            animation.start({
                visibility: "hidden",
                translateX: "100px",
                opacity: 0
            })
        }
    },[inView])

    return (
        <motion.img 
            ref={ref}
            animate={animation} 
            src={hero} 
            width="100%" 
            height="100%" 
            alt="hero" 
        />
    )
}

const Para= () => {
    const {ref, inView} = useInView({threshold: 0.2})
    const animation = useAnimation()
    const [animate, setAnimate] = useState(true)

    useEffect(() => {
        if(inView) {
            animation.start({
                visibility: "visible",
                translateY: 0,
                opacity: 1,
                transition: {
                    delay: .5
                }
            })
            setAnimate(false)
        }
        if(!inView && animate) {
            animation.start({
                visibility: "hidden",
                translateY: "30px",
                opacity: 0
            })
        }
    },[inView])

    return (
        <motion.p
            ref={ref}
            animate={animation}
            style={{ 
                maxWidth: '400px', 
                fontSize: "1.25rem", 
                color: "#4F4F4F" 
            }}
        >
            Save money and time with WhichrRide. Think Compare the market but for taxis.
        </motion.p>
    )
}