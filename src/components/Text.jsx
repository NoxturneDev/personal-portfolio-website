import React from 'react'
import { useState, useEffect } from 'react'

/**
 * 
 * @param {String} textSize - String value to define the text size
 * @param {String} customClass - custom tailwind class for the text components
 * @returns React components
 */

function Text({ children, textSize = "sm", customClass = '' }) {
    const [size, setSize] = useState(16)

    const breakpointSize = {
        sm: [12, 16],
        md: [16, 22],
        lg: [24, 32],
    }

    const handleSize = (size) => {
        for (const sz in breakpointSize) {
            if (size === sz) {
                return breakpointSize[sz]
            } 
        }
    }

    const fluidFont = (min, max) => {
        const vw = window.innerWidth,
            minVw = 640,
            maxVw = 1920

        const calc = min + (max - min) * ((vw - minVw) / (maxVw - minVw))

        if (calc <= min) return setSize(min)
        if (calc >= max) return setSize(max)

        setSize(calc)
    }

    useEffect(() => {

        const sz = handleSize(textSize)
        fluidFont(sz[0], sz[1])

        window.addEventListener('resize', fluidFont)

        return () => {
            window.removeEventListener('resize', fluidFont)
        }
    })

    return (
        <p style={{ fontSize: `${size}px` }} className={`text ${customClass}`}>{children}</p>
    )
}

export default Text