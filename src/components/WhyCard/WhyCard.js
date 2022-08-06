import styles from './WhyCard.module.css'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from "react";

export default function WhyCard({ title, description, icon }) {
    const {ref, inView} = useInView({threshold: 0.2})
    const animation = useAnimation()
    const [animate, setAnimate] = useState(true)

    useEffect(() => {
        if(inView) {
            animation.start({
                visibility: "visible",
                translateX: 0,
                opacity: 1,
                transition: {
                    delay: .2,
                    duration: .4
                }
            })
            setAnimate(false)
        }
        if(!inView && animate) {
            animation.start({
                visibility: "hidden",
                translateX: "-100px",
                opacity: 0
            })
        }
    },[inView])

    return (
        <motion.div className={styles.container}
            ref={ref}
            animate={animation} 
        >
            <div style={{ marginBottom: "1rem" }}>{ icon }</div>
            <div>
                <h4>{ title }</h4>
                <p style={{ fontSize: "1.125rem", color: "#4F4F4F" }}>{ description }</p>
            </div>
        </motion.div>
    )
}