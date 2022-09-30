import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function NavHeader({ children: text = "HEADER" }) {
    return (
        <AnimatePresence wait>
            <motion.div
                className="page-header container-flex"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, type: "tween", ease: "easeOut" }}
                key={text}
            >
                <h1 className='header'>
                    {text}
                </h1>
            </motion.div>
        </AnimatePresence>
    )
}


export default NavHeader