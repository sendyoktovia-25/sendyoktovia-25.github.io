import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Star, MapPin, BookOpen } from 'lucide-react'
import Section from './Section'
import { EDUCATION } from '../data'

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <Section
      id="education"
      title="Education"
      subtitle="Building a strong technical foundation in Information Systems alongside real-world procurement experience."
      bg="bg-slate-50"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white rounded-2xl border border-slate-100 hover:shadow-lg hover:shadow-slate-100 transition-all duration-200 overflow-hidden"
      >
        {/* Top accent */}
        <div className="h-1.5 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600" />

        <div className="p-8 flex flex-col sm:flex-row gap-6 items-start">
          {/* Icon */}
          <div className="w-14 h-14 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center flex-shrink-0">
            <GraduationCap size={24} className="text-teal-600" />
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900">
                  {EDUCATION.institution}
                </h3>
                <p className="text-teal-700 font-semibold text-sm mt-1">
                  {EDUCATION.degree}
                </p>
                <div className="flex items-center gap-1.5 mt-1.5 text-slate-400 text-xs">
                  <MapPin size={11} />
                  <span>{EDUCATION.location}</span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 border border-teal-100">
                <BookOpen size={10} />
                {EDUCATION.period}
              </span>
            </div>

            {/* GPA highlight */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-amber-50 border border-amber-100 rounded-xl px-4 py-2.5">
                <Star size={15} className="text-amber-500 fill-amber-400" />
                <div>
                  <p className="text-xs text-amber-600 font-medium">GPA</p>
                  <p className="font-display text-lg font-bold text-amber-700 leading-none">
                    {EDUCATION.gpa}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5">
                <BookOpen size={15} className="text-slate-400" />
                <div>
                  <p className="text-xs text-slate-400 font-medium">Field</p>
                  <p className="font-semibold text-sm text-slate-700 leading-none mt-0.5">
                    Information Systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
