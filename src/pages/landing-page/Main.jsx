import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { fade } from '../../animation/motionVariants'
import Sphere from '../../components/Sphere'
import Pages from '../../components/Pages'
import PageContent from '../../components/PageContent'
import AboutOverlay from './AboutOverlay'
import { useEffect } from 'react'

function Main() {
  const [overlay, setOverlay] = useState(false)

  const handleOverlay = (state) => {
    if(state === false){
      setOverlay(false)

      console.log(overlay, state)
    } 

    return overlay
  }
  
  return (
    <Pages>
      <PageContent name="HOME" pageClass='welcome-page-content'>
        <div className="title-wrapper">
          <motion.h1
            className='welcome-page-title container-flex'
            variants={fade[0]}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 1, type: 'tween', ease: "easeOut" }}
          >
            Hi, Welcome !
          </motion.h1>
          <motion.h1
            className='welcome-page-subtitle container-flex'
            variants={fade[0]}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.8, type: 'tween', delay: 0.1, ease: "easeIn" }}
          >
            My name is Galih Adhi Kusuma
          </motion.h1>
        </div>
        <Sphere />
      </PageContent>
      <PageContent name="ABOUT" pageClass='about-page-content'>
        <AboutOverlay overlayState={handleOverlay} />
        <Sphere />
        <div className="about-text-wrapper">
          <div className="about-text-header header">
            About Me
          </div>
          <div className="about-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore necessitatibus quod soluta commodi et laboriosam hic, exercitationem tenetur nihil accusantium eveniet recusandae natus quisquam? Placeat harum rem minus tempore laudantium, similique, eaque distinctio soluta minima quos sapiente saepe suscipit delectus!
            </p>
            <button onClick={() => {
              setOverlay(true)
            }} className="btn-overlay-toggle">See More </button>
          </div>
        </div>
      </PageContent>
      <PageContent name="PROJECT" />
    </Pages>
  )
}

export default Main