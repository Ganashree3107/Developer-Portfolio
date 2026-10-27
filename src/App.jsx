import { useEffect, useRef, useState } from 'react'
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin,
  Mail, Menu, X, Sparkles, Code2, Database, BrainCircuit, Layers3,
  ExternalLink, MoveUpRight, Terminal, Monitor, Palette, GraduationCap,
  Send, CheckCircle2
} from 'lucide-react'

const projects = [
  {
    number: '01',
    name: 'Reflecto',
    type: 'AI-POWERED SMART MIRROR',
    description: 'A software-based smart mirror experience that brings useful AI features into one calm, personal interface.',
    tags: ['React', 'FastAPI', 'MongoDB', 'AI / ML'],
    theme: 'reflecto',
    featured: true,
    link: 'https://aireflecto.netlify.app/',
    note: 'Face recognition · Skin analysis · Voice assistant · Gesture controls',
  },
  {
    number: '02',
    name: 'Pearl Promise',
    type: 'SKINCARE E-COMMERCE',
    description: 'A beauty-focused shopping experience designed around a polished product catalogue and a soft, premium visual identity.',
    tags: ['React', 'Tailwind CSS', 'FastAPI', 'MongoDB'],
    theme: 'pearl',
    featured: true,
    link: 'https://pearl-promise.vercel.app',
    note: 'Product discovery · Shopping experience · Responsive UI',
  },
  {
    number: '03',
    name: 'OmniFood',
    type: 'FRONTEND MINI PROJECT',
    description: 'A responsive healthy-food delivery landing page built to practise layout, page sections, navigation and scroll effects.',
    tags: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
    theme: 'omni',
    featured: false,
    link: 'https://jade-wisp-c484c9.netlify.app',
    note: 'Responsive layout · Smooth scrolling · Scroll animations',
  },
]

const skillGroups = {
  'Frontend': [
    ['HTML5', 'Semantic page structure'], ['CSS3', 'Responsive styling'], ['JavaScript', 'Interactive experiences'],
    ['React', 'Component-based UI'], ['Tailwind CSS', 'Utility-first styling'], ['Vite', 'Modern frontend tooling'],
  ],
  'Backend': [
    ['Python', 'Application logic'], ['FastAPI', 'REST API development'], ['MongoDB', 'Document database'],
    ['REST APIs', 'Frontend / backend integration'], ['JWT', 'Authentication concepts'], ['Git & GitHub', 'Version control'],
  ],
  'AI & Tools': [
    ['AI / ML', 'Applied project integrations'], ['OpenCV', 'Computer vision tooling'], ['MediaPipe', 'Gesture pipeline'],
    ['VS Code', 'Development environment'], ['Figma', 'UI inspiration & planning'], ['Postman', 'API testing'],
  ],
}

const stripWords = ['DESIGN MINDED', 'CODE CURIOUS', 'AI ENTHUSIAST', 'ALWAYS EVOLVING']

// Inline style that staggers a scroll-reveal animation by `seconds`
const delay = (seconds) => ({ '--d': `${seconds}s` })

