import Wrapper from "../Wrapper/Wrapper";
import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css"

export default function Navbar() {
    return(
        <div>
            <Wrapper>
                <nav className={styles.nav}>
                    <Logo/>
                    <ul>
                        <li>The App</li>
                        <li>About us</li>
                        <li>Get in Touch</li>
                    </ul>
                    <div className={styles.hamburger}>&#9776;</div>
                </nav>
            </Wrapper>
        </div>
    )
}