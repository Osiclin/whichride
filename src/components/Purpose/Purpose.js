import Wrapper from "../Wrapper/Wrapper"
import styles from "./Purpose.module.css"
import iPhone from "../../assets/images/iPhone.png"
import Steps from "../Steps/Steps"

import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from "react";

export default function Purpose() {
    const {ref, inView} = useInView({threshold: 0.2})
    const titleAnimation = useAnimation()
    const [animate, setAnimate] = useState(true)

    useEffect(() => {
        if(inView) {
            titleAnimation.start({
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
            titleAnimation.start({
                visibility: "hidden",
                scale: .8,
                opacity: 0
            })
        }
    },[inView])

    return(
        <div style={{ backgroundColor: "#5C1A8D" }}>
            <Wrapper>
                <div className={styles.block}>
                    <div style={{ color: "#FFFFFF", marginBottom: "1rem" }}>
                        <motion.h2 
                            ref={ref}
                            animate={titleAnimation} 
                            style={{ maxWidth: "614px", textAlign: "center", marginBottom: "3rem" }}
                        >
                            Whichride brings together multiple ride hailing providers and local taxi firms in one app
                        </motion.h2>
                        <Para/>
                    </div>
                    <div>
                        <div>
                            <Img/>
                        </div>
                        <div className={styles.steps}>
                            <Steps 
                                step="1"
                                title="Enter location" 
                                description="Enter your destination to see a list of taxi providers near you."
                                bgColor="#F2C94C"
                            />
                            <Steps 
                                step="2"
                                title="Find the perfect ride" 
                                description="Filter results by driver rating, driver sex, waiting times, price or speed. Reduce carbon footprint by only showing hybrid or electric cars."
                                bgColor="#F2F2F2"
                            />
                            <Steps 
                                step="3"
                                title="Pay and Save" 
                                description="Once you select a ride, we search the web for coupons to get you an even better deal, then book seemlessly within our app and earn points while you ride."
                                bgColor="#F2F2F2"
                            />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

const Img = () => {
    const {ref, inView} = useInView({threshold: 0.2})
    const imgAnimation = useAnimation()
    const [animate, setAnimate] = useState(true)

    useEffect(() => {
        if(inView) {
            imgAnimation.start({
                visibility: "visible",
                translateX: 0,
                opacity: 1,
                transition: {
                    delay: .3
                }
            })
            setAnimate(false)
        }
        if(!inView && animate) {
            imgAnimation.start({
                visibility: "hidden",
                translateX: "-100px",
                opacity: 0
            })
        }
    },[inView])

    return (
        <motion.img 
            ref={ref}
            animate={imgAnimation} 
            src={iPhone} 
            width="100%" 
            height="100%" 
            alt="hero" 
        />
    )
}

const Para = () => {
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
                    delay: .3
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
            style={{ maxWidth: '497px', margin: "0 auto", fontSize: "1.25rem", textAlign: "center" }}
        >
            Allowing riders to select the provider that offers the best price, service or travel time, then seamlessly book within the app</motion.p>
    )
}