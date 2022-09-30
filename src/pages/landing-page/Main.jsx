import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { fade } from '../../animation/motionVariants'
import Sphere from '../../components/Sphere'
import ScrollWrapper from '../../components/ScrollWrapper'
import PageContent from '../../components/PageContent'
import PageFooter from '../../components/PageFooter'
import AboutOverlay from './AboutOverlay'
import { useEffect } from 'react'

function Main() {
  const [overlay, setOverlay] = useState(false)

  const handleOverlay = (state) => {
    if (state === false) {
      setOverlay(false)

      console.log(overlay, state)
    }

    return overlay
  }

  return (
    <ScrollWrapper>
      <div className="container-flex-col page-wrapper" data-page="HOME">
        <div className="page-content welcome-page-content">
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
        </div>
        <PageFooter />
      </div>

      <div className="container-flex-col page-wrapper" data-page="HOME">
        <AboutOverlay overlayState={handleOverlay} />
        <div className="page-content about-page-content">
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
              }} className="btn-overlay-toggle" id="toggle-on">See More </button>
            </div>
          </div>
        </div>
        <PageFooter />
      </div>
    </ScrollWrapper>
  )
}

export default Main