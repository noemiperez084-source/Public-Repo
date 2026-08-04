export type Skill = { emoji: string; label: string; level: number };
export type Project = { emoji: string; title: string; desc: string; tag: string };
export type Contact = { emoji: string; label: string; value: string; href: string };

export type Profile = {
  name: string;
  tagline: string;
  roles: string[];
  avatar: { src: string; alt: string };
  about: string;
  skills: Skill[];
  projects: Project[];
  contacts: Contact[];
};

export const profile: Profile = {
  name: "Mayra Guzman",
  tagline: "Fashion Designer | Photographer | Photo & Video Editor",
  roles: ["Fashion Designer", "Photographer", "Content Creator"],
  avatar: {
    src: "/images/1F938409-2DC1-417F-91E4-B2D9ECB8FA5Amayra.jpg",
    alt: "Photo of Mayra",
  },
  about:
    "I am a creative person passionate about fashion design, photography, and digital editing. I enjoy learning new skills, creating unique projects, and expressing my ideas through art and technology.",
  skills: [
    { emoji: "🎨", label: "Adobe Photoshop", level: 90 },
    { emoji: "📸", label: "Photography", level: 88 },
    { emoji: "🎥", label: "Video Editing", level: 82 },
    { emoji: "👗", label: "Fashion Design", level: 95 },
    { emoji: "💻", label: "HTML & CSS", level: 70 },
  ],
  projects: [
    {
      emoji: "📷",
      title: "Photography Portfolio",
      desc: "A curated collection of portrait, street, and nature photography.",
      tag: "Photography",
    },
    {
      emoji: "👗",
      title: "Fashion Design Collection",
      desc: "Original garment designs from sketch to finished piece.",
      tag: "Fashion",
    },
    {
      emoji: "🎥",
      title: "Video Editing Projects",
      desc: "Short-form edits, reels, and creative video compositions.",
      tag: "Video",
    },
    {
      emoji: "💻",
      title: "Personal Website",
      desc: "A hand-coded portfolio site built with HTML and CSS.",
      tag: "Web",
    },
  ],
  contacts: [
    {
      emoji: "✉️",
      label: "Email",
      value: "mayra@email.com",
      href: "mailto:mayra@email.com",
    },
    {
      emoji: "🐙",
      label: "GitHub",
      value: "github.com/mayra-builds",
      href: "https://github.com/mayra-builds",
    },
    {
      emoji: "📸",
      label: "Instagram",
      value: "@mayra.draws",
      href: "https://instagram.com/mayra.draws",
    },
  ],
};
