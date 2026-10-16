import { useEffect, useRef, useState, FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp, Award, Brain, Briefcase, ChevronDown, ChevronLeft, ChevronRight, Code2, Database, Download, ExternalLink, FileText, FlaskConical, GraduationCap, Github, Linkedin, Mail, Moon, Sun, Wrench, X } from 'lucide-react'
import { certs, conference, config, education, experience, highlights, projects, Project, research, roles, skills } from './data'

const nav = ['Home', 'About', 'Skills', 'Projects', 'Research', 'Conference', 'Experience', 'Certifications', 'Contact']
const icons: Record<string, JSX.Element> = { code: <Code2 />, db: <Database />, brain: <Brain />, tool: <Wrench /> }

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-24">
      <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 font-display text-3xl font-bold md:text-4xl">{title}</motion.h2>
      {children}
    </section>
  )
}

function DataField() {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const cv = ref.current!, ctx = cv.getContext('2d')!
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w = 0, h = 0, t = 0, raf = 0
    const size = () => { w = cv.width = cv.clientWidth; h = cv.height = cv.clientHeight }
    const v = (n: string) => getComputedStyle(document.documentElement).getPropertyValue(n).trim().split(' ').join(',')
    const draw = () => {
      ctx.clearRect(0, 0, w, h); const cy = v('--cyan'), vi = v('--violet')
      for (let l = 0; l < 3; l++) {
        ctx.beginPath(); ctx.lineWidth = 2; ctx.strokeStyle = `rgba(${l % 2 ? vi : cy},0.35)`
        for (let x = 0; x <= w; x += 8) { const y = h * (0.35 + 0.15 * l) + Math.sin(x * 0.008 + t * 0.6 + l * 1.7) * 28 + Math.sin(x * 0.02 + t) * 8; x ? ctx.lineTo(x, y) : ctx.moveTo(x, y) }
        ctx.stroke()
      }
      for (let k = 0; k < 44; k++) { const x = (k / 44) * w, y = h * 0.5 + Math.sin(x * 0.008 + t * 0.6 + 1.7) * 28 + Math.sin(k * 12.9898) * 34; ctx.fillStyle = `rgba(${cy},0.55)`; ctx.beginPath(); ctx.arc(x, y, 2.5, 0, 7); ctx.fill() }
      t += 0.01; if (!still) raf = requestAnimationFrame(draw)
    }
    size(); draw(); window.addEventListener('resize', size)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', size) }
  }, [])
  return <canvas ref={ref} aria-hidden="true" className="h-full w-full" />
}

function Photo() {
  const [bad, setBad] = useState(false)
  return bad ? (
    <div className="grid h-full w-full place-items-center bg-surface font-display text-6xl font-bold text-cyan" title="Add public/profile.jpg">{config.monogram}</div>
  ) : <img src={config.photo} alt={`Portrait of ${config.name}`} onError={() => setBad(true)} className="h-full w-full object-cover object-top" />
}

function Hero() {
  const [i, setI] = useState(0)
  useEffect(() => { const t = setInterval(() => setI((n) => (n + 1) % roles.length), 2200); return () => clearInterval(t) }, [])
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div aria-hidden="true" className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-violet/15 blur-3xl" /><div className="absolute inset-0 opacity-50"><DataField /></div>
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="text-mute">Hi, I'm {config.name}.</p>
          <h1 className="mt-3 font-display text-5xl font-bold leading-[1.05] md:text-7xl">Turning Data <br />Into Intelligence.</h1>
          <p className="mt-5 h-8 font-display text-xl text-cyan" aria-live="polite">
            <AnimatePresence mode="wait"><motion.span key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="inline-block">{roles[i]}</motion.span></AnimatePresence>
          </p>
          <p className="mt-4 max-w-xl text-lg text-mute">I explore the intersection of data science, Python, and artificial intelligence to transform complex problems into meaningful, practical solutions.</p>
          <p className="mt-3 flex items-center gap-2 text-sm text-mute"><GraduationCap size={16} className="text-cyan" />{education.degree} · {education.status} · {education.school}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">Explore My Work</a>
            <a href={config.resume} download="Urwashi_Dhawas_Resume.pdf" className="btn btn-ghost"><Download size={16} />Download Resume</a>
            <a href="#contact" className="btn btn-ghost">Let's Connect</a>
          </div>
        </div>
        <div className="mx-auto aspect-[4/5] w-64 overflow-hidden rounded-3xl border border-fg/10 shadow-xl shadow-violet/15 md:w-72"><Photo /></div>
      </div>
    </section>
  )
}

