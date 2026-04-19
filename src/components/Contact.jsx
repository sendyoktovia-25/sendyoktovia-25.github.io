import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { PROFILE } from "../data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="contact"
      className="bg-slate-900 py-24 px-6 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#14b8a6 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-900/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

      <div className="max-w-5xl mx-auto relative" ref={ref}>
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-14"
        >
          <motion.p
            variants={item}
            className="inline-block text-xs font-mono font-semibold tracking-widest text-teal-400 uppercase mb-4"
          >
            Get in Touch
          </motion.p>
          <motion.h2
            variants={item}
            className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4"
          >
            Let's build something
            <br />
            <span className="text-teal-400">great together</span>
          </motion.h2>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 mb-12"
        >
          {[
            {
              icon: Mail,
              label: "Email",
              value: PROFILE.email,
              href: `mailto:${PROFILE.email}`,
              external: false,
            },
            {
              icon: Linkedin,
              label: "LinkedIn",
              value: "sendy-oktovia",
              href: PROFILE.linkedin,
              external: true,
            },
            {
              icon: MapPin,
              label: "Location",
              value: PROFILE.location,
              href: null,
              external: false,
            },
          ].map(({ icon: Icon, label, value, href, external }) => (
            <motion.div key={label} variants={item}>
              {href ? (
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex flex-col gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/40 rounded-xl p-5 transition-all duration-200 text-left w-full"
                >
                  <div className="flex items-center justify-between">
                    <Icon size={18} className="text-teal-400" />
                    {external && (
                      <ArrowUpRight
                        size={14}
                        className="text-slate-600 group-hover:text-teal-400 transition-colors"
                      />
                    )}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium mb-0.5">
                      {label}
                    </p>
                    <p className="text-sm text-slate-200 font-semibold break-all leading-snug group-hover:text-teal-300 transition-colors">
                      {value}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="flex flex-col gap-3 bg-white/5 border border-white/10 rounded-xl p-5">
                  <Icon size={18} className="text-teal-400" />
                  <div>
                    <p className="text-xs text-slate-500 font-medium mb-0.5">
                      {label}
                    </p>
                    <p className="text-sm text-slate-200 font-semibold">
                      {value}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Primary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white font-bold text-sm px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-teal-900/50 hover:-translate-y-0.5"
          >
            <Mail size={16} />
            {PROFILE.email}
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-transparent hover:bg-white/5 text-white font-bold text-sm px-8 py-4 rounded-xl border border-white/20 hover:border-teal-500/60 transition-all hover:-translate-y-0.5"
          >
            <Linkedin size={16} />
            View LinkedIn Profile
            <ArrowUpRight size={14} />
          </a>
        </motion.div>

        {/* Footer note */}
        <p className="text-center text-slate-600 text-xs mt-16 font-mono">
          © {new Date().getFullYear()} Sendy Oktovia · Batam, Indonesia
        </p>
      </div>
    </section>
  );
}
