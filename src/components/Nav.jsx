import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Sphere from './Sphere'

function Nav() {

    return (
        <div className='nav-container container-flex'>
            <div className="nav-links-section">
                <ul>
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
    )
}

export default Nav