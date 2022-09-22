import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Nav from './Nav'

function Pages({ children }) {
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
                duration: 1.2,
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
            scrollLeft: pageIndex === 0 ? x : x * pageIndex,
            duration: 1.2,
            ease: "sine.out",
            onComplete: () => {
                canScroll = true
            }
        })

        setPage(children[pageIndex].dataset.page)
        return
    }

    const pageDetection = (position) => {
        // write better snap using detection in this function


    }

    const snapScroll = (e) => {
        const y = e.deltaY,
            offset = wrapper.current.children[0].offsetWidth

        console.log(offset)

        // snap previous
        if (y === -100 && canScroll) {

            canScroll = false

            pageIndex--
            snapAnimation(offset, "prev")

            return

        }

        // snap next
        if (y === 100 && canScroll) {

            canScroll = false

            pageIndex++
            snapAnimation(offset, "next")

            return
        }

        console.log(pageIndex)

        console.log(wrapper)
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
            <Nav page={page} />
            <div
                className="scroll-wrapper container-flex-l"
                ref={wrapper}
            >
                {children}
            </div>
        </>
    )
}

export default Pages