function ProjectArt({ id }: { id: string }) {
  const s = 'rgb(var(--cyan))', v = 'rgb(var(--violet))'
  return (
    <svg viewBox="0 0 320 140" className="h-36 w-full" role="img" aria-label={`${id} illustration`}>
      {id === 'noise' && <g fill="none" strokeWidth="3" strokeLinecap="round" stroke={s}>{Array.from({ length: 26 }, (_, k) => <line key={k} x1={12 + k * 11.5} x2={12 + k * 11.5} y1={70 - (10 + Math.abs(Math.sin(k * 0.7)) * 50)} y2={70 + (10 + Math.abs(Math.sin(k * 0.7)) * 50)} />)}</g>}
      {id === 'marathi' && <g><rect x="30" y="20" width="260" height="46" rx="10" fill="none" stroke={s} /><text x="46" y="50" fontSize="22" fill="currentColor">मी शाळेत जातो.</text><rect x="30" y="78" width="120" height="40" rx="10" fill="none" stroke={v} /><rect x="170" y="78" width="120" height="40" rx="10" fill="none" stroke={v} /><text x="44" y="103" fontSize="12" fill={s}>Matra ✓</text><text x="184" y="103" fontSize="12" fill={s}>Sandhi ✓</text></g>}
      {id === 'forensic' && <g fill="none" strokeWidth="2"><rect x="14" y="40" width="60" height="60" stroke={v} strokeDasharray="4" /><rect x="96" y="30" width="50" height="80" stroke={s} /><rect x="166" y="30" width="50" height="80" stroke={v} /><rect x="238" y="40" width="68" height="60" stroke={s} /><path d="M74 70h22M146 70h20M216 70h22" stroke="currentColor" /></g>}
    </svg>
  )
}

function Modal({ p, onClose }: { p: Project; onClose: () => void }) {
  useEffect(() => { const k = (e: KeyboardEvent) => e.key === 'Escape' && onClose(); window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k) }, [onClose])
  return (
    <motion.div className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div role="dialog" aria-modal="true" aria-label={p.title} onClick={(e) => e.stopPropagation()} initial={{ y: 24 }} animate={{ y: 0 }} className="glass max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-bg p-7">
        <button autoFocus onClick={onClose} aria-label="Close" className="float-right"><X /></button>
        <p className="text-sm text-cyan">{p.status}</p>
        <h3 className="font-display text-2xl font-bold">{p.title}</h3>
        <p className="mt-3 text-mute">{p.summary}</p>
        {[['Problem statement', p.problem], ['My contribution', p.contribution], ['Challenges and learnings', p.learnings]].map(([h, t]) => <div key={h} className="mt-5"><h4 className="font-medium">{h}</h4><p className="text-mute">{t}</p></div>)}
        <h4 className="mt-5 font-medium">Key features</h4>
        <ul className="list-disc pl-5 text-mute">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
        <div className="mt-5 flex flex-wrap gap-2">{p.stack.map((t) => <span key={t} className="rounded-full border border-fg/15 px-3 py-1 text-xs">{t}</span>)}</div>
      </motion.div>
    </motion.div>
  )
}

