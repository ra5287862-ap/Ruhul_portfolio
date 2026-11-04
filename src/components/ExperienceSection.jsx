import { Rocket, GraduationCap, BookOpen, Calendar, MapPin, CheckCircle2, ArrowDown, Award } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Web Developer — MEC Astro Health",
      company: "NASA Space Apps Challenge",
      period: "2024",
      location: "Mymensingh / Global Challenge",
      badge: "NASA Space Apps Challenge",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
      icon: Rocket,
      description:
        "Contributed to the web development of MEC Astro Health, a team project created in the context of the global NASA Space Apps Challenge. Designed a simulated astronaut health telemetry console.",
      achievements: [
        "Engineered responsive telemetry dashboard views for tracking simulated crew vital signs.",
        "Implemented rule-based alerts and evidence-based monitoring instead of unverified automated diagnosis.",
        "Collaborated with interdisciplinary teammates under hackathon constraints to deliver a polished web interface.",
      ],
      skills: ["Web Development", "NASA Space Apps", "HTML / CSS", "Tailwind CSS", "Team Collaboration", "UI Design"],
    },
    {
      role: "C Programming Peer Mentor & Instructor",
      company: "Academic & Campus Community",
      period: "2024 - Present",
      location: "Mymensingh Engineering College",
      badge: "Teaching & Guidance",
      badgeColor: "bg-teal-500/10 text-teal-400 border-teal-500/30",
      icon: GraduationCap,
      description:
        "Helping peers and junior students learn the fundamentals of C programming, strengthening problem-solving skills, and mastering algorithmic logic.",
      achievements: [
        "Guided students through core C concepts: variables, loops, arrays, functions, pointers, and memory.",
        "Assisted in hands-on code debugging, syntax error resolution, and problem-solving practice.",
        "Conducted interactive Q&A and code walkthroughs to demystify programming fundamentals.",
      ],
      skills: ["C Programming", "Teaching & Mentorship", "Data Types & Pointers", "Debugging", "Problem Solving"],
    },
    {
      role: "B.Sc. in Computer Science & Engineering",
      company: "Mymensingh Engineering College",
      period: "2nd Semester (Current)",
      location: "Mymensingh, Bangladesh",
      badge: "Higher Education",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
      icon: BookOpen,
      description:
        "Currently pursuing B.Sc. in Computer Science and Engineering. Deepening theoretical computing knowledge while building hands-on web, Android, and embedded hardware projects.",
      achievements: [
        "Active student in the Department of Computer Science & Engineering (CSE, 2nd Semester).",
        "Developing practical applications spanning Android (Hisab/Due Khata) and IoT (Arduino & ESP32).",
        "Engaged in collaborative software projects, version control with Git/GitHub, and engineering workshops.",
      ],
      skills: ["Computer Science", "C / C++", "Android Studio", "Arduino & ESP32", "Git / GitHub", "Algorithms"],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-black relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            Experience, Education & Activities
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Journey & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">Activities</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            A journey through competitive hackathons, academic mentoring in C programming, and hands-on software & hardware engineering.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:w-0.5 before:bg-white/10 before:-translate-x-1/2 before:hidden md:before:block">
          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            const ExpIcon = exp.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col md:flex-row gap-8 items-start ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-[calc(50%-2rem)]">
                  <div className="rounded-2xl bg-zinc-900/70 border border-white/10 p-6 sm:p-8 backdrop-blur-sm hover:border-cyan-500/40 hover:bg-zinc-900/90 transition-all duration-300 group shadow-xl">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                          <ExpIcon className="w-3.5 h-3.5" />
                        </div>
                        <span
                          className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${exp.badgeColor}`}
                        >
                          {exp.badge}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-cyan-400 mt-1 flex items-center gap-2">
                      <span>{exp.company}</span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-zinc-400 font-normal flex items-center gap-1 text-xs">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="mt-4 text-sm text-zinc-300 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Bullet Highlights */}
                    <div className="mt-4 space-y-2">
                      {exp.achievements.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-400">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="mt-6 pt-5 border-t border-white/5 flex flex-wrap gap-1.5">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 text-zinc-300 border border-white/5"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Central Node for Timeline */}
                <div className="hidden md:flex items-center justify-center w-16 shrink-0 relative mt-8">
                  <div className="w-5 h-5 rounded-full bg-cyan-400 border-4 border-black shadow-lg shadow-cyan-500/50" />
                </div>

                {/* Empty opposite half for spacing */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </div>
            );
          })}
        </div>

        {/* Transition prompt to About Canvas */}
        <div className="mt-16 text-center">
          <a
            href="#about"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-white/10 text-xs sm:text-sm font-semibold text-zinc-300 hover:text-white transition-all shadow-lg"
          >
            <span>Discover Vision & Interests</span>
            <ArrowDown className="w-4 h-4 text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
