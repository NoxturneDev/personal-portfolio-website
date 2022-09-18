import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { motion } from 'framer-motion'
import { Section, Container, Wrapper } from '../../components/Container'
import Sphere from '../../components/Sphere'
import { textAnimation } from '../../animation/gsapAnimation'


function Main() {
  const wrapper = useRef(null)
  const text = useRef(null)

  const smoothScroll = (xtarget) => {
    // luxy.init()

    // luxy.settings.wrapperSpeed = 0.02
  }

  let canScroll = true,
    i = 0

  const snapScroll = (e) => {
    e.preventDefault()

    const y = e.deltaY,
      offset = wrapper.current.offsetWidth / 4

    wrapper.current.scrollLeft += (y / 5)

    // wheel down
    // if (y === 100 && canScroll) {
    //   // snap next
    //   canScroll = false
    //   console.log(i)

    //   gsap.to(wrapper.current, {
    //     x: i > 0 ? i * -offset : -offset,
    //     duration: 2,
    //     onComplete: () => {
    //       console.log(i)
    //       canScroll = true
    //       i++
    //     }
    //   })
    // }

    // if (y === -100 && canScroll) {
    //   // snap previous
    //   gsap.to(wrapper.current, {
    //     x: -i * offset,
    //     duration: 2,
    //     onStart: () => {
    //       console.log(i)
    //       canScroll = false
    //     },
    //     onComplete: () => {
    //       console.log(i)
    //       canScroll = true
    //       i--
    //     }
    //   })
    // }

  }

  useEffect(() => {
    textAnimation(text.current, { duration: 0.5, type: "fade-up" })

    window.addEventListener('wheel', e => snapScroll(e))

    return () => {
      window.removeEventListener('wheel', e => snapScroll(e))
    }

  }, [])

  return (
    <div
      style={{ overflowX: 'scroll', overflowY: 'hidden', maxHeight: '100vh' }}
      className="container-flex section overflow-y-hidden w-max"
      ref={wrapper}
    >
      <div className='container-flex-col-t'>
        <div>
          <h2 className='header' >welcome</h2>
        </div>
        <div className='container-flex-r'>
          <div className=''>
            <motion.h1
              className='header-xl' ref={text}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "tween", duration: 0.5, ease: "easeOut" }}
            >
              Hi, Welcome!
            </motion.h1>
            <motion.h1 className='text-[4.5rem] font-light font-melodrama'
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "tween", duration: 0.5, ease: "easeOut" }}
            >
              Im Galih Adhi Kusuma!
            </motion.h1>
          </div>
          <div className=''>
            <Sphere />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main