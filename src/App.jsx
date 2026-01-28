import { useEffect, useState } from 'react';

const projects = [
  {
    title: 'Exoplanet Habitability Prediction',
    subtitle: 'Machine Learning Final Project',
    blurb:
      'Trained 3 ML models on exoplanet features to predict habitability using NASA datasets.',
    tools: ['Python', 'Scikit-learn'],
    tags: ['Machine Learning'],
    link: 'https://drive.google.com/file/d/1uMiqaEKg50t_bIwCcTJgUw2v0uZEzGKf/view?usp=sharing'
  },
  {
    title: 'Hit the Charts',
    subtitle: 'UGA Hacks 10 Submission',
    blurb:
      'Data-driven dashboard exploring trends across charts and genres with interactive insights to help musicians see if their song will go viral.',
    tools: ['Python', 'React', 'MongoDB', 'scikit-learn', 'OpenAI Llama', 'VADER', 'APIs'],
    tags: ['Development', 'Machine Learning'],
    link: 'https://devpost.com/software/rockstar'
  },
  {
    title: 'Accessify',
    subtitle: 'UGA Hacks 9 Winner',
    blurb:
      'Adobe Express add-on that audits contrast ratio, WCAG compliance, and color-blind friendly palettes to help designers create accessible designs.',
    tools: ['Figma', 'HTML/CSS/JS', 'React', 'WCAG'],
    tags: ['Design', 'Development'],
    link: 'https://devpost.com/software/accessify-2p7nat'
  },
  {
    title: 'Fix A Plate',
    subtitle: 'Objects and Design Final Project',
    blurb:
      'Food management Andriod app that reduces waste with smart lists, recipe tracking, and pantry insights.',
    tools: ['Android Studio', 'Firebase', 'Figma'],
    tags: ['Design', 'Development'],
    link: 'https://sudhyakumar3.github.io/FixAPlateWebsite/'
  },
  {
    title: 'Indiya Candles',
    subtitle: 'Visual Design Final Project',
    blurb:
      'Full brand identity and packaging system inspired by Indian fragrances.',
    tools: ['Branding', 'Illustrator', 'Typography'],
    tags: ['Design'],
    link: 'https://drive.google.com/file/d/1iX1UPegpvF2tPTXHgq_8-YB5mLNxGwMS/view'
  },
  {
    title: 'Dietary Delights',
    subtitle: 'Software Development Final Project',
    blurb:
      'JavaFX recipe app tailored to dietary needs with ingredient and budget filtering.',
    tools: ['API', 'Java'],
    tags: ['Development'],
    link: 'https://github.com/Sudhyakumar/DietaryDelights'
  }
];

