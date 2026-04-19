import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Calendar, CheckCircle2 } from 'lucide-react'
import Section from './Section'
import { EXPERIENCES } from '../data'

function ExperienceCard({ exp, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex gap-6"
    >
      {/* Timeline column */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className={`w-3.5 h-3.5 rounded-full border-2 mt-1.5 flex-shrink-0 z-10 ${
            exp.current
              ? 'bg-teal-500 border-teal-200 shadow-sm shadow-teal-200'
              : 'bg-white border-slate-300'
          }`}
        />
        {index < EXPERIENCES.length - 1 && (
          <div className="w-px flex-1 bg-slate-100 mt-2" />
        )}
      </div>

      {/* Card */}
      <div
        className={`flex-1 mb-10 bg-white rounded-2xl border transition-all duration-200 hover:shadow-lg hover:shadow-slate-100 hover:-translate-y-0.5 group ${
          exp.current ? 'border-teal-100' : 'border-slate-100'
        }`}
      >
        {exp.current && (
          <div className="h-1 bg-gradient-to-r from-teal-500 to-teal-300 rounded-t-2xl" />
        )}
        <div className="p-6">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="font-display text-lg font-bold text-slate-900 leading-tight">
                {exp.role}
              </h3>
              <p className="text-teal-700 font-semibold text-sm mt-0.5">{exp.company}</p>
              <div className="flex items-center gap-1 mt-1 text-slate-400 text-xs">
                <MapPin size={11} />
                <span>{exp.location}</span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span
                className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${
                  exp.current
                    ? 'bg-teal-50 text-teal-700 border border-teal-100'
                    : 'bg-slate-50 text-slate-500 border border-slate-100'
                }`}
              >
                <Calendar size={10} />
                {exp.period}
              </span>
              {exp.current && (
                <span className="text-xs text-teal-600 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                  Current Role
                </span>
              )}
            </div>
          </div>

          <ul className="space-y-2.5">
            {exp.points.map((point, i) => (
              <li key={i} className="flex gap-3 text-sm text-slate-500 leading-relaxed">
                <CheckCircle2
                  size={15}
                  className="text-teal-400 flex-shrink-0 mt-0.5"
                />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Work Experience"
      subtitle="A track record of ownership, precision, and cross-functional impact across procurement and operations."
      bg="bg-slate-50"
    >
      <div>
        {EXPERIENCES.map((exp, i) => (
          <ExperienceCard key={i} exp={exp} index={i} />
        ))}
      </div>
    </Section>
  )
}
