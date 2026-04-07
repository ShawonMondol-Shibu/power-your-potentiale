import { motion } from 'framer-motion';
import React from 'react'

export default function FocusItem({ title, description}: { title: string; description: string}) {
  return (
    <motion.div 
    variants={{
      hidden: { opacity: 0, x: -10 },
      visible: { opacity: 1, x: 0 }
    }}
    className="space-y-1.5"
  >
    <div className="flex items-center gap-2">
      <h3 className="font-bold text-[17px] text-white tracking-tight">{title}</h3>
    </div>
    <p className="text-zinc-400 text-sm leading-relaxed max-w-sm pl-3.5">
      {description}
    </p>
  </motion.div>
  )
}
