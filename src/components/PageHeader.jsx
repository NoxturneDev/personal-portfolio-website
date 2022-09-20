import React from 'react'
import { motion } from 'framer-motion'

function PageHeader({ children: text = "HEADER" }) {
    return (
        <motion.div
            className="page-header container-flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
        >
            <motion.h1
                className='header'
                whileHover={{
                    scaleX: 1.1,
                    x: 10,
                }}
                transition={{ type: 'tween', ease: "easeInOut" }}
            >
                {text}
            </motion.h1>
        </motion.div>
    )
}


export default PageHeader