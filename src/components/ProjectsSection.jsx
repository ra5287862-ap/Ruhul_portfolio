import { useState } from "react";
import {
  FolderGit2,
  ExternalLink,
  Check,
  ArrowUpRight,
  Smartphone,
  Rocket,
  BookOpen,
  Cpu,
  Car,
  Globe,
} from "lucide-react";
import { GithubIcon } from "./Icons";

export default function ProjectsSection() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: "hisab-due-khata",
      title: "Hisab / Due Khata",
      category: "android",
      categoryLabel: "Android Application",
      icon: Smartphone,
      tagline: "Shop accounting & customer dues tracking app",
      description:
        "An Android application built for local merchants and small business owners to manage daily customer ledgers, credit balances, and due payment records efficiently.",
      features: [
        "Record and calculate customer credit and due balances in real time",
        "Offline-capable data persistence powered by Room DB / SQLite",
        "Intuitive mobile UI crafted with Android Studio & modern components",
        "Instant transaction history search and customer balance summaries",
      ],
      tech: ["Android Studio", "Java", "Jetpack Compose", "Room DB", "Mobile UI"],
      github: "https://github.com/ra5287862-ap",
      demo: "https://github.com/ra5287862-ap",
      accent: "from-emerald-500/20 to-teal-500/5",
      badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    },
    {
      id: "astro-health",
      title: "MEC Astro Health",
      category: "web",
      categoryLabel: "NASA Space Apps Challenge",
      icon: Rocket,
      tagline: "Simulated astronaut health telemetry & monitoring console",
      description:
        "A crew-health monitoring console developed for the NASA Space Apps Challenge. Focuses on evidence-based health telemetry monitoring and rule-based anomaly alerts.",
      features: [
        "Live simulated vital sign tracking console (Heart Rate, SpO2, Cabin Vitals)",
        "Rule-based threshold alerts for rapid astronaut status warning",
        "High-contrast mission control UI built with modern HTML & Tailwind CSS",
        "Team hackathon collaboration with modular frontend architecture",
      ],
      tech: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "NASA Space Apps"],
      github: "https://github.com/ra5287862-ap",
      demo: "https://github.com/ra5287862-ap",
      accent: "from-cyan-500/20 to-blue-500/5",
      badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    },
    {
      id: "book-vibe",
      title: "Book Vibe",
      category: "web",
      categoryLabel: "Frontend Web Development",
      icon: BookOpen,
      tagline: "Responsive book discovery & reading showcase platform",
      description:
        "A stylish frontend web project designed for book readers to explore collections, view curated book recommendations, and inspect reader reviews with fluid responsiveness.",
      features: [
        "Modern catalog layout with interactive book cards and category tags",
        "Utility-first styling using Tailwind CSS with sleek glassmorphism",
        "Fully responsive design optimized for mobile, tablet, and desktop",
        "Clean component structure with accessible HTML and smooth transitions",
      ],
      tech: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "Responsive UI"],
      github: "https://github.com/ra5287862-ap",
      demo: "https://github.com/ra5287862-ap",
      accent: "from-amber-500/20 to-orange-500/5",
      badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/30",
    },
    {
      id: "esp32-projects",
      title: "ESP32 IoT & Sensor Telemetry",
      category: "embedded",
      categoryLabel: "Embedded Systems & IoT",
      icon: Cpu,
      tagline: "Microcontroller automation with Wi-Fi & sensor interfacing",
      description:
        "A series of embedded projects utilizing the ESP32 platform to interface with external hardware sensors, capture environment data, and transmit telemetry wirelessly.",
      features: [
        "Hardware GPIO pin control and sensor data sampling routines",
        "Wireless connectivity leveraging ESP32's built-in Wi-Fi and Bluetooth",
        "Embedded firmware programmed with C / C++ and Arduino libraries",
        "Serial monitor telemetry debugging and real-time state visualization",
      ],
      tech: ["ESP32", "C / C++", "IoT Sensors", "Wi-Fi Telemetry", "Arduino IDE"],
      github: "https://github.com/ra5287862-ap",
      demo: "https://github.com/ra5287862-ap",
      accent: "from-purple-500/20 to-indigo-500/5",
      badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/30",
    },
    {
      id: "arduino-car",
      title: "Arduino Obstacle Avoiding Car",
      category: "embedded",
      categoryLabel: "Robotics & Hardware",
      icon: Car,
      tagline: "Autonomous obstacle detection robotic vehicle",
      description:
        "An autonomous mobile robotic car powered by an Arduino microcontroller. Scans surrounding distances via an ultrasonic sensor and navigates paths without collisions.",
      features: [
        "Autonomous obstacle detection and collision avoidance logic",
        "HC-SR04 ultrasonic sensor range scanning with servo motor rotation",
        "Motor driver shield integration controlling dual DC gear motors",
        "Efficient C++ embedded firmware running on the Arduino Uno platform",
      ],
      tech: ["Arduino Uno", "C++", "Ultrasonic Sensor", "Motor Driver", "Robotics"],
      github: "https://github.com/ra5287862-ap",
      demo: "https://github.com/ra5287862-ap",
      accent: "from-rose-500/20 to-red-500/5",
      badgeColor: "bg-rose-500/10 text-rose-300 border-rose-500/30",
    },
    {
      id: "personal-portfolio",
      title: "Interactive Personal Portfolio",
      category: "web",
      categoryLabel: "Personal Website",
      icon: Globe,
      tagline: "High-performance scroll-driven canvas portfolio website",
      description:
        "A dynamic personal portfolio website engineered to showcase development projects, technical journey, academic background, and service offerings with 60FPS animations.",
      features: [
        "Scroll-driven canvas frame scrub animations with hardware acceleration",
        "Virtual inertia smooth scrolling with Lenis and GSAP ScrollTrigger",
        "Structured showcase for Web, Android, and Embedded Systems projects",
        "Clean, responsive dark-glass UI styled with Tailwind CSS",
      ],
      tech: ["React", "Tailwind CSS", "GSAP", "Lenis", "Framer Motion", "Vite"],
      github: "https://github.com/ra5287862-ap",
      demo: "https://github.com/ra5287862-ap",
      accent: "from-blue-500/20 to-cyan-500/5",
      badgeColor: "bg-blue-500/10 text-blue-300 border-blue-500/30",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-black relative border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            Featured Projects
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">Projects</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            A showcase of web applications, Android tools, and embedded systems developed by Ruhul Amin.
          </p>

          {/* Filter Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              { id: "all", label: "All Projects" },
              { id: "web", label: "Web Development" },
              { id: "android", label: "Android Apps" },
              { id: "embedded", label: "Embedded & Robotics" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  filter === btn.id
                    ? "bg-cyan-400 text-black shadow-lg shadow-cyan-400/25 scale-105"
                    : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const ProjectIcon = project.icon;
            return (
              <div
                key={project.id}
                className="flex flex-col justify-between rounded-3xl bg-zinc-900/60 border border-white/10 overflow-hidden backdrop-blur-sm hover:border-cyan-500/40 hover:bg-zinc-900/90 transition-all duration-300 group shadow-2xl"
              >
                {/* Card Header & Preview Banner */}
                <div className={`p-6 sm:p-8 bg-gradient-to-br ${project.accent} border-b border-white/5 relative`}>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border ${project.badgeColor}`}>
                      <ProjectIcon className="w-3.5 h-3.5" />
                      {project.categoryLabel}
                    </span>
                    <div className="flex items-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full bg-black/40 text-zinc-300 hover:text-white hover:bg-black/80 transition-colors border border-white/10"
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full bg-black/40 text-zinc-300 hover:text-white hover:bg-black/80 transition-colors border border-white/10"
                        title="Project Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-cyan-200/80 font-medium">
                    {project.tagline}
                  </p>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="mt-5 space-y-2.5">
                      <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                        Key Capabilities:
                      </div>
                      {project.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                          <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Chips & CTA */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 text-zinc-300 border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <span>View on GitHub</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