const tagIcon = '◎';

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition shadow-sm backdrop-blur ${
        scrolled ? 'border-line bg-[#f2dfe2]/95 shadow-soft' : 'border-transparent bg-[#f2dfe2]/80'
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div className="font-display text-lg font-semibold tracking-wide">Subhasini Udhyakumar</div>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-stone-600 md:flex" aria-label="Primary">
          <a className="hover:text-charcoal" href="#about">
            About
          </a>
          <a className="hover:text-charcoal" href="#projects">
            Projects
          </a>
          <a className="hover:text-charcoal" href="#contact">
            Contact
          </a>
        </nav>
        <button
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="h-0.5 w-6 rounded-full bg-charcoal" />
          <span className="h-0.5 w-6 rounded-full bg-charcoal" />
          <span className="h-0.5 w-6 rounded-full bg-charcoal" />
        </button>
      </div>
      <div className={`md:hidden ${open ? 'block' : 'hidden'} px-6 pb-4`}>
        <nav className="flex flex-col gap-3 text-sm font-semibold text-stone-600" aria-label="Mobile">
          {['about', 'projects', 'contact'].map((item) => (
            <a key={item} href={`#${item}`} onClick={() => setOpen(false)}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="intro" className="pt-20 pb-10">
      <div className="mx-auto w-full max-w-4xl px-6 text-center">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-taupe/30 bg-[#eddcd4] px-4 py-1 text-xs font-semibold text-[#6b4a3c]">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-taupe/30 text-[10px] text-[#5a3b2f]">
              ✦
            </span>
            UI/UX Designer + Developer
          </span>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl">
            Designing calm, clear digital experiences.
          </h1>
          <p className="mt-3 text-base text-stone-600">
            UI/UX designer and developer focused on accessible, human-centered products.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              className="rounded-full border border-charcoal bg-charcoal px-5 py-2 text-sm font-semibold text-cream transition hover:-translate-y-0.5"
              href="#projects"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-8">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="reveal">
          <div className="w-full md:w-2/3">
            <h2 className="font-display text-3xl">About Me</h2>
            <p className="mt-3 text-stone-600">
              I'm a Computational Media student at Georgia Tech combining Computer Science with Visual Design.
              My concentrations are Interaction Design and AI. I gravitate toward projects that make complex
              systems feel delightful and inclusive.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['UI/UX', 'Web Development', 'Artificial Intelligence', 'Machine Learning', 'Accessibility'].map(
                (interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-taupe/40 bg-[#f1e5de] px-4 py-1 text-xs font-semibold text-[#6b4a3c]"
                  >
                    {interest}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, subtitle, blurb, tools, tags, link }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-card shadow-soft transition hover:-translate-y-1.5">
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-taupe">{subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-taupe/40 bg-[#f1e5de] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6b4a3c]"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-sm text-stone-600">{blurb}</p>
        <div className="mt-1 flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="inline-flex items-center gap-1 rounded-full border border-taupe/30 bg-[#eddcd4] px-3 py-1 text-xs font-semibold text-[#6b4a3c]"
            >
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-taupe/30 text-[10px] text-[#5a3b2f]">
                {tagIcon}
              </span>
              {tool}
            </span>
          ))}
        </div>
        <a
          className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-charcoal"
          href={link}
        >
          View details <span className="transition group-hover:translate-x-1">→</span>
        </a>
        {/* Replace the link above with your real URL */}
      </div>
    </article>
  );
}

function Projects() {
  const filters = ['All', 'Design', 'Development', 'Machine Learning'];
  const [activeFilter, setActiveFilter] = useState('All');

  const visibleProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-8">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="font-display text-3xl">Projects</h2>
        <p className="mt-2 max-w-2xl text-stone-600">
          Selected work across UI/UX, development, and machine learning.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] transition ${
                activeFilter === filter
                  ? 'border-charcoal bg-charcoal text-cream'
                  : 'border-taupe/40 bg-[#f1e5de] text-[#6b4a3c]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline({ items }) {
  return (
    <div className="mt-6 grid gap-4">
      {items.map((item) => (
        <div
          key={item.title}
          className="reveal grid gap-3 rounded-lg border border-line bg-white p-4 md:grid-cols-[120px_1fr]"
        >
          <span className="font-semibold text-taupe">{item.year}</span>
          <div>
            <h4 className="font-semibold">{item.title}</h4>
            <p className="text-sm text-stone-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-8">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="reveal rounded-xl border border-line bg-card p-8 shadow-soft">
          <h2 className="font-display text-3xl">Let’s build something meaningful.</h2>
          <p className="mt-2 text-stone-600">
            I would love to connect with you! Feel free to reach out to me via email, LinkedIn, or GitHub.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="rounded-full border border-charcoal bg-charcoal px-5 py-2 text-sm font-semibold text-cream" href="mailto:subha.udhyakumar@gmail.com">
              Email me
            </a>
            <a className="rounded-full border border-charcoal px-5 py-2 text-sm font-semibold" href="https://www.linkedin.com/in/subhasini-udhyakumar/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="rounded-full border border-charcoal px-5 py-2 text-sm font-semibold" href="https://github.com/Sudhyakumar3" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
          {/* Replace contact links above with your real links */}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-cream text-charcoal">
      <a className="sr-only focus:not-sr-only" href="#main">
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="py-10 text-center text-sm text-stone-600">
        © 2026 Subha. Crafted with care.
      </footer>
    </div>
  );
}
