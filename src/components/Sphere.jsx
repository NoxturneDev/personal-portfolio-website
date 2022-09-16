import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Container } from './layout/Container'

function Sphere({ children, customClass, size = 400}) {
    const [deg, setDeg] = useState(70)
    const sphere = useRef(null)

    const changeDegree = () => {
        const scroll = window.scrollY

        setDeg(scroll)
    }

    // useEffect(() => {
    //     window.addEventListener('scroll', changeDegree)

    //     return () => {
    //         window.removeEventListener('scroll', changeDegree)
    //     }
    // }, [])

    return (
        <div
            ref={sphere}
            className={`w-[500px] h-[500px] rounded-full shadow-md ${customClass}`}
            style={{
                background: `linear-gradient(${deg}deg, #282828, #161616`
            }}
        >
            {children}
        </div>
    )
}

export default Sphere