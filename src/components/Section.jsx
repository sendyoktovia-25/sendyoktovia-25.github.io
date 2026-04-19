import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Section({ id, title, subtitle, children, className = '', bg = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id={id} className={`py-24 px-6 ${bg} ${className}`}>
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex items-center gap-4 mb-3">
            <h2 className="font-display text-3xl font-bold text-slate-900 tracking-tight">
              {title}
            </h2>
            <div className="flex-1 h-px bg-slate-100" />
          </div>
          {subtitle && (
            <p className="text-slate-500 text-sm max-w-lg">{subtitle}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  )
}
