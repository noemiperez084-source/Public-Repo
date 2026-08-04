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
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

function Section({
  emoji,
  title,
  children,
  delay = 0,
}: {
  emoji: string;
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`section-block ${inView ? "reveal" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="section-title">
        <span className="section-emoji">{emoji}</span>
        {title}
      </h3>
      {children}
    </div>
  );
}

function ChipList({ items }: { items: { emoji: string; label: string }[] }) {
  return (
    <ul className="chip-list">
      {items.map((item, i) => (
        <li key={i} className="chip" style={{ animationDelay: `${i * 60}ms` }}>
          <span className="chip-emoji">{item.emoji}</span>
          <span className="chip-label">{item.label}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ProfileCard({ profile }: { profile: Profile }) {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      id={`person-${profile.id}`}
      className={`person-card ${inView ? "reveal" : ""}`}
    >
      <div className="card-glow" aria-hidden="true" />

      <div className="avatar-zone">
        <div className="avatar-ring">
          <div className="avatar-icon">{profile.emoji}</div>
        </div>
        <div className="avatar-choice-badge">⚡ {profile.avatarStyle}</div>
      </div>

      <div className="person-details">
        <h2 className="person-name">
          {profile.name} <span className="username">{profile.handle}</span>
        </h2>

        <div className="username-list">
          {profile.usernames.map((u) => (
            <span key={u.label} className="username-badge">
              <span className="badge-label">{u.label}</span>
              <span className="badge-value">{u.value}</span>
            </span>
          ))}
        </div>

        <Section emoji="🌱" title="aspirations" delay={80}>
          <p className="aspiration-text">{profile.aspiration}</p>
        </Section>

        <Section emoji="🎯" title="interests" delay={140}>
          <ChipList items={profile.interests} />
        </Section>

        <Section emoji="😶‍🌫️" title="hobby" delay={200}>
          <ChipList items={profile.hobbies} />
        </Section>

        <Section emoji="🙇🤸" title="work experience" delay={260}>
          <ChipList items={profile.workExperience} />
        </Section>

        <Section emoji="🔊" title="high school clubs" delay={320}>
          <ChipList items={profile.clubs} />
        </Section>

        {profile.pets.length > 0 && (
          <Section emoji="🐾" title="pets" delay={380}>
            <div className="pets-collection">
              {profile.pets.map((pet, i) => (
                <div key={i} className="pet-card">
                  <div className="pet-img">{pet.emoji}</div>
                  <div className="pet-info">
                    <div className="pet-name">{pet.name}</div>
                    <div className="pet-type">{pet.type}</div>
                    <div className="pet-color">{pet.color}</div>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        )}

        <div className="footer-row">
          <Section emoji="🛠️" title="tiny toolkit" delay={440}>
            <p className="toolkit-text">{profile.toolkit}</p>
          </Section>
          <Section emoji="🌍" title="languages" delay={500}>
            <p className="toolkit-text">{profile.languages.join(" · ")}</p>
          </Section>
        </div>
      </div>
    </section>
  );
}
