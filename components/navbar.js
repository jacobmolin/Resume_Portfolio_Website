import styles from './layout.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'

const glowLightWidth = 0.1

export default function Navbar() {
    const router = useRouter()
    const currLink = useRef(null)
    const homeLink = useRef(null)
    const resumeLink = useRef(null)
    const portfolioLink = useRef(null)
    const funstuffLink = useRef(null)
    const headerRef = useRef(null)
    const [pos, setPos] = useState(0)

    useEffect(() => {
        if (currLink.current != null) {
            const offset = headerRef.current.getBoundingClientRect().left
            console.log('head: ', headerRef.current)
            console.log('offset', offset)
            const currPos = currLink.current.getBoundingClientRect()
            setPos(currPos.left + currPos.width / 2 - glowLightWidth / 2 - offset)
            console.log(currLink.current)
        }
    }, [currLink.current])

    useEffect(() => {
        switch (router.asPath) {
            case '/resume':
                currLink.current = resumeLink.current
                break
            case '/portfolio':
                currLink.current = portfolioLink.current
                break
            case '/funstuff':
                currLink.current = funstuffLink.current
                break
            default:
                currLink.current = homeLink.current
                break
        }
    }, [router.asPath])

    return (
        <header ref={headerRef} className={styles.nav}>
            <Link href="/">
                <a ref={homeLink}>Home</a>
            </Link>
            <Link href="/resume">
                <a ref={resumeLink}>Resume</a>
            </Link>
            <Link href="/portfolio">
                <a ref={portfolioLink}>Portfolio</a>
            </Link>
            <Link href="/funstuff">
                <a ref={funstuffLink}>Fun stuff</a>
            </Link>
            <span className={styles.spotLight} style={{ left: pos, width: glowLightWidth }} />
        </header >
    )
}

// 