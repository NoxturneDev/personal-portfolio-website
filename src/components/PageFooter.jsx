import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

function PageFooter() {
    const line = useRef(null)

    const animateLine = () => {
        gsap.fromTo(line.current, {
            width: '2%'
        }, {
            width: '100%',
            delay: 1.2,
            ease: 'power2.out'
        })
    }

    useEffect(() => {
        animateLine()
    }, [])

    return (
        <motion.div
            className="page-footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
        >
            <h1 className='footer-link header'>
                <a href='#' target="_blank">Do You need a website? Contact me here</a>
            </h1>
            <div className="footer-link next-page">
                <a href="#">About</a>
            </div>
            <span
                style={{
                    width: '10%',
                    height: '10px',
                    textAlign: 'left'
                }}
            >
                <hr className='horizontal-line' ref={line} />
            </span>
        </motion.div>
    )
}

export default PageFooter