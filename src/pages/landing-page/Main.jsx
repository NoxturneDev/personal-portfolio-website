import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import PageWrapper from '../../components/PageWrapper'
import { textAnimation } from '../../animation/gsapAnimation'
import Nav from '../../components/Nav'

function Main() {
  const wrapper = useRef(null)
  const text = useRef(null)

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
    <>
      <Nav />
      <div
        className="scroll-wrapper container-flex-l"
        ref={wrapper}
      >
        <PageWrapper></PageWrapper>
        <PageWrapper></PageWrapper>
      </div>
    </>
  )
}

export default Main