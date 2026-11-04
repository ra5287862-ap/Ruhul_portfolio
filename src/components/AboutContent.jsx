import { motion, useTransform } from "motion/react";
import { ArrowDown, GraduationCap, Sparkles } from "lucide-react";

export default function AboutContent({ progress }) {
  // First slide: Philosophy & Mission
  const headOpacity = useTransform(progress, [0, 0.12, 0.35], [0, 1, 0]);
  const headY = useTransform(progress, [0, 0.12, 0.35], [40, 0, -20]);

  // Second slide: Experience & Roles
  const textOpacity = useTransform(progress, [0.38, 0.52, 0.78], [0, 1, 0]);
  const textY = useTransform(progress, [0.38, 0.52, 0.78], [40, 0, -20]);

  // Final slide: Quick highlights & CTA
  const endOpacity = useTransform(progress, [0.82, 0.94], [0, 1]);
  const endY = useTransform(progress, [0.82, 0.94], [30, 0]);

  return (
    <>
      {/* Slide 1: Mission Headline */}
      <motion.div
        style={{ opacity: headOpacity, y: headY }}
        className="absolute left-6 md:left-16 lg:left-24 top-1/4 z-10 max-w-2xl pointer-events-none"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold mb-3">
          <GraduationCap className="w-3.5 h-3.5" />
          About Ruhul Amin
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
          Learning through hands-on projects & practical engineering.
        </h2>
        <p className="mt-4 text-base sm:text-xl text-zinc-300 font-light">
          CSE student at Mymensingh Engineering College with a strong passion for web development, Android apps, and embedded hardware.
        </p>
      </motion.div>

      {/* Slide 2: Engineer Narrative & Interests */}
      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="absolute left-6 md:left-16 lg:left-24 top-1/4 z-10 max-w-2xl pointer-events-none"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-400/30 text-teal-300 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          Areas of Interest & Vision
        </div>
        <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-snug">
          Software Developer & Embedded Systems Explorer.
        </h3>
        <p className="mt-4 text-sm sm:text-lg text-zinc-300 leading-relaxed">
          Driven by curious problem-solving, hands-on experiments, and team collaboration. Constantly building real-world solutions that bridge modern user interfaces and intelligent device hardware.
        </p>
        <div className="mt-5 flex flex-wrap gap-2 text-xs text-zinc-400">
          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg">Web Development</span>
          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg">Android App Development</span>
          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg">Embedded Systems & IoT</span>
          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg">C / C++ Problem Solving</span>
          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg">Collaborative Projects</span>
        </div>
      </motion.div>

      {/* Slide 3: Transition to Details */}
      <motion.div
        style={{ opacity: endOpacity, y: endY }}
        className="absolute bottom-16 z-10 flex flex-col items-center justify-center w-full px-4"
      >
        <div className="text-center mb-5">
          <p className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-1">
            Explore Portfolio
          </p>
          <h4 className="text-xl sm:text-2xl font-bold text-white">
            Discover Technical Skills, Projects & Services
          </h4>
        </div>
        <a
          href="#skills"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 px-8 py-3.5 font-bold text-black shadow-lg shadow-cyan-500/25 transition hover:scale-105 active:scale-95"
        >
          <span>Explore Skills & Tech</span>
          <ArrowDown className="w-4 h-4" />
        </a>
      </motion.div>
    </>
  );
}