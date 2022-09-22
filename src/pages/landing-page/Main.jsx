import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import PageWrapper from '../../components/PageWrapper'
import Nav from '../../components/Nav'

function Main() {
  const [page, setPage] = useState('')
  const wrapper = useRef(null)

  let canScroll = true,
    pageIndex = 0 //started index at 0

  const snapAnimation = (x, position) => {
  
    if(position === "next" && pageIndex <= 2) {
      gsap.fromTo(wrapper.current.children[pageIndex], {
        opacity: 0,
        x: 100
      }, {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'power2.out'
      })
    }

    if(position === "prev" && pageIndex >= 0) {
      gsap.fromTo(wrapper.current.children[pageIndex], {
        opacity: 0,
        x: -100
      }, {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'power2.out'
      })
    }
   
    gsap.to(wrapper.current, {
      scrollLeft: pageDetection === 0 ? x : x * pageIndex,
      duration: 1.2,
      ease: "sine.out",
      onComplete: () => {
        canScroll = true
      }
    })

    console.log(x * pageIndex)
    return
  }

  const pageDetection = (position) => {
    // write better snap using detection in this function


  }

  const snapScroll = (e) => {
    const y = e.deltaY

    // snap previous
    if (y === -100 && canScroll) {
      
      canScroll = false
    
      pageIndex--
      snapAnimation(1360, "prev")

      return

    }

    // snap next
    if (y === 100 && canScroll) {

      canScroll = false

      pageIndex++
      snapAnimation(1360, "next")
      
      return
    }

    wrapper.current.scrollLeft += (y / 5)
  }

  useEffect(() => {
    setPage('HOME')

    window.addEventListener('wheel', e => {
      if(!canScroll) return

      snapScroll(e)
    })

    return () => {
      window.removeEventListener('wheel', e => snapScroll(e))
    }

  }, [])

  return (
    <>
      <Nav page={page} />
      <div
        className="scroll-wrapper container-flex-l"
        ref={wrapper}
      >
        <PageWrapper></PageWrapper>
        <PageWrapper></PageWrapper>
        <PageWrapper></PageWrapper>
      </div>
    </>
  )
}

export default Main