import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Menu from './Menu'

function ScrollWrapper({ children }) {
    const [page, setPage] = useState('')
    const wrapper = useRef(null)

    let canScroll = true,
        pageIndex = 0 //started index at 0

    const snapAnimation = (x, position) => {

        const { current } = wrapper,
            children = current.children

        const childAnimation = (target, direction) => {
            gsap.fromTo(target, {
                opacity: 0,
                x: direction
            }, {
                opacity: 1,
                x: 0,
                duration: 1.5,
                ease: 'power2.out',
                stagger: {
                    from: "start",
                    each: 0.3
                }
            })
        }

        if (position === "next" && pageIndex <= 2) {
            childAnimation(children[pageIndex].children, 100)
        }

        if (position === "prev" && pageIndex >= 0) {
            childAnimation(children[pageIndex].children, -100)
        }

        gsap.to(wrapper.current, {
            scrollLeft: pageIndex === 0 ? 0 : x * pageIndex,
            duration: 0.9,
            ease: "sine.out",
            onComplete: () => {
                canScroll = true
            }
        })

        setPage(children[pageIndex].dataset.page)
        console.log(x * pageIndex)
        return
    }

    const pageDetection = (position) => {
        // write better snap using detection in this function


    }

    const snapScroll = (e) => {
        const y = e.deltaY,
            offset = wrapper.current.children[0].offsetWidth

        // snap previous
        if (y === -100 && canScroll) {

            if(pageIndex <= 0) return
            canScroll = false

            pageIndex--
            snapAnimation(offset, "prev")
            console.log(pageIndex)


            return

        }

        // snap next
        if (y === 100 && canScroll) {

            if(pageIndex >= 2) return
            canScroll = false

            pageIndex++
            snapAnimation(offset, "next")
            console.log(pageIndex)

            return
        }

    }

    useEffect(() => {
        setPage('HOME')

        window.addEventListener('wheel', e => {
            if (!canScroll) return

            snapScroll(e)
        })

        return () => {
            window.removeEventListener('wheel', e => snapScroll(e))
        }

    }, [])

    return (
        <>
            <Menu page={page} />
            <div
                className="scroll-wrapper"
                ref={wrapper}
            >
                {children}
            </div>
        </>
    )
}

export default ScrollWrapper