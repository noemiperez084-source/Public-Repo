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
  skillsNote: string;
  interests: Project[];
  hobbies: Project[];
  contacts: Contact[];
};

export const profile: Profile = {
  name: "Mayra Guzman",
  tagline: "Fashion Designer | Photographer | Photo & Video Editor",
  roles: ["Fashion Designer", "Photographer", "Content Creator"],
  avatar: {
    src: "/images/mayra.jpg",
    alt: "Photo of Mayra",
  },
  about:
    "I am a creative person passionate about fashion design, photography, and digital editing. I enjoy learning new skills, creating unique projects, and expressing my ideas through art and technology. Thanks to Tech Teen Launchpad, I have consolidated my interest in technology.",
  skills: [
    { emoji: "🎨", label: "Adobe Photoshop", level: 90 },
    { emoji: "📸", label: "Photography", level: 88 },
    { emoji: "🎥", label: "Video Editing", level: 82 },
    { emoji: "👗", label: "Fashion Design", level: 95 },
    { emoji: "💻", label: "HTML & CSS", level: 70 },
  ],
  skillsNote:
    "Challenge: During this technical journey, I went from not knowing anything about code to mastering HTML & CSS to structure my ideas and projects.",
  interests: [
    {
      emoji: "📷",
      title: "Photography Portfolio",
      desc: "A curated collection of portrait, street, and nature photography.",
      tag: "Photography",
    },
    {
      emoji: "👗",
      title: "Fashion Design Collection",
      desc: "In HTML can help me to organize my sketches and CSS to style the layout, learning how to connect technology with fashion design.",
      tag: "Fashion",
    },
    {
      emoji: "🎭",
      title: "Filming",
      desc: "Creative video compositions and short-form film projects.",
      tag: "Video",
    },
    {
      emoji: "💻",
      title: "Personal Website",
      desc: "A hand-coded portfolio site built with HTML and CSS.",
      tag: "Web",
    },
  ],
  hobbies: [
    {
      emoji: "🛹",
      title: "Skateboard",
      desc: "Cruising streets and learning new tricks.",
      tag: "Active",
    },
    {
      emoji: "⚽",
      title: "Soccer",
      desc: "Team play and friendly matches.",
      tag: "Sport",
    },
    {
      emoji: "🎮",
      title: "Videogames",
      desc: "Exploring virtual worlds and competitive play.",
      tag: "Gaming",
    },
    {
      emoji: "🧶",
      title: "Handicrafts & Accessory Design",
      desc: "Handmade accessories and creative craft projects.",
      tag: "Craft",
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
