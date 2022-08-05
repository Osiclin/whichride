import Wrapper from "../Wrapper/Wrapper"
import styles from "./Footer.module.css"
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from "react";

export default function Footer() {
    const {ref, inView} = useInView({threshold: 0.2})
    const animation = useAnimation()

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
        }
        if(!inView) {
            animation.start({
                visibility: "hidden",
                scale: .8,
                opacity: 0
            })
        }
    },[inView])

    return (
        <div>
            <div style={{ backgroundColor: "#F2C94C" }}>
                <Wrapper>
                    <div className={styles.block}>
                        <div style={{ color: "#232C35" }}>
                            <motion.h2
                                ref={ref}
                                animate={animation}
                                style={{ textAlign: "center", marginBottom: "1rem" }}>Sign up to our beta form</motion.h2>
                            <p style={{ maxWidth: '497px', margin: "0 auto", fontSize: "1.25rem", textAlign: "center", marginBottom: "4rem" }}>Sign up to our mailing list to find out more information and keep up to date about our activities</p>
                            <div style={{ display: "flex", maxWidth: "500px", margin: "0 auto " }}>
                                <input placeholder="email" />
                                <button style={{ marginLeft: ".5rem" }}>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </Wrapper>

            </div>
            <div style={{ backgroundColor: "#DEB63D" }}>
                <Wrapper>
                    <div style={{ color: "#232C35", display: "flex", justifyContent: "space-between", padding: "1rem" }}>
                        <p style={{ fontSize: ".688rem" }}>© 2020 Whichride - All rights reserved.</p>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <p style={{ fontSize: ".688rem", marginRight: "1rem" }}>Privacy Policy</p>
                            <p style={{ fontSize: ".688rem" }}>Terms and Conditions</p>
                        </div>
                        
                    </div>
                </Wrapper>
            </div>
        </div>
        
    )
}