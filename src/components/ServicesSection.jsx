import { Layout, Smartphone, Cpu, Terminal, ArrowRight, Zap } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Layout,
      title: "Frontend Website Development",
      description:
        "Developing clean, modern, and mobile-responsive websites using semantic HTML, structured CSS, and utility-driven Tailwind CSS styling.",
      highlights: [
        "Mobile-first and fully responsive design",
        "Tailwind CSS modern styling & component structures",
        "Interactive UI with clean layout accessibility",
      ],
      badge: "Web Solutions",
    },
    {
      icon: Smartphone,
      title: "Android Application Development",
      description:
        "Building intuitive, native Android applications in Android Studio with clean user interfaces, state management, and reliable local databases.",
      highlights: [
        "Native Android development in Android Studio",
        "Offline database persistence with Room / SQLite",
        "Shop accounting & customer due management tools",
      ],
      badge: "Mobile Apps",
    },
    {
      icon: Cpu,
      title: "Arduino & ESP32 Embedded Systems",
      description:
        "Designing microcontroller-driven embedded systems, robotic vehicles, and IoT sensor platforms using Arduino and ESP32 with C/C++ firmware.",
      highlights: [
        "Autonomous robotics & obstacle avoiding cars",
        "Sensor data telemetry with ESP32 Wi-Fi/Bluetooth",
        "Hardware pin interfacing, motor drivers & prototyping",
      ],
      badge: "Hardware & IoT",
    },
    {
      icon: Terminal,
      title: "Basic Programming Guidance in C",
      description:
        "Providing beginner-friendly guidance and conceptual tutoring in C programming fundamentals, algorithmic thinking, and debugging.",
      highlights: [
        "Core C fundamentals: syntax, loops, arrays & pointers",
        "Algorithmic thinking & problem-solving foundations",
        "Debugging assistance & clean coding practices",
      ],
      badge: "Mentorship & Guidance",
    },
  ];

  return (
    <section id="services" className="py-24 bg-zinc-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
            <Zap className="w-3.5 h-3.5" />
            Services & Contributions
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Services & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">Areas of Contribution</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Practical development services spanning responsive frontend websites, native Android applications, embedded robotics, and C programming guidance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-zinc-900/60 border border-white/10 p-8 hover:border-cyan-500/40 hover:bg-zinc-900/90 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                    {srv.description}
                  </p>

                  <div className="mt-6 space-y-2 border-t border-white/5 pt-5">
                    {srv.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors"
                  >
                    <span>Discuss a Project or Collaboration</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