function ProjectVisual({ theme }) {
  if (theme === 'reflecto') return (
    <div className="visual visual-reflecto">
      <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
      <div className="mirror-panel">
        <div className="mirror-top"><span className="mini-dot" /> REFLECTO <span className="mirror-time">09:41</span></div>
        <div className="mirror-greeting">Good morning<span>.</span></div>
        <div className="mirror-sub">When reflection meets intelligence.</div>
        <div className="mirror-widgets">
          <div className="mirror-widget"><Sparkles size={15}/><span>Skin insights</span><b>Ready</b></div>
          <div className="mirror-widget"><BrainCircuit size={15}/><span>AI assistant</span><b>Online</b></div>
        </div>
        <div className="mirror-bottom"><span>● SYSTEM ACTIVE</span><span>PERSONAL SPACE / 01</span></div>
      </div>
      <div className="float-chip chip-a"><Sparkles size={13}/> Intelligent by design</div>
      <div className="float-chip chip-b"><span className="pulse" /> Your space, personalized</div>
    </div>
  )
  if (theme === 'pearl') return (
    <div className="visual visual-pearl">
      <div className="pearl-browser"><div className="browser-dots"><i/><i/><i/></div><span>PEARL PROMISE</span><span className="pearl-menu">SHOP&nbsp;&nbsp; ABOUT&nbsp;&nbsp; ♡</span></div>
      <div className="pearl-content">
        <div className="pearl-copy"><span className="eyebrow">YOUR SKIN, YOUR RITUAL</span><h3>Care that<br/><em>feels like you.</em></h3><p>Thoughtful skincare. Everyday glow.</p><span className="pearl-cta">EXPLORE THE COLLECTION ↗</span></div>
        <div className="bottle-scene"><div className="sun-disc"/><div className="bottle bottle-one"><span>pearl<br/>promise</span></div><div className="bottle bottle-two"><span>daily<br/>glow</span></div><div className="bottle-shadow"/></div>
      </div>
      <div className="pearl-caption">A LITTLE CARE GOES A LONG WAY <span>✳</span></div>
    </div>
  )
  return (
    <div className="visual visual-omni">
      <div className="omni-nav"><span className="omni-logo">omnifood<span>.</span></span><span>FOOD DELIVERY&nbsp;&nbsp;&nbsp; HOW IT WORKS&nbsp;&nbsp;&nbsp; CITIES</span><b>I'm hungry ↗</b></div>
      <div className="omni-hero"><div><span className="eyebrow">FRESH. FAST. FEEL-GOOD.</span><h3>Good food.<br/><em>Good mood.</em></h3><p>Healthy meals delivered to your door.</p><span className="omni-button">Explore meals ↗</span></div><div className="food-circle"><img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=85" alt="Fresh healthy meal"/></div></div>
      <div className="omni-footer"><span>FRESH INGREDIENTS</span><span>MADE WITH HTML & CSS</span></div>
    </div>
  )
}

