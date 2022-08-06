import styles from "./Steps.module.css"
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from "react";

export default function Steps({ step, title, description, bgColor }) {
    const {ref, inView} = useInView({threshold: 0.3})
    const animation = useAnimation()
    const [animate, setAnimate] = useState(true)

    useEffect(() => {
        if(inView) {
            animation.start({
                visibility: "visible",
                translateY: 0,
                opacity: 1,
                transition: {
                    delay: .2,
                    duration: .3
                }
            })
            setAnimate(false)
        }
        if(!inView && animate) {
            animation.start({
                visibility: "hidden",
                translateY: "50px",
                opacity: 0
            })
        }
    },[inView])

    return (
        <motion.div
            ref={ref}
            animate={animation} 
            className={styles.container}
        >
            <div>
                <p style={{ backgroundColor: bgColor, fontSize: ".875rem" }}>Step {step}</p>
            </div>
            <div style={{ color: "#F7F7F7" }}>
                <h3>{ title }</h3>
                <p style={{ fontSize: "1rem", marginBottom: '0' }}>{ description }</p>
            </div>
        </motion.div>
    )
}