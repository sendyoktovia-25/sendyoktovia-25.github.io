import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Download } from "lucide-react";
import { PROFILE } from "../data";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function ProfileImage() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative flex-shrink-0 mx-auto">
      {/* Decorative ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-200 to-teal-50 scale-110 -z-10" />
      <div className="absolute inset-0 rounded-full border-2 border-teal-300/40 scale-125 -z-10" />

      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-teal-100"
      >
        {imgError ? (
          <div className="w-full h-full bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center">
            <span className="font-display font-bold text-5xl text-white">
              SO
            </span>
          </div>
        ) : (
          <img
            src={PROFILE.profileImageUrl}
            alt="Sendy Oktovia"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover"
          />
        )}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center pt-20 pb-16 px-6 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-100 rounded-full blur-3xl opacity-80 -translate-x-1/3 translate-y-1/3" />
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#0f766e 1px, transparent 1px), linear-gradient(90deg, #0f766e 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <ProfileImage />

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex-1 text-center md:text-left"
          >
            <motion.p
              variants={item}
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-widest text-teal-600 uppercase mb-4 bg-teal-50 border border-teal-100 px-3 py-1.5 rounded-full"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              {PROFILE.title}
            </motion.p>

            <motion.h1
              variants={item}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.05] mb-6"
            >
              Sendy{" "}
              <span className="relative">
                <span className="relative z-10 text-teal-700">Oktovia</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-teal-100 -z-0 rounded" />
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-slate-500 text-lg leading-relaxed max-w-xl mb-8 mx-auto md:mx-0"
            >
              {PROFILE.bio}
            </motion.p>

            <motion.div
              variants={item}
              className="flex items-center gap-2 text-sm text-slate-400 mb-8 justify-center md:justify-start"
            >
              <MapPin size={14} className="text-teal-500" />
              <span>{PROFILE.location}</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={item}
              className="flex flex-wrap gap-3 justify-center md:justify-start mb-12"
            >
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-600 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-teal-100 hover:-translate-y-0.5"
              >
                <Mail size={16} />
                Email Me
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm px-6 py-3 rounded-xl border border-slate-200 hover:border-teal-300 transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                <Linkedin size={16} className="text-teal-600" />
                LinkedIn
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={item}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-100"
            >
              {PROFILE.stats.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <p className="font-display text-3xl font-bold text-slate-900 leading-none mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-400 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
