import React from 'react'
import { motion } from 'framer-motion'
import { NavIcon } from './Icons'

function PageHeader({children : text = "HEADER"}) {
    return (
        <div className="page-header container-flex">
            <motion.h1
                className='header'
                whileHover={{
                    scaleX: 1.1,
                    x: 10,
                }}
                transition={{ type: 'tween' }}
            >
                {text}
            </motion.h1>
            <div className='nav-icon'>
                <NavIcon />
            </div>
        </div>
    )
}


export default PageHeader