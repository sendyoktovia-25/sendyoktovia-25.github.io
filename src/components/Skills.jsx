import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  BarChart3, Link2, Handshake, ShoppingCart,
  FileText, Calculator, Package, TrendingDown,
  Globe, DollarSign, Receipt,
} from 'lucide-react'
import Section from './Section'
import { SKILLS, LANGUAGES, AWARD } from '../data'

const SKILL_ICONS = {
  'Data Analysis': BarChart3,
  'Supply Chain Management': Link2,
  'Vendor Negotiation': Handshake,
  'Procurement Strategy': ShoppingCart,
  'Microsoft Office': FileText,
  'GF Accounting': Calculator,
  'Financial Accounting': DollarSign,
  'Inventory Management': Package,
  'Logistics Coordination': Globe,
  'Cost Optimization': TrendingDown,
  'Invoice Management': Receipt,
}

const CATEGORY_COLORS = {
  core: 'bg-teal-50 border-teal-100 text-teal-700 hover:bg-teal-100 hover:border-teal-200',
  tools: 'bg-blue-50 border-blue-100 text-blue-700 hover:bg-blue-100 hover:border-blue-200',
  ops: 'bg-amber-50 border-amber-100 text-amber-700 hover:bg-amber-100 hover:border-amber-200',
}

const CATEGORY_LABELS = {
  core: 'Strategic',
  tools: 'Tools & Systems',
  ops: 'Operations',
}

function SkillBadge({ skill, index }) {
  const Icon = SKILL_ICONS[skill.label] || FileText
  const colors = CATEGORY_COLORS[skill.category]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      whileHover={{ scale: 1.03 }}
      className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border text-sm font-semibold transition-all cursor-default ${colors}`}
    >
      <Icon size={15} className="flex-shrink-0" />
      {skill.label}
    </motion.div>
  )
}

function LanguageBar({ lang, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg">{lang.flag}</span>
          <span className="text-sm font-semibold text-slate-700">{lang.lang}</span>
        </div>
        <span className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full">
          {lang.level}
        </span>
      </div>
      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${lang.pct}%` } : {}}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.2, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-teal-400 to-teal-600 rounded-full"
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered =
    activeFilter === 'all'
      ? SKILLS
      : SKILLS.filter((s) => s.category === activeFilter)

  const categories = ['all', 'core', 'tools', 'ops']

  return (
    <Section
      id="skills"
      title="Skills & Languages"
      subtitle="Combining analytical rigor with multilingual communication across Indonesian, Mandarin, and English markets."
    >
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all ${
              activeFilter === cat
                ? 'bg-teal-700 text-white border-teal-700 shadow-sm'
                : 'bg-white text-slate-500 border-slate-200 hover:border-teal-200 hover:text-teal-600'
            }`}
          >
            {cat === 'all' ? 'All Skills' : CATEGORY_LABELS[cat]}
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-12">
        {filtered.map((skill, i) => (
          <SkillBadge key={skill.label} skill={skill} index={i} />
        ))}
      </div>

      {/* Languages + Award row */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Languages */}
        <div className="bg-white rounded-2xl border border-slate-100 p-6">
          <h3 className="font-display font-bold text-base text-slate-900 mb-5 flex items-center gap-2">
            <Globe size={16} className="text-teal-500" />
            Languages
          </h3>
          <div className="space-y-5">
            {LANGUAGES.map((l, i) => (
              <LanguageBar key={l.lang} lang={l} index={i} />
            ))}
          </div>
        </div>

        {/* Award */}
        <div className="bg-white rounded-2xl border border-teal-100 p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-teal-400 to-teal-600 rounded-l-2xl" />
          <p className="text-xs font-mono font-semibold tracking-widest text-teal-500 uppercase mb-3 pl-3">
            Recognition
          </p>
          <h3 className="font-display font-bold text-base text-slate-900 mb-1 pl-3">
            {AWARD.title}
          </h3>
          <p className="text-xs font-medium text-teal-600 mb-1 pl-3">{AWARD.subtitle}</p>
          <p className="text-xs text-slate-400 mb-4 pl-3">{AWARD.issuer}</p>
          <p className="text-sm text-slate-500 leading-relaxed pl-3">{AWARD.description}</p>
        </div>
      </div>
    </Section>
  )
}
