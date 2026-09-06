'use client'

import { useEffect, useRef, useState } from 'react'
import {
  Menu, X, Github, Linkedin, Mail, Phone, MapPin, Download,
  ArrowRight, ExternalLink, Code2, Sparkles, Trophy, GraduationCap,
  Briefcase, FolderGit2, Home as HomeIcon, User, Wrench, Award,
  Cpu, Cloud, Terminal, Layers, Rocket, Shield, Database,
  Zap, ChevronRight, Star, Globe
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const NAV = [
  { id: 'home', label: 'Home', icon: HomeIcon },
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Wrench },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'achievements', label: 'Achievements', icon: Award },
  { id: 'contact', label: 'Contact', icon: Mail },
]

const SKILLS = {
  Programming: {
    icon: Code2,
    color: 'from-indigo-500 to-purple-600',
    items: ['C++', 'Java', 'Python', 'JavaScript', 'Swift', 'Kotlin', 'SQL'],
  },
  Web: {
    icon: Globe,
    color: 'from-purple-500 to-pink-500',
    items: ['HTML', 'CSS', 'React', 'Next.js'],
  },
  'Cloud & Deployment': {
    icon: Cloud,
    color: 'from-cyan-500 to-blue-600',
    items: ['AWS', 'Vercel'],
  },
  'Tools & Platforms': {
    icon: Wrench,
    color: 'from-emerald-500 to-teal-600',
    items: ['Clerk', 'Cisco Packet Tracer', 'Kaggle'],
  },
  Other: {
    icon: Sparkles,
    color: 'from-amber-500 to-orange-500',
    items: ['SolidWorks', 'Problem Solving', 'Team Collaboration', 'Communication', 'Adaptability'],
  },
}

const EXPERIENCE = [
  {
    role: 'Android App Development Intern',
    company: 'AICTE Google',
    period: 'May 2025 – July 2025',
    location: 'Remote',
    icon: Cpu,
    color: 'from-green-500 to-emerald-600',
    points: [
      'Developed Android applications using Kotlin and Android Studio.',
      'Implemented core Android development concepts and Google services.',
      'Built and deployed multiple mobile applications for real-world use cases.',
      'Strengthened understanding of app architecture and deployment models.',
    ],
  },
  {
    role: 'Ethical Hacking Intern',
    company: 'AICTE',
    period: 'October 2025 – December 2025',
    location: 'Remote',
    icon: Shield,
    color: 'from-red-500 to-orange-600',
    points: [
      'Learned fundamentals of cybersecurity and ethical hacking practices.',
      'Identified common web vulnerabilities and security threats.',
      'Applied preventive techniques to enhance system security and protection.',
      'Improved practical knowledge of cybersecurity tools and concepts.',
    ],
  },
]

const PROJECTS = [
  {
    title: 'Credit Card Recommendation System',
    icon: Database,
    color: 'from-blue-500 to-indigo-600',
    description:
      'Built a system that analyzes user financial data including income, spending categories, and credit score. Recommended suitable credit cards based on rewards, cashback, and benefits. Applied machine learning/rule-based algorithms to improve decision accuracy.',
    tags: [
      'Python',
      'Machine Learning',
      'Data Analysis',
      'Recommendation',
    ],
    github: 'https://github.com/mrjaiupadhyay/credit-card-recommendation-system',
    demo: 'https://credit-card-recommendation-system-plum.vercel.app/',
  },

  {
    title: 'Legal Advice & Lawyer Recommendation System',
    icon: Layers,
    color: 'from-purple-500 to-fuchsia-600',
    description:
      'Developed a legal assistance platform that provides instant answers to legal queries. Enabled users to generate documents such as contracts and agreements. Improved accessibility to legal support through AI-based assistance.',
    tags: [
      'AI',
      'NLP',
      'IOS app',
      'Document Generation',
    ],
    github:
      'https://github.com/mrjaiupadhyay/legal-advice-and-lawyer-recommendation-system',
    demo: '',
  },

  {
    title: 'AI Resume Analyser',
    icon: Rocket,
    color: 'from-cyan-500 to-blue-600',
    description:
      'Developed an AI-powered tool to analyze resumes and provide feedback on formatting, content, and keyword optimization. Helped users improve their resumes for better job prospects.',
    tags: [
      'AI/ML',
      'NLP',
      'Resume Optimization',
      'Python',
    ],
    github: 'https://github.com/sumit-pal07/AI-Resume-Analyzer',
    demo: '',
  },
];

const EDUCATION = [
  { qual: 'B.Tech Computer Science', inst: 'Galgotias University, Greater Noida', year: '2023 – 2027', score: 'CGPA 8.00' },
  { qual: 'Class XII', inst: 'Vyas World School', year: '2022 – 2023', score: '76%' },
  { qual: 'Class X', inst: 'Vyas World School', year: '2020 – 2021', score: '85.6%' },
]

const ACHIEVEMENTS = [
  { title: 'Pre-Qualifier — Smart India Hackathon 2025', year: '2025', icon: Trophy, color: 'from-yellow-400 to-orange-500' },
  { title: 'Participated — Cloud Computing Hackathon 2025', year: '2025', icon: Cloud, color: 'from-cyan-400 to-blue-500' },
  { title: 'Pre-Qualifier — Smart India Hackathon 2024', year: '2024', icon: Star, color: 'from-purple-400 to-pink-500' },
]

function useFadeIn() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-in')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

function Navbar({ open, setOpen, active }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050510]/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/30 group-hover:scale-110 transition">
              J
            </div>
            <span className="font-bold text-lg hidden sm:block">
              Jai <span className="gradient-text">Upadhyay</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                  active === n.id
                    ? 'text-white bg-white/5'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {n.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 btn-glow"
            >
              <Download size={16} /> Resume
            </a>
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-white/5"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden pb-4 space-y-1">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition"
              >
                <n.icon size={18} />
                {n.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-3 px-3 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 mt-2"
            >
              <Download size={18} /> Download Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

function Hero() {
  const [typed, setTyped] = useState('')
  const full = 'Computer Science Student  |  Software Developer  |  AI/ML Enthusiast'
  useEffect(() => {
    let i = 0
    const t = setInterval(() => {
      setTyped(full.slice(0, i))
      i++
      if (i > full.length) clearInterval(t)
    }, 35)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 grid-bg" />
      <div className="orb w-[500px] h-[500px] bg-purple-600/40 -top-40 -left-40" style={{ animationDelay: '0s' }} />
      <div className="orb w-[400px] h-[400px] bg-indigo-600/40 top-1/3 right-0" style={{ animationDelay: '5s' }} />
      <div className="orb w-[350px] h-[350px] bg-pink-500/30 bottom-0 left-1/3" style={{ animationDelay: '10s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-12 items-center w-full">
        <div className="lg:col-span-3 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-slate-300">Open to Internships & Opportunities</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Hi, I&apos;m <br className="sm:hidden" />
            <span className="gradient-text">Jai Upadhyay</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 min-h-[3rem]">
            {typed}
            <span className="cursor-blink text-purple-400">|</span>
          </p>

          <p className="text-slate-400 max-w-2xl leading-relaxed">
            Technology enthusiast pursuing B.Tech in Computer Science at Galgotias University.
            I build Android apps, AI/ML systems, and modern web experiences that solve real-world problems.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#projects"
              className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 font-medium"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:border-purple-500/50 bg-white/5 hover:bg-white/10 font-medium transition"
            >
              <Download size={18} /> Download Resume
            </a>
            <a
              href="https://www.linkedin.com/in/jai-upadhyay-72781a361/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-white/10 hover:border-blue-500/50 bg-white/5 hover:bg-white/10 transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} className="text-blue-400" />
            </a>

            <a
              href="https://github.com/mrjaiupadhyay"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-white/10 hover:border-white/40 bg-white/5 hover:bg-white/10 transition"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>

          <div className="flex flex-wrap gap-6 pt-6 text-sm text-slate-400">
            <div className="flex items-center gap-2"><MapPin size={14} className="text-purple-400"/> Bareilly, UP, India</div>
            <div className="flex items-center gap-2"><GraduationCap size={14} className="text-purple-400"/> Galgotias University</div>
            <div className="flex items-center gap-2"><Zap size={14} className="text-purple-400"/> CGPA 8.00</div>
          </div>
        </div>

        {/* Profile picture */}
        <div className="lg:col-span-2 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full blur-2xl opacity-40 animate-pulse" />
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-1 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
              <div className="w-full h-full rounded-full bg-[#0a0a15] overflow-hidden relative">
                <div className="absolute inset-0 rounded-full flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-7xl font-bold tracking-tight">
                  JU
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/profile.jpg"
                  alt="Jai Upadhyay"
                  className="absolute inset-0 w-full h-full object-cover rounded-full"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
              </div>
            </div>
            {/* Floating tags */}
            <div className="absolute -top-4 -left-6 glass-card px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5 animate-bounce" style={{ animationDuration: '3s' }}>
              <Terminal size={12} className="text-green-400"/> Cloud
            </div>
            <div className="absolute top-1/2 -right-4 glass-card px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5 animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
              <Cpu size={12} className="text-purple-400"/> AI/ML
            </div>
            <div className="absolute -bottom-2 left-4 glass-card px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }}>
              <Code2 size={12} className="text-indigo-400"/> Python
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center mb-14 fade-in">
      <p className="text-sm font-medium text-purple-400 tracking-widest uppercase mb-3">{eyebrow}</p>
      <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-slate-400 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  )
}

function About() {
  const stats = [
    { label: 'CGPA', value: '8.00', icon: GraduationCap },
    { label: 'Projects', value: '3+', icon: FolderGit2 },
    { label: 'Internships', value: '2', icon: Briefcase },
    { label: 'Hackathons', value: '3', icon: Trophy },
  ]
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="About Me" title="Building solutions that matter" />
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="fade-in glass-card p-8 rounded-2xl">
            <p className="text-slate-300 leading-relaxed mb-4">
              I&apos;m a <span className="text-purple-400 font-semibold">Technology enthusiast</span> currently pursuing my Bachelor of Technology in Computer Science at Galgotias University. My passion sits at the intersection of{' '}
              <span className="text-indigo-400 font-semibold">Android development</span>,{' '}
              <span className="text-pink-400 font-semibold">AI/ML</span>, and modern software engineering.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I love turning ideas into shipped products — from mobile apps at AICTE Google to AI systems for real world problems.
              I&apos;m constantly learning, and I&apos;m especially interested in building technology that solves real-world problems.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 fade-in">
            {stats.map((s) => (
              <div key={s.label} className="glass-card p-6 rounded-2xl text-center group">
                <s.icon className="mx-auto mb-2 text-purple-400 group-hover:scale-110 transition" />
                <div className="text-3xl font-bold gradient-text">{s.value}</div>
                <div className="text-xs uppercase tracking-widest text-slate-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Skills" title="My technical toolbox" subtitle="Languages, frameworks, and tools I use to build software." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(SKILLS).map(([cat, data]) => (
            <div key={cat} className="glass-card p-6 rounded-2xl fade-in">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${data.color} flex items-center justify-center shadow-lg`}>
                  <data.icon size={20} className="text-white" />
                </div>
                <h3 className="font-semibold text-lg">{cat}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {data.items.map((s) => (
                  <span key={s} className="skill-chip px-3 py-1.5 rounded-lg text-sm bg-white/5 border border-white/10 hover:border-purple-500/50 hover:text-purple-300 transition">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeader eyebrow="Experience" title="Where I've worked" />
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-transparent" />

          <div className="space-y-10">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className={`relative fade-in flex flex-col md:flex-row md:items-center gap-6 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 ring-4 ring-[#050510] z-10" />

                <div className="md:w-1/2 ml-12 md:ml-0 md:px-8">
                  <div className="glass-card p-6 rounded-2xl">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${exp.color} flex items-center justify-center flex-shrink-0`}>
                        <exp.icon size={18} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{exp.role}</h3>
                        <p className="text-purple-400 text-sm">{exp.company}</p>
                        <p className="text-slate-500 text-xs mt-1">{exp.period} · {exp.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-slate-400 text-sm">
                      {exp.points.map((p, j) => (
                        <li key={j} className="flex gap-2">
                          <ChevronRight size={16} className="text-purple-400 mt-0.5 flex-shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Projects"
          title="Things I've built"
          subtitle="A selection of projects that showcase what I love working on."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <div
              key={p.title}
              className="glass-card rounded-2xl overflow-hidden fade-in group flex flex-col"
            >
              <div
                className={`h-32 relative bg-gradient-to-br ${p.color} flex items-center justify-center overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/20" />

                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />

                <p.icon
                  size={48}
                  className="relative text-white group-hover:scale-110 transition"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-bold text-lg mb-2 group-hover:text-purple-300 transition">
                  {p.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed flex-1">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 mt-5 pt-4 border-t border-white/5">
                  {/* GitHub Code Button */}
                  {p.github ? (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-sm transition"
                    >
                      <Github size={14} />
                      Code
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white/5 text-slate-500 text-sm cursor-not-allowed"
                      title="Coming Soon"
                    >
                      <Github size={14} />
                      Code
                    </button>
                  )}

                  {/* Demo Button */}
                  {p.demo ? (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-sm transition"
                    >
                      <ExternalLink size={14} />
                      Demo
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white/5 text-slate-500 text-sm cursor-not-allowed"
                      title="Coming Soon"
                    >
                      <ExternalLink size={14} />
                      Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeader eyebrow="Education" title="My academic journey" />
        <div className="hidden md:block glass-card rounded-2xl overflow-hidden fade-in">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="text-left px-6 py-4 text-sm font-semibold text-purple-300">Qualification</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-purple-300">Institution</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-purple-300">Year</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-purple-300">Score</th>
              </tr>
            </thead>
            <tbody>
              {EDUCATION.map((e, i) => (
                <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition">
                  <td className="px-6 py-5 font-medium">{e.qual}</td>
                  <td className="px-6 py-5 text-slate-400">{e.inst}</td>
                  <td className="px-6 py-5 text-slate-400">{e.year}</td>
                  <td className="px-6 py-5"><span className="px-2.5 py-1 rounded-md bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-purple-300 text-sm">{e.score}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          {EDUCATION.map((e, i) => (
            <div key={i} className="glass-card p-5 rounded-2xl fade-in">
              <h3 className="font-bold">{e.qual}</h3>
              <p className="text-sm text-slate-400 mt-1">{e.inst}</p>
              <div className="flex justify-between mt-3 text-sm">
                <span className="text-slate-500">{e.year}</span>
                <span className="text-purple-300 font-semibold">{e.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Achievements() {
  return (
    <section id="achievements" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeader eyebrow="Achievements" title="Recognition & milestones" />
        <div className="grid md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((a) => (
            <div key={a.title} className="glass-card p-6 rounded-2xl fade-in text-center group">
              <div className={`mx-auto w-14 h-14 rounded-xl bg-gradient-to-br ${a.color} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition`}>
                <a.icon size={24} className="text-white" />
              </div>
              <p className="text-xs text-purple-400 font-semibold tracking-widest uppercase mb-2">{a.year}</p>
              <p className="font-medium text-slate-200">{a.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeader eyebrow="Contact" title="Let's build something together" subtitle="I'm actively looking for internship and full-time software engineering opportunities." />
        <div className="glass-card p-8 sm:p-10 rounded-3xl fade-in">
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <a href="mailto:mrjaiupadhyay@gmail.com" className="group text-center p-4 rounded-xl hover:bg-white/5 transition">
              <div className="mx-auto w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-3 group-hover:scale-110 transition">
                <Mail size={20} />
              </div>
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">Email</p>
              <p className="text-sm font-medium break-all">mrjaiupadhyay@gmail.com</p>
            </a>
            <a href="tel:+917533951156" className="group text-center p-4 rounded-xl hover:bg-white/5 transition">
              <div className="mx-auto w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-3 group-hover:scale-110 transition">
                <Phone size={20} />
              </div>
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">Phone</p>
              <p className="text-sm font-medium">+91 75339 51156</p>
            </a>
            <div className="text-center p-4 rounded-xl">
              <div className="mx-auto w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center mb-3">
                <MapPin size={20} />
              </div>
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">Location</p>
              <p className="text-sm font-medium">Bareilly, UP, India</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 justify-center pt-6 border-t border-white/5">
            <a
              href="https://www.linkedin.com/in/jai-upadhyay-72781a361/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-500/10 border border-blue-500/30 hover:bg-blue-500/20 transition"
            >
              <Linkedin size={16} className="text-blue-400" />
              LinkedIn
            </a>

            <a
              href="https://github.com/mrjaiupadhyay"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/20 hover:bg-white/10 transition"
            >
              <Github size={16} />
              GitHub
            </a>

            <a
              href="https://codolio.com/profile/mrjaiupadhyay"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 hover:bg-purple-500/20 transition"
            >
              <Code2 size={16} className="text-purple-400" />
              Codolio
            </a>
            <a href="mailto:mrjaiupadhyay@gmail.com" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 btn-glow font-medium">
              <Mail size={16} /> Say Hi
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>© 2026 Jai Upadhyay</p>
        <p className="flex items-center gap-1">
          Built with <span className="text-red-400">❤</span> and code.
        </p>
      </div>
    </footer>
  )
}

const App = () => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  useFadeIn()

  useEffect(() => {
    const onScroll = () => {
      const sections = NAV.map((n) => document.getElementById(n.id))
      const y = window.scrollY + 120
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i]
        if (s && s.offsetTop <= y) {
          setActive(NAV[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className="relative min-h-screen bg-[#050510]">
      <Navbar open={open} setOpen={setOpen} active={active} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
