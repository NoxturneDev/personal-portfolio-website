import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Container } from './Container'

function Sphere({ children, size = 400, dark = "true"}) {
    const [deg, setDeg] = useState(70)
    const sphere = useRef(null)

    const changeDegree = () => {
        const scroll = window.scrollY

        setDeg(scroll)
        console.log(scroll)
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
            className={`sphere ${dark == "true" ? 'background-radial-dark' : 'background-radial-light'}`}
        >
            {children}
        </div>
    )
}

export default Sphere