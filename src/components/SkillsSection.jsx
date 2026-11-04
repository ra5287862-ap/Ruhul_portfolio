import { useState } from "react";
import { Cpu, Layout, Smartphone, Terminal, GitBranch } from "lucide-react";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "languages", label: "Languages", icon: Terminal },
    { id: "web", label: "Web Development", icon: Layout },
    { id: "android", label: "Android Dev", icon: Smartphone },
    { id: "embedded", label: "Embedded & IoT", icon: Cpu },
    { id: "tools", label: "Tools & Git", icon: GitBranch },
  ];

  const skillGroups = [
    {
      category: "languages",
      title: "Programming Languages & Logic",
      icon: Terminal,
      color: "from-cyan-500/20 to-blue-500/10",
      borderColor: "hover:border-cyan-500/40",
      skills: [
        { name: "C Language", level: "Intermediate", desc: "Pointers, memory management, functions, algorithmic problem solving" },
        { name: "C++", level: "Intermediate", desc: "Object-oriented programming, standard template library (STL), logic" },
        { name: "Problem Solving", level: "Intermediate", desc: "Algorithmic thinking, syntax debugging, competitive practice" },
        { name: "Core CS Fundamentals", level: "Undergraduate", desc: "Computing concepts, data structures basics, flow logic" },
      ],
    },
    {
      category: "web",
      title: "Web Development",
      icon: Layout,
      color: "from-emerald-500/20 to-teal-500/10",
      borderColor: "hover:border-emerald-500/40",
      skills: [
        { name: "HTML5", level: "Intermediate", desc: "Semantic markup, accessible layout structures, web standards" },
        { name: "CSS3", level: "Intermediate", desc: "Responsive styling, Flexbox, CSS Grid, custom transitions" },
        { name: "Tailwind CSS", level: "Intermediate", desc: "Utility-first design, mobile responsiveness, modern UI styling" },
        { name: "Responsive UI Design", level: "Intermediate", desc: "Mobile-friendly layouts, clean typography, cross-device testing" },
      ],
    },
    {
      category: "android",
      title: "Android Application Development",
      icon: Smartphone,
      color: "from-purple-500/20 to-indigo-500/10",
      borderColor: "hover:border-purple-500/40",
      skills: [
        { name: "Java", level: "Intermediate", desc: "OOP principles, core Android runtime, activities & lifecycle" },
        { name: "Android Studio", level: "Intermediate", desc: "Native Android IDE, layout editor, Gradle build system" },
        { name: "Jetpack Compose", level: "Exploring", desc: "Modern declarative Android UI components and layout flows" },
        { name: "Room & Local Storage", level: "Intermediate", desc: "Offline database persistence for accounting & shop dues" },
      ],
    },
    {
      category: "embedded",
      title: "Embedded Systems & Robotics",
      icon: Cpu,
      color: "from-amber-500/20 to-orange-500/10",
      borderColor: "hover:border-amber-500/40",
      skills: [
        { name: "Arduino", level: "Intermediate", desc: "Microcontroller prototyping, C/C++ programming, motor & sensor controls" },
        { name: "ESP32", level: "Intermediate", desc: "Wi-Fi & Bluetooth IoT platform, GPIO interfacing, sensor telemetry" },
        { name: "Robotics & Sensors", level: "Intermediate", desc: "Ultrasonic sensors, motor driver shields, obstacle-avoiding cars" },
        { name: "Hardware Prototyping", level: "Hands-on", desc: "Circuit wiring, breadboards, pin configuration & serial debugging" },
      ],
    },
    {
      category: "tools",
      title: "Tools & Version Control",
      icon: GitBranch,
      color: "from-blue-500/20 to-cyan-500/10",
      borderColor: "hover:border-blue-500/40",
      skills: [
        { name: "Git", level: "Intermediate", desc: "Version control, branching, commits, repository tracking" },
        { name: "GitHub", level: "Intermediate", desc: "Remote repositories, collaborative team projects, open source" },
        { name: "VS Code", level: "Intermediate", desc: "Integrated development, extensions, code formatting" },
        { name: "Team Collaboration", level: "Active", desc: "Hackathon sprints (NASA Space Apps), peer reviews & planning" },
      ],
    },
  ];

  const filteredGroups =
    activeCategory === "all"
      ? skillGroups
      : skillGroups.filter((group) => group.category === activeCategory);

  return (
    <section id="skills" className="py-24 bg-zinc-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
            <Cpu className="w-3.5 h-3.5" />
            Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">Technologies</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            A comprehensive technical toolkit spanning C/C++ programming, responsive web development, Android apps, and Arduino/ESP32 embedded systems.
          </p>

          {/* Interactive Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat.id
                    ? "bg-cyan-400 text-black shadow-lg shadow-cyan-400/25 scale-105"
                    : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <div
                key={idx}
                className={`rounded-2xl bg-zinc-900/60 border border-white/10 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 ${group.borderColor} group`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {group.title}
                    </h3>
                    <p className="text-xs text-zinc-400">
                      {group.skills.length} core competencies
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-xl bg-black/40 border border-white/5 hover:border-cyan-500/20 hover:bg-black/60 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm text-zinc-200">
                          {skill.name}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-1.5 leading-snug">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
