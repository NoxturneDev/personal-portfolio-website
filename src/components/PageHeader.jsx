import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function PageHeader({ children: text = "HEADER" }) {
    return (
        <AnimatePresence wait>
            <motion.div
                className="page-header container-flex"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.8, duration: 0.5, type: "tween", ease: "easeOut" }}
                key={text}
            >
                <h1 className='header'>
                    {text}
                </h1>
            </motion.div>
        </AnimatePresence>
    )
}


export default PageHeader