function App() {
  const [activeSkill, setActiveSkill] = useState('Frontend')
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const email = 'gana2007shree@gmail.com'
  const heroRef = useRef(null)

  // Fade elements marked with data-reveal in as they scroll into view
  useEffect(() => {
    const items = document.querySelectorAll('[data-reveal]')
    const show = (el) => el.setAttribute('data-shown', '')
    if (!('IntersectionObserver' in window)) { items.forEach(show); return }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { show(entry.target); observer.unobserve(entry.target) }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Hero artwork drifts slightly with the mouse (desktop only)
  useEffect(() => {
    const hero = heroRef.current
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!hero || !finePointer || reduceMotion) return
    let frame = 0
    const onMove = (e) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const r = hero.getBoundingClientRect()
        hero.style.setProperty('--px', (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3))
        hero.style.setProperty('--py', (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3))
      })
    }
    const onLeave = () => {
      cancelAnimationFrame(frame)
      hero.style.setProperty('--px', '0')
      hero.style.setProperty('--py', '0')
    }
    hero.addEventListener('pointermove', onMove)
    hero.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      hero.removeEventListener('pointermove', onMove)
      hero.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  const closeMenu = () => setMenuOpen(false)
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <div className="site-shell">
      <div className="scroll-progress" aria-hidden="true" />
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Ganashree home"><span className="brand-mark">G<span>.</span></span><span className="brand-name">Ganashree<span> / PORTFOLIO</span></span></a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
          <a href="#about" onClick={closeMenu}>About</a><a href="#skills" onClick={closeMenu}>Skills</a><a href="#projects" onClick={closeMenu}>Projects</a><a href="#journey" onClick={closeMenu}>Journey</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={14}/></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home" ref={heroRef}>
          <div className="hero-copy">
            <div className="availability"><span className="pulse" /> OPEN TO OPPORTUNITIES <span className="availability-line"/></div>
            <p className="hero-kicker">HELLO, WORLD! I'M</p>
            <h1>Ganashree<span className="hero-period">.</span><br/><span className="hero-outline">I build</span> <span className="hero-gradient">digital</span><br/><span className="hero-outline">experiences.</span></h1>
            <p className="hero-description">A developer in the making, turning ideas into thoughtful web experiences — with a curiosity for AI and a love for clean design.</p>
            <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a><a className="button button-quiet" href="#about">A little about me <ArrowDown size={16}/></a></div>
            <div className="hero-socials"><span>FIND ME HERE</span><a href="https://github.com/Ganashree3107" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a><a href="https://www.linkedin.com/in/gana-shree-7b46322b3/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a><a href={`mailto:${email}`} aria-label="Email"><Mail size={17}/></a><span className="social-rule"/></div>
          </div>
          <div className="hero-art">
            <div className="art-grid"/>
            <div className="portrait-frame"><div className="portrait-glow"/><div className="portrait-content"><div className="portrait-monogram">G<span>.</span></div><div className="portrait-caption">CURIOUS MIND.<br/>BUILDER'S HEART.</div></div><div className="frame-corner corner-tl"/><div className="frame-corner corner-br"/></div>
            <div className="orbit-label orbit-label-top"><Sparkles size={14}/> DESIGN × CODE</div>
            <div className="orbit-label orbit-label-bottom"><Code2 size={14}/> ALWAYS LEARNING</div>
            <div className="art-index">FIG. 001 <span>—</span> THE CREATIVE DEVELOPER</div>
          </div>
          <a className="scroll-cue" href="#about"><span className="scroll-line"/> SCROLL TO EXPLORE <ArrowDown size={13}/></a>
          <div className="hero-side-note">PORTFOLIO / 2026</div>
        </section>

        <section className="intro-strip" aria-label="Design minded, code curious, AI enthusiast, always evolving">
          {/* Words repeat 6 times; the track scrolls by half its width so the loop is seamless */}
          <div className="strip-inner" aria-hidden="true">{[0, 1, 2, 3, 4, 5].map(round => stripWords.map(word => <span className="strip-item" key={`${round}-${word}`}>{word}<i>✳</i></span>))}</div>
        </section>

        <section className="section-wrap section-block about-section" id="about">
          <div className="section-label" data-reveal><span>01</span> / THE PERSON BEHIND THE PIXELS</div>
          <div className="about-grid"><div data-reveal><h2>Curiosity first.<br/><span className="muted-heading">Possibility always.</span></h2></div><div className="about-copy" data-reveal style={delay(0.15)}><p className="lead">I'm a BCA student exploring the intersection of <span className="text-lilac">web development</span>, thoughtful user experiences, and intelligent technology.</p><p>I enjoy taking an idea from a rough concept to something people can actually use. Each project is a chance to learn deeper, solve a real problem, and make the details feel intentional.</p><a className="text-link" href="#projects">A look at what I build <ArrowRight size={16}/></a></div></div>
          <div className="about-facts"><div data-reveal><span className="fact-icon"><Code2 size={17}/></span><b>Build with purpose</b><p>Useful, responsive interfaces</p></div><div data-reveal style={delay(0.12)}><span className="fact-icon"><BrainCircuit size={17}/></span><b>Explore what’s next</b><p>AI, computer vision & more</p></div><div data-reveal style={delay(0.24)}><span className="fact-icon"><Layers3 size={17}/></span><b>Learn by making</b><p>Projects over just tutorials</p></div></div>
        </section>

        <section className="section-wrap section-block skills-section" id="skills">
          <div className="section-label" data-reveal><span>02</span> / MY TOOLKIT</div>
          <div className="section-heading-row" data-reveal><h2>Tools of the <span className="muted-heading">trade.</span></h2><p>A growing toolkit, built one project <br/>and one problem at a time.</p></div>
          <div className="skills-panel" data-reveal style={delay(0.1)}><div className="skill-tabs">{Object.keys(skillGroups).map(group => <button key={group} className={activeSkill === group ? 'skill-tab active' : 'skill-tab'} onClick={() => setActiveSkill(group)}>{group}<ArrowUpRight size={14}/></button>)}</div><div className="skill-grid" key={activeSkill}>{skillGroups[activeSkill].map(([name, desc], i) => <div className="skill-item" key={name} style={{ '--i': i }}><span className="skill-number">0{i+1}</span><div><b>{name}</b><p>{desc}</p></div><ArrowUpRight className="skill-arrow" size={15}/></div>)}</div><div className="skills-foot"><span><span className="pulse"/> CURRENTLY LEARNING & BUILDING</span><span>MORE TO COME ↗</span></div></div>
        </section>

        <section className="section-wrap section-block projects-section" id="projects">
          <div className="section-label" data-reveal><span>03</span> / SELECTED WORK</div>
          <div className="section-heading-row projects-heading" data-reveal><h2>Made with intent.<br/><span className="muted-heading">Built to explore.</span></h2><p>Three projects. Different challenges. <br/>One continuous learning journey.</p></div>
          <div className="project-list">{projects.map((project, index) => <article className={`project-card ${project.featured ? 'project-featured' : 'project-small'}`} key={project.number} data-reveal style={delay(index === 2 ? 0.14 : 0)}>
            <div className="project-visual-wrap"><ProjectVisual theme={project.theme}/><span className="project-count">{project.number} / 03</span></div>
            <div className="project-info"><div className="project-type">{project.type}</div><div className="project-title-row"><h3>{project.name}<span>.</span></h3>{project.link
              ? <a className="project-open" href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} live site`} title="View live site"><ArrowUpRight size={19}/></a>
              : <a className="project-open" href="#contact" aria-label={`Ask about ${project.name}`}><ArrowUpRight size={19}/></a>}</div><p>{project.description}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-note"><span className="note-star">✳</span>{project.note}</div></div>
          </article>)}</div>
        </section>

        <section className="section-wrap section-block journey-section" id="journey">
          <div className="section-label" data-reveal><span>04</span> / THE JOURNEY SO FAR</div>
          <div className="journey-grid"><div data-reveal><h2>Still learning.<br/><span className="muted-heading">Never standing still.</span></h2><p className="journey-intro">The goal isn't to know everything. It's to keep asking better questions and building better things.</p></div><div className="timeline" data-reveal="line"><div className="timeline-item" data-reveal style={delay(0.1)}><span className="timeline-dot"/><div className="timeline-date">CURRENTLY</div><h3>Bachelor of Computer Applications</h3><p>Building a foundation in computer science while exploring web development, databases, networking and AI.</p><span className="timeline-chip"><GraduationCap size={13}/> BCA STUDENT</span></div><div className="timeline-item" data-reveal style={delay(0.25)}><span className="timeline-dot"/><div className="timeline-date">ALONG THE WAY</div><h3>Learning through projects</h3><p>Applying new concepts through Reflecto, Pearl Promise and hands-on frontend experiments.</p><span className="timeline-chip"><Terminal size={13}/> BUILD · TEST · LEARN</span></div><div className="timeline-item" data-reveal style={delay(0.4)}><span className="timeline-dot"/><div className="timeline-date">NEXT CHAPTER</div><h3>Growing into a full-stack developer</h3><p>Deepening my skills in modern frontend development, backend APIs and practical AI integration.</p><span className="timeline-chip"><Sparkles size={13}/> IN PROGRESS</span></div></div></div>
        </section>

        <section className="contact-section" id="contact"><div className="contact-orb"/><div className="section-wrap contact-inner"><div className="section-label" data-reveal><span>05</span> / YOUR TURN</div><p className="contact-kicker" data-reveal style={delay(0.05)}>HAVE A PROJECT OR AN IDEA?</p><h2 data-reveal style={delay(0.12)}>Let's make<br/>something <span>meaningful.</span></h2><p className="contact-copy" data-reveal style={delay(0.22)}>I'm always happy to connect, exchange ideas, and explore opportunities to build something good.</p><div className="contact-actions" data-reveal style={delay(0.32)}><button className="button button-primary" onClick={copyEmail}>{copied ? <CheckCircle2 size={17}/> : <Mail size={17}/>} {copied ? 'Email copied!' : 'Copy my email'} <ArrowUpRight size={16}/></button><a className="button button-quiet" href="https://github.com/Ganashree3107" target="_blank" rel="noreferrer"><Github size={17}/> Find me on GitHub <ArrowUpRight size={16}/></a></div><div className="contact-bottom"><span>GOOD THINGS START WITH A HELLO.</span><span>Ganashree © 2026</span></div></div></section>
      </main>
      <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">G<span>.</span></span><span className="brand-name">Ganashree<span> / PORTFOLIO</span></span></a><span>DESIGNED WITH CURIOSITY <span className="footer-heart">✳</span> BUILT WITH CODE</span><a href="#home" className="back-top">BACK TO TOP <ArrowUpRight size={14}/></a></footer>
    </div>
  )
}

export default App
