import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { Link } from 'react-router-dom'
import { NavIcon } from './Icons'
import Sphere from './Sphere'


function Nav() {
    const [toggle, setToggle] = useState(false)
    const wrapper = useRef(null)
    const links = useRef(null)
    const iconToggle = useRef(null)

    const toggleAnimation = (state) => {
        const iconToggleOn = iconToggle.current.firstChild
        const iconToggleOff = iconToggle.current.lastChild

        if (state === "entrance") {
            // WRAPPER ANIMATION
            gsap.fromTo(wrapper.current, {
                opacity: 0,
                height: 0,
                width: 0,
                borderBottomRightRadius: '100%'
            }, {
                opacity: 1,
                height: '100vh',
                width: '100vw',
                borderBottomRightRadius: 0
            })

            // LINK ANIMATION
            gsap.fromTo(links.current.children, { opacity: 0, y: -50, }, {
                opacity: 1,
                y: 0,
                delay: 1,
                stagger: {
                    from: "start",
                    each: 0.2
                }
            })

            gsap.to(iconToggleOn, {
                opacity: 0,
                duration: 0.8,
            })

            gsap.fromTo(iconToggleOff, {
                opacity: 0,
            }, {
                opacity: 1,
                duration: 0.8,
                delay: 0.4
            })

        } else if (state === "exit") {
            // LINK ANIMATION
            gsap.to(links.current.children, {
                opacity: 0,
                y: -50,
                stagger: {
                    from: "start",
                    each: 0.2
                }
            })

            // WRAPPER ANIMATION
            gsap.fromTo(wrapper.current, {
                opacity: 1,
                height: '100vh',
                width: '100vw',
                borderBottomRightRadius: 0
            }, {
                opacity: 0,
                height: 0,
                width: 0,
                borderBottomRightRadius: '100%',
                delay: 1
            })

            gsap.to(iconToggleOff, {
                opacity: 0,
                duration: 0.8,
            })

            gsap.fromTo(iconToggleOn, {
                opacity: 0,
            }, {
                opacity: 1,
                duration: 0.8,
                delay: 0.4
            })
        }
    }
    const toggleNav = (toggle) => {
        if (toggle) {
            console.log('toggle on')

            toggleAnimation("entrance")

            setToggle(true)
        } else {
            console.log('toggle off')

            toggleAnimation("exit")

            setToggle(false)
        }
    }

    useEffect(() => {
        gsap.set(wrapper.current, {
            opacity: 0
        })
    }, [])

    return (

        <div className='nav-wrapper'>
            <div className='nav-container container-flex-col' ref={wrapper}>
                <div className="nav-header">
                    <div className="header">
                        MENU
                    </div>
                </div>
                <div className="nav-section-wrapper container-flex">
                    <div className="nav-links-section">
                        <ul ref={links}>
                            <motion.li
                                className="nav-links"
                                whileHover={{ x: 20, letterSpacing: '5px' }}
                                transition={{ type: 'tween', duration: 0.2, delay: 0.1, ease: 'easeOut' }}
                            >
                                <Link to="/">Home</Link>
                            </motion.li>
                            <motion.li
                                className="nav-links"
                                whileHover={{ x: 20, letterSpacing: '5px' }}
                                transition={{ type: 'tween', duration: 0.2, delay: 0.1, ease: 'easeOut' }}
                            >
                                <Link to="/project">Projects</Link>
                            </motion.li>
                            <motion.li
                                className="nav-links"
                                whileHover={{ x: 20, letterSpacing: '5px' }}
                                transition={{ type: 'tween', duration: 0.2, delay: 0.1, ease: 'easeOut' }}
                            >
                                <Link to="/about">About</Link>
                            </motion.li>
                        </ul>
                    </div>
                    <div className="nav-sphere-section">
                        <Sphere />
                    </div>
                </div>
            </div>
            <div className="nav-toggle-icon"  ref={iconToggle}>
                <div className="toggle-on" hidden={toggle ? true : false}>
                    <svg
                        onClick={() => toggleNav(true)}
                        width="29" height="14" viewBox="0 0 24 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.903992 1.07999H23.0707M0.903992 8.37036H23.0707" stroke="#161616" strokeLinecap="round" />
                    </svg>
                </div>
                <div className="toggle-off" hidden={toggle ? false : true}>
                    <svg
                        onClick={() => toggleNav(false)}
                        width="29" height="14" viewBox="0 0 24 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.903992 1.07999H23.0707M0.903992 8.37036H23.0707" stroke="#FFFFFF" strokeLinecap="round" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Nav