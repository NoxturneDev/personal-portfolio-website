import React, { useEffect, useRef } from 'react'
import gsap, { wrap } from 'gsap'
import PageWrapper from '../../components/PageWrapper'
import { textAnimation } from '../../animation/gsapAnimation'
import Nav from '../../components/Nav'

function Main() {
  const wrapper = useRef(null)
  const text = useRef(null)

  let snap = false
  const snapAnimation = (x) => {
    if (snap) {
      gsap.to(wrapper.current, {
        scrollLeft: x,
        duration: 1.2,
        ease: "sine.out",
        onComplete: () => {
          snap = false

          console.log('snap')
        }
      })
    } else return
  }

  const snapScroll = (e) => {
    const y = e.deltaY
    const offsetX = [wrapper.current.firstChild.offsetLeft, wrapper.current.lastChild.offsetLeft]

    // wheel down
    if (y === -100) {
      // snap next
      snap = true
      snapAnimation(offsetX[0])
    }

    if (y === 100) {
      // snap previous
      snap = true
      snapAnimation(offsetX[1])
    }

    wrapper.current.scrollLeft += (y / 5)
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