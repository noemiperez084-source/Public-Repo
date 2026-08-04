import { useEffect, useRef, useState } from "react";
import type { Profile } from "./data";

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

function Section({
  id,
  emoji,
  title,
  delay = 0,
  children,
}: {
  id: string;
  emoji: string;
  title: string;
  delay?: number;
  children: React.ReactNode;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <section
      id={id}
      ref={ref}
      className={`section ${inView ? "reveal" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h2 className="section-title">
        <span className="section-emoji">{emoji}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function ProfileCard({ profile }: { profile: Profile }) {
  const hero = useInView<HTMLElement>();

  return (
    <article ref={hero.ref} className={`hero ${hero.inView ? "reveal" : ""}`}>
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-top">
        <div className="avatar-frame">
          <img
            src={profile.avatar.src}
            alt={profile.avatar.alt}
            className="avatar-img"
            loading="eager"
          />
          <div className="avatar-ring" aria-hidden="true" />
        </div>

        <div className="hero-intro">
          <h1 className="hero-name">
            <span className="hero-emoji">🌟</span> {profile.name}
          </h1>
          <p className="hero-tagline">{profile.tagline}</p>
          <div className="role-pills">
            {profile.roles.map((r) => (
              <span key={r} className="role-pill">
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Section id="about" emoji="🙋" title="About Me" delay={60}>
        <p className="about-text">{profile.about}</p>
      </Section>

      <Section id="skills" emoji="💻" title="Skills" delay={120}>
        <ul className="skill-list">
          {profile.skills.map((s, i) => (
            <li
              key={s.label}
              className="skill-row"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <span className="skill-emoji">{s.emoji}</span>
              <span className="skill-label">{s.label}</span>
              <div className="skill-bar-wrap">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${s.level}%` }}
                />
              </div>
              <span className="skill-pct">{s.level}%</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="projects" emoji="📁" title="Projects" delay={180}>
        <div className="project-grid">
          {profile.projects.map((p, i) => (
            <article
              key={p.title}
              className="project-card"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="project-emoji">{p.emoji}</div>
              <div className="project-body">
                <div className="project-head">
                  <h3 className="project-title">{p.title}</h3>
                  <span className="project-tag">{p.tag}</span>
                </div>
                <p className="project-desc">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="contact" emoji="📩" title="Contact" delay={240}>
        <div className="contact-grid">
          {profile.contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="contact-card"
            >
              <span className="contact-emoji">{c.emoji}</span>
              <span className="contact-info">
                <span className="contact-label">{c.label}</span>
                <span className="contact-value">{c.value}</span>
              </span>
            </a>
          ))}
        </div>
      </Section>
    </article>
  );
}
