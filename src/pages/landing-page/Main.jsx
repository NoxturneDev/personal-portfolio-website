import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import PageWrapper from '../../components/PageWrapper'
import Nav from '../../components/Nav'

function Main() {
  const [page, setPage] = useState('')
  const wrapper = useRef(null)

  let canScroll = true,
    pageIndex = 1 //started index at 0

  const snapAnimation = (x) => {
    console.log('fired')

    gsap.to(wrapper.current, {
      scrollLeft: x * pageIndex,
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



  }

  const snapScroll = (e) => {
    const y = e.deltaY,
    {current} = wrapper,
    children = current.children 

    // snap previous
    if (y === -100 && canScroll) {
      console.log('you cant scroll')

      pageIndex--
      snapAnimation(1360)
      canScroll = false

      return

    }

    // snap next
    if (y === 100 && canScroll) {
      console.log('you cant scroll')


      snapAnimation(1360)
      canScroll = false

      if(pageIndex === 3){
        pageIndex = 2
      }
      
      pageIndex++
      
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