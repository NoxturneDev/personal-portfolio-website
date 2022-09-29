import React, { useEffect, useState, useRef } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'

function AboutOverlay({ overlayState }) {

  const [closed, setClosed] = useState(false)
  const overlay = useRef(null)

  const outAnimation = () => {
    console.log('animation out')

    gsap.fromTo(overlay.current, {
      yPercent: 0,
      opacity: 1,
      duration: 1.2
    }, {
      yPercent: 100,
      opacity: 0
    })
  }

  const inAnimation = () => {
    console.log('animation in')
    gsap.fromTo(overlay.current, {
      yPercent: -100,
      opacity: 0
    }, {
      yPercent: 0,
      opacity: 1,
      duration: 1.2
    })
  }

  useEffect(() => {
    console.log(`overlayState : ${overlayState()}, closed : ${closed}`)

    if (overlayState()) {
      inAnimation()

      return
    }

    if (closed) {
      outAnimation()
      overlayState(false)

      return
    }

  }, [overlayState, closed])

  return (
    <div ref={overlay}>
      <div className='about-overlay'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum architecto deleniti cumque omnis debitis mollitia dolorum magnam, illum voluptatibus vero dignissimos nam facilis, repellendus temporibus iure ut exercitationem quo sit!</p>
        <button onClick={() => {
          setClosed(true)
          overlayState(false)
        }} className="btn-overlay-toggle" >EXIT!</button>
      </div>
    </div>
  )
}

export default AboutOverlay