function Projects() {
  const filters = ['All', ...Array.from(new Set(projects.map((p) => p.filter)))]
  const [f, setF] = useState('All'); const [open, setOpen] = useState<Project | null>(null)
  return (
    <Section id="projects" title="Featured Projects">
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {filters.map((x) => <button key={x} onClick={() => setF(x)} aria-pressed={f === x} className={`btn ${f === x ? 'btn-primary' : 'btn-ghost'}`}>{x}</button>)}
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.filter((p) => f === 'All' || p.filter === f).map((p) => (
          <motion.article layout key={p.id} className="glass flex flex-col rounded-3xl p-6 transition hover:border-cyan/50">
            <ProjectArt id={p.id} />
            <p className="mt-3 text-xs text-cyan">{p.status}</p>
            <h3 className="mt-1 font-display text-xl font-bold">{p.title}</h3>
            <p className="mt-1 text-xs text-mute">{p.category}</p>
            <p className="mt-3 flex-1 text-sm text-mute">{p.summary}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">{p.stack.map((t) => <span key={t} className="rounded-full bg-violet/15 px-2.5 py-0.5 text-xs">{t}</span>)}</div>
            <button onClick={() => setOpen(p)} className="btn btn-primary mt-5 self-start">View details</button>
          </motion.article>
        ))}
      </div>
      <AnimatePresence>{open && <Modal p={open} onClose={() => setOpen(null)} />}</AnimatePresence>
    </Section>
  )
}

