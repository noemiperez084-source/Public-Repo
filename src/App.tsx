import { profiles } from "./data";
import ProfileCard from "./ProfileCard";

export default function App() {
  return (
    <>
      <header className="page-header">
        <div className="header-orbs" aria-hidden="true">
          <span className="orb orb-1" />
          <span className="orb orb-2" />
          <span className="orb orb-3" />
        </div>
        <div className="header-content">
          <h1 className="header-title">
            <span className="title-emoji">🌟</span>
            our digital identity garden
          </h1>
          <p className="subhead">
            clone, paste &amp; fill — each block tells a story. add hobbies,
            dreams, quirks, and icons that represent YOU.
          </p>
          <div className="collab-note">
            <span className="note-icon">💡</span>
            <p>
              <strong>collaboration workflow:</strong> each teammate copies an
              existing section (hobbies, interest, etc.), pastes it below, and
              fills data with a friend's info. take turns! share screen, work
              live.
            </p>
          </div>
        </div>
      </header>

      <main className="container">
        {profiles.map((p) => (
          <ProfileCard key={p.id} profile={p} />
        ))}
      </main>

      <footer className="page-footer">
        <p>grown with care · 🌼 🌷 🌹</p>
      </footer>
    </>
  );
}
