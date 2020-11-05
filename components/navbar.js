import styles from './layout.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'

const glowLightWidth = 0.1

function Navbar() {
    const router = useRouter()
    const homeLink = useRef(null)
    const resumeLink = useRef(null)
    const portfolioLink = useRef(null)
    const funstuffLink = useRef(null)
    const headerRef = useRef(null)
    let box
    const [resize, setResize] = useState(0)
    const [pos, setPos] = useState(0)

    useEffect(() => {
        window.addEventListener('resize', () => { setResize(window.innerWidth) })

    }, [])

    useEffect(() => {
        if (headerRef.current != null) {
            const offset = headerRef.current.getBoundingClientRect().left

            switch (router.asPath) {
                case '/resume':
                    box = resumeLink.current.getBoundingClientRect()
                    setPos(box.left - offset - glowLightWidth / 2 + (box.right - box.left) / 2)
                    break
                case '/portfolio':
                    box = portfolioLink.current.getBoundingClientRect()
                    setPos(box.left - offset - glowLightWidth / 2 + (box.right - box.left) / 2)
                    break
                case '/funstuff':
                    box = funstuffLink.current.getBoundingClientRect()
                    setPos(box.left - offset - glowLightWidth / 2 + (box.right - box.left) / 2)
                    break
                default:
                    box = homeLink.current.getBoundingClientRect()
                    setPos(box.left - offset - glowLightWidth / 2 + (box.right - box.left) / 2)
                    break
            }
        }
    }, [router.asPath, resize])

    return (
        <header ref={headerRef} className={styles.header}>
            <nav className={styles.nav}>
                <Link href="/">
                    <a ref={homeLink}>HOME</a>
                </Link>
                <Link href="/resume">
                    <a ref={resumeLink}>RESUME</a>
                </Link>
                <Link href="/portfolio">
                    <a ref={portfolioLink}>PORTFOLIO</a>
                </Link>
                {/* <Link href="/funstuff">
                <a ref={funstuffLink}>Fun stuff</a>
            </Link> */}
                <span className={styles.spotLight} style={{ marginLeft: pos + "px", width: glowLightWidth }} />
            </nav>
        </header >
    )
}

export default Navbar