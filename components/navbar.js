import styles from './layout.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import useWindowSize from '../utils/useWindowSize'

// const glowLightWidth = 0.1

function Navbar() {
    const { width } = useWindowSize()
    // const pages = ['home', 'resume', 'portfolio', 'contact']
    const router = useRouter()
    const homeLink = useRef(null)
    const resumeLink = useRef(null)
    const portfolioLink = useRef(null)
    const contactLink = useRef(null)
    const headerRef = useRef(null)
    const [lineWidth, setLineWidth] = useState(0)
    const [pos, setPos] = useState(0)
    const [startOffset, setStartOffset] = useState(0)
    let box

    useEffect(() => {
        setTimeout(() => {
            setStartOffset(homeLink.current.getBoundingClientRect().left)
        }, 200)
    }, [])


    useEffect(() => {
        if (headerRef.current != null) {
            const offset = headerRef.current.getBoundingClientRect().left

            switch (router.asPath) {
                case '/resume':
                    box = resumeLink.current.getBoundingClientRect()
                    setPos(box.left - offset)
                    setLineWidth(box.right - box.left)
                    break
                case '/portfolio':
                    box = portfolioLink.current.getBoundingClientRect()
                    setPos(box.left - offset)
                    setLineWidth(box.right - box.left)
                    break
                case '/contact':
                    box = contactLink.current.getBoundingClientRect()
                    setPos(box.left - offset)
                    setLineWidth(box.right - box.left)
                    break
                default:
                    box = homeLink.current.getBoundingClientRect()
                    setPos(box.left - offset)
                    setLineWidth(box.right - box.left)
                    break
            }
        }
    }, [router.asPath, width, startOffset])

    return (
        <header ref={headerRef} className={styles.header}>
            <div className={styles.navContainer}>
                <nav className={styles.nav}>
                    <Link href="/">
                        <a ref={homeLink}>home</a>
                    </Link>
                    <Link href="/resume">
                        <a ref={resumeLink}>RESUME</a>
                    </Link>
                    <Link href="/portfolio">
                        <a ref={portfolioLink}>PORTFOLIO</a>
                    </Link>
                    <Link href="/contact">
                        <a ref={contactLink}>CONTACT</a>
                    </Link>
                </nav>
            </div>
            <span className={styles.underline} style={{ marginLeft: pos + "px", width: lineWidth + "px" }} />
            {/* <span className={styles.spotLight} style={{ marginLeft: pos + "px", width: glowLightWidth }} /> */}
        </header >
    )
}

export default Navbar