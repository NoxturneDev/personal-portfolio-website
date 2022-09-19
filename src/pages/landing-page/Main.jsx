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
    const y = e.deltaY
    // offset = wrapper.current.offsetWidth / 4

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
      className="scroll-wrapper container-flex-l"
      ref={wrapper}
    >
      {/* TODO : turn into page components later */}
      <div className="container-flex-col page-wrapper">
        <div className="page-header">
          <h1>HEADER</h1>
          <h1>Nav</h1>
        </div>
        <div className="page-content welcome-page-content">
          <div className="title-wrapper">
            <h1 className='welcome-page-title container-flex'>Hi, Welcome !</h1>
            <h1 className='welcome-page-subtitle container-flex'>My name is Galih Adhi Kusuma</h1>
          </div>
          <Sphere />
        </div>
        <div className="page-footer">
          <h1 className='footer-link'>
            <a href='#' target="_blank">Do You need a website? Contact me here</a>
          </h1>
          <div className="footer-link next-page">
            <a href="#">About</a>
          </div>
        </div>
      </div>
      <div className="page-wrapper container-flex">
        <h1>ANJAY</h1>
      </div>
      <div className="page-wrapper container-flex">
        <h1>ANJAY</h1>
      </div>
    </div>
  )
}

export default Main