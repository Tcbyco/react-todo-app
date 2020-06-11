import React from 'react'
import { motion } from 'framer-motion'

export const JsonComponent = ({ json }) => (
    <motion.pre
        animate={{ opacity: 1, y: 0, x: 0 }}
        initial={{ opacity: 0, y: 100, x: 100 }}
    >
        {JSON.stringify(json, null, 2)}
    </motion.pre>
)
