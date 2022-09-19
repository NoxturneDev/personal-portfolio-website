import React from 'react'
import { motion } from 'framer-motion'
import { fade } from '../animation/motionVariants'
import Sphere from './Sphere'

function PageContent() {
    return (
        <div className="page-content welcome-page-content">
            <div className="title-wrapper">
                <motion.h1
                    className='welcome-page-title container-flex'
                    variants={fade[0]}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.8, type: 'tween' }}
                >
                    Hi, Welcome !
                </motion.h1>
                <motion.h1
                    className='welcome-page-subtitle container-flex'
                    variants={fade[0]}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.8, type: 'tween', delay: 0.4 }}
                >
                    My name is Galih Adhi Kusuma
                </motion.h1>
            </div>
            <Sphere />
        </div>
    )
}

export default PageContent