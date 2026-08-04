import ProfileCard from "./ProfileCard";
import { profile } from "./data";

export default function App() {
  return (
    <div className="page">
      <div className="bg-orbs" aria-hidden="true">
        <span className="orb orb-1" />
        <span className="orb orb-2" />
        <span className="orb orb-3" />
      </div>

      <main className="container">
        <ProfileCard profile={profile} />
      </main>

      <footer className="page-footer">
        <p>crafted with care · © {new Date().getFullYear()} Mayra Guzman</p>
      </footer>
    </div>
  );
}