function Experience() {
  const [o, setO] = useState<number | null>(0)
  return (
    <Section id="experience" title="Internship and Experience">
      <ol className="relative ml-3 border-l border-fg/20">
        {experience.map((e, k) => (
          <li key={e.org} className="mb-8 ml-6">
            <span className="absolute -left-[7px] mt-2 h-3.5 w-3.5 rounded-full bg-cyan" />
            <button onClick={() => setO(o === k ? null : k)} aria-expanded={o === k} className="flex w-full items-center justify-between gap-3 text-left">
              <span><span className="block text-xs text-mute">{e.date}</span><span className="font-display text-xl font-bold">{e.org}</span><span className="block text-cyan">{e.role}</span></span>
              <ChevronDown className={`transition ${o === k ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence initial={false}>{o === k && <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pt-2 text-mute">{e.text}</motion.p>}</AnimatePresence>
          </li>
        ))}
      </ol>
    </Section>
  )
}

const C = 'rgb(var(--cyan))', V = 'rgb(var(--violet))'
function BarsArt() {
  const h = [30, 52, 40, 70, 58, 86, 64, 96, 78, 110]
  return (
    <svg viewBox="0 0 320 150" className="w-full" role="img" aria-label="Decorative bar and line chart">
      {h.map((v, k) => <rect key={k} x={14 + k * 30} y={140 - v} width="18" height={v} rx="4" fill={V} opacity={0.25 + k * 0.07} />)}
      <polyline fill="none" stroke={C} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points={h.map((v, k) => `${23 + k * 30},${130 - v * 0.9}`).join(' ')} />
    </svg>
  )
}
function ScatterArt() {
  return (
    <svg viewBox="0 0 320 150" className="w-full" role="img" aria-label="Decorative scatter plot with trend line">
      {Array.from({ length: 28 }, (_, k) => <circle key={k} cx={20 + k * 10} cy={120 - k * 3 + Math.sin(k * 7.3) * 18} r="4" fill={k % 2 ? V : C} opacity=".8" />)}
      <line x1="14" y1="125" x2="306" y2="35" stroke="currentColor" strokeOpacity=".5" strokeWidth="2" strokeDasharray="5 4" />
    </svg>
  )
}
function HeatArt() {
  return (
    <svg viewBox="0 0 320 150" className="w-full" role="img" aria-label="Decorative correlation heatmap">
      {Array.from({ length: 40 }, (_, k) => { const r = Math.floor(k / 8), c = k % 8; return <rect key={k} x={c * 40 + 2} y={r * 30 + 2} width="36" height="26" rx="5" fill={(r + c) % 3 ? C : V} opacity={0.12 + Math.abs(Math.sin(r * 3 + c * 1.7)) * 0.75} /> })}
    </svg>
  )
}
function WaveArt() {
  return (
    <svg viewBox="0 0 320 150" className="w-full" role="img" aria-label="Decorative sound wave">
      {Array.from({ length: 32 }, (_, k) => { const h = 8 + Math.abs(Math.sin(k * 0.5) * Math.cos(k * 0.17)) * 60; return <rect key={k} x={10 + k * 9.6} y={75 - h} width="5" height={h * 2} rx="2.5" fill={k % 3 ? C : V} opacity=".85" /> })}
    </svg>
  )
}
const slides = [
  { title: 'From raw data to insight', text: 'Cleaning, exploring and visualising datasets with Python, Pandas and Matplotlib.', art: <BarsArt /> },
  { title: 'Finding patterns', text: 'Exploratory data analysis to understand how variables relate before drawing conclusions.', art: <ScatterArt /> },
  { title: 'Signals and sound', text: 'Turning environmental sound-level data into information people can read and act on.', art: <WaveArt /> },
  { title: 'Patterns at a glance', text: 'Clear visual summaries that make patterns in data easy to see and explain.', art: <HeatArt /> },
]

function Marquee() {
  const items = skills.filter((s) => s.cat !== 'AI and Machine Learning').flatMap((s) => s.items)
  const row = (list: string[], cls: string) => (
    <div className="marquee-wrap overflow-hidden py-1.5"><div className={`marquee-track flex w-max ${cls}`}>
      {[...list, ...list].map((t, k) => <span key={k} className="mr-3 whitespace-nowrap rounded-full border border-fg/10 bg-surface/80 px-4 py-1.5 font-mono text-xs text-mute">{t}</span>)}
    </div></div>
  )
  return <div aria-hidden="true" className="py-6">{row(items, '')}{row([...items].reverse(), 'marquee-rev')}</div>
}

function Showcase() {
  const [i, setI] = useState(0); const [paused, setPaused] = useState(false); const n = slides.length
  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => setI((x) => (x + 1) % n), 4500); return () => clearInterval(t)
  }, [paused, n])
  return (
    <section aria-label="Visual showcase" className="mx-auto max-w-6xl px-5 py-10" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <div className="glass overflow-hidden rounded-3xl">
        <motion.div className="flex" animate={{ x: `-${i * 100}%` }} transition={{ type: 'spring', stiffness: 70, damping: 18 }}>
          {slides.map((s, k) => (
            <div key={s.title} aria-hidden={k !== i} className="grid w-full shrink-0 items-center gap-8 p-8 md:grid-cols-2 md:p-12">
              <div><p className="font-mono text-xs text-cyan">0{k + 1} / 0{n}</p><h3 className="mt-2 font-display text-2xl font-bold md:text-3xl">{s.title}</h3><p className="mt-3 text-mute">{s.text}</p></div>
              <div className="rounded-2xl border border-fg/10 bg-bg/60 p-5">{s.art}</div>
            </div>
          ))}
        </motion.div>
        <div className="flex items-center justify-between border-t border-fg/10 px-6 py-3">
          <div className="flex gap-2">{slides.map((s, k) => <button key={s.title} onClick={() => setI(k)} aria-label={`Show slide ${k + 1}`} aria-current={k === i} className={`h-2 rounded-full transition-all ${k === i ? 'w-8 bg-violet' : 'w-2 bg-fg/25'}`} />)}</div>
          <div className="flex gap-2">
            <button aria-label="Previous slide" onClick={() => setI((i + n - 1) % n)} className="btn btn-ghost !p-2"><ChevronLeft size={18} /></button>
            <button aria-label="Next slide" onClick={() => setI((i + 1) % n)} className="btn btn-ghost !p-2"><ChevronRight size={18} /></button>
          </div>
        </div>
      </div>
      <p className="mt-2 text-center text-xs text-mute">Decorative illustrations, not real results.</p>
    </section>
  )
}

function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  useEffect(() => { const k = (e: KeyboardEvent) => e.key === 'Escape' && onClose(); window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k) }, [onClose])
  return (
    <motion.div className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-label="Certificate preview" onClick={(e) => e.stopPropagation()} className="relative max-h-[90vh] max-w-4xl">
        <button autoFocus onClick={onClose} aria-label="Close preview" className="absolute -top-10 right-0 text-white"><X /></button>
        <img src={src} alt="Certificate" className="max-h-[85vh] rounded-xl bg-white" />
      </div>
    </motion.div>
  )
}

function Certs() {
  const [open, setOpen] = useState('')
  return (
    <Section id="certifications" title="Certifications and Credentials">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certs.map((c) => (
          <article key={c.title} className="glass flex flex-col overflow-hidden rounded-2xl">
            <button onClick={() => setOpen(c.image)} aria-label={`Preview ${c.title}`} className="aspect-[4/3] w-full bg-bg p-2"><img src={c.image} alt={`${c.title} certificate`} loading="lazy" className="h-full w-full object-contain" /></button>
            <div className="flex flex-1 flex-col p-5">
              <p className="font-mono text-xs text-cyan">{c.type}</p>
              <h3 className="mt-1 font-display text-lg font-bold leading-snug">{c.title}</h3>
              <p className="text-sm text-mute">{c.org}</p>
              <p className="mt-2 flex-1 font-mono text-xs text-mute">{c.date}{c.id && <><br />{c.id}</>}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <button onClick={() => setOpen(c.image)} className="btn btn-primary">View Certificate</button>
                {c.link && <a href={c.link} target="_blank" rel="noreferrer" className="btn btn-ghost"><ExternalLink size={14} />Verify</a>}
              </div>
            </div>
          </article>
        ))}
      </div>
      <AnimatePresence>{open && <Lightbox src={open} onClose={() => setOpen('')} />}</AnimatePresence>
    </Section>
  )
}

function Conference() {
  const [open, setOpen] = useState('')
  return (
    <Section id="conference" title="Conference Presentation">
      <div className="max-w-2xl">
        <article className="glass rounded-3xl p-7">
          <FileText className="text-violet" />
          <p className="mt-3 font-mono text-xs text-cyan">Conference paper presentation</p>
          <h3 className="font-display text-xl font-bold">{conference.paper}</h3>
          <p className="mt-2 text-mute">Presented at the {conference.name}, hosted by {conference.host}, on {conference.dates}.</p>
          <button className="btn btn-primary mt-5" onClick={() => setOpen(conference.image)}>View Certificate</button>
        </article>
      </div>
      <AnimatePresence>{open && <Lightbox src={open} onClose={() => setOpen('')} />}</AnimatePresence>
    </Section>
  )
}

function Contact() {
  const [err, setErr] = useState('')
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); const d = new FormData(e.currentTarget)
    const n = String(d.get('n')).trim(), m = String(d.get('m')).trim(), msg = String(d.get('t')).trim()
    if (!n || !/^\S+@\S+\.\S+$/.test(m) || msg.length < 10) return setErr('Enter your name, a valid email, and a message of at least 10 characters.')
    setErr(''); window.location.href = `mailto:${config.email}?subject=${encodeURIComponent('Portfolio message from ' + n)}&body=${encodeURIComponent(msg + '\n\nReply to: ' + m)}`
  }
  const inp = 'w-full rounded-xl border border-fg/20 bg-transparent px-4 py-3'
  return (
    <Section id="contact" title="Let's Connect">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-3">
          <p className="text-mute">Open to internships and collaborations in data science, Python and AI/ML.</p>
          <a className="btn btn-primary" href={`mailto:${config.email}`}><Mail size={16} />Email me</a>{' '}
          <a className="btn btn-ghost" href={config.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} />LinkedIn</a>{' '}
          <a className="btn btn-ghost" href={config.github} target="_blank" rel="noreferrer"><Github size={16} />GitHub</a>{' '}
          <a className="btn btn-ghost" href={config.resume} download="Urwashi_Dhawas_Resume.pdf"><Download size={16} />Resume</a>
        </div>
        <form onSubmit={submit} noValidate className="space-y-3">
          <label className="block">Name<input name="n" className={inp} autoComplete="name" /></label>
          <label className="block">Email<input name="m" type="email" className={inp} autoComplete="email" /></label>
          <label className="block">Message<textarea name="t" rows={4} className={inp} /></label>
          <p role="alert" className="min-h-6 text-sm text-red-400">{err}</p>
          <button className="btn btn-primary">Open in email app</button>
        </form>
      </div>
    </Section>
  )
}

export default function App() {
  const [dark, setDark] = useState(false); const [active, setActive] = useState('Home'); const [top, setTop] = useState(false)
  useEffect(() => { document.documentElement.classList.toggle('dark', dark) }, [dark])
  useEffect(() => {
    const ids = nav.map((n) => (n === 'Certifications' ? 'certifications' : n.toLowerCase()))
    const sc = () => {
      setTop(window.scrollY > 600)
      const atEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      let cur = 0
      ids.forEach((d, k) => { const el = document.getElementById(d); if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) cur = k })
      setActive(atEnd ? nav[nav.length - 1] : nav[cur])
    }
    sc(); window.addEventListener('scroll', sc, { passive: true })
    return () => window.removeEventListener('scroll', sc)
  }, [])
  const id = (n: string) => (n === 'Certifications' ? 'certifications' : n.toLowerCase())
  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[70] focus:rounded focus:bg-cyan focus:px-3 focus:py-2 focus:text-black">Skip to content</a>
      <header className="glass fixed inset-x-0 top-0 z-50">
        <nav aria-label="Primary" className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3">
          <a href="#home" className="font-display text-lg font-bold text-cyan" aria-label="Home">{config.monogram}</a>
          <ul className="flex min-w-0 gap-4 overflow-x-auto whitespace-nowrap text-sm">
            {nav.map((n) => <li key={n}><a href={`#${id(n)}`} aria-current={active === n ? 'true' : undefined} className={active === n ? 'text-cyan' : 'text-mute hover:text-fg'}>{n}</a></li>)}
          </ul>
          <a href={config.resume} download="Urwashi_Dhawas_Resume.pdf" className="btn btn-primary hidden !py-1.5 sm:inline-flex"><Download size={14} />Resume</a>
          <button onClick={() => setDark(!dark)} aria-label="Toggle light and dark theme">{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
        </nav>
      </header>
      <main>
        <Hero />
        <Marquee />
        <Showcase />
        <Section id="about" title="About">
          <p className="max-w-3xl text-lg text-mute">I'm a third-year B.Tech Computer Science Engineering student (Data Science) at Symbiosis Institute of Technology, Nagpur. I'm interested in Python, machine learning, data visualization and AI-powered applications, and I learn by building projects, running experiments and completing technical certifications. My goal is to build intelligent, data-driven solutions using Python, machine learning, data analytics and emerging AI technologies.</p>
          <div className="glass mt-8 flex items-start gap-4 rounded-2xl p-6"><GraduationCap className="shrink-0 text-violet" /><div><p className="font-mono text-xs text-cyan">Education · {education.status}</p><h3 className="font-display text-lg font-bold">{education.degree}</h3><p className="text-mute">{education.school}</p></div></div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">{highlights.map((h) => <div key={h.title} className="glass rounded-2xl p-6"><h3 className="font-display text-lg font-bold">{h.title}</h3><p className="mt-2 text-sm text-mute">{h.text}</p></div>)}</div>
        </Section>
        <Section id="skills" title="Technical Skills">
          <div className="grid gap-5 md:grid-cols-2">{skills.map((s) => (
            <div key={s.cat} className="glass rounded-2xl p-6">
              <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-bold text-cyan">{icons[s.icon]}{s.cat}</h3>
              <ul className="flex flex-wrap gap-2">{s.items.map((i) => <li key={i} className="rounded-full border border-fg/15 px-3 py-1 text-sm">{i}</li>)}</ul>
            </div>))}</div>
        </Section>
        <Projects />
        <Section id="research" title="Research">
          <div className="glass rounded-3xl p-7">
            <p className="flex items-center gap-2 text-cyan"><FlaskConical size={18} />Status</p>
            <h3 className="font-display text-2xl font-bold">{research.title}</h3>
            <p className="mt-2 rounded-lg border border-violet/40 p-3 text-sm">{research.status}</p>
            <div className="mt-6 grid gap-5 md:grid-cols-2">{research.blocks.map(([h, t]) => <div key={h}><h4 className="font-medium">{h}</h4><p className="text-mute">{t}</p></div>)}</div>
            <h4 className="mt-6 font-medium">References</h4>
            <ul className="list-disc pl-5 text-mute">{research.references.map((r) => <li key={r}>{r}</li>)}</ul>
          </div>
        </Section>
        <Conference />
        <Experience />
        <Certs />
        <Contact />
      </main>
      <footer className="border-t border-fg/10 py-8 text-center text-sm text-mute">© {new Date().getFullYear()} {config.name}</footer>
      {top && <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" className="btn btn-primary fixed bottom-5 right-5 z-40 !p-3"><ArrowUp size={18} /></button>}
    </>
  )
}
