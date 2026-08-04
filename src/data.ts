export type Profile = {
  id: string;
  name: string;
  handle: string;
  emoji: string;
  avatarStyle: string;
  usernames: { label: string; value: string }[];
  aspiration: string;
  interests: { emoji: string; label: string }[];
  hobbies: { emoji: string; label: string }[];
  workExperience: { emoji: string; label: string }[];
  clubs: { emoji: string; label: string }[];
  pets: { emoji: string; name: string; type: string; color: string }[];
  languages: string[];
  toolkit: string;
};

export const profiles: Profile[] = [
  {
    id: "mayra",
    name: "Mayra",
    handle: "@creative_mayra",
    emoji: "🧟",
    avatarStyle: "icon (animated)",
    usernames: [
      { label: "discord", value: "Ayri_art" },
      { label: "github", value: "mayra-builds" },
      { label: "ig", value: "@mayra.draws" },
    ],
    aspiration:
      "Learn a little bit of everything in this life — and if I don't, invent it ✨ and enjoy life as my grandmi taught me 💛",
    interests: [
      { emoji: "🙈", label: "Fashion designer" },
      { emoji: "🛹", label: "Skateboard" },
      { emoji: "📸", label: "Photograph" },
    ],
    hobbies: [
      { emoji: "⚽", label: "Soccer" },
      { emoji: "🎮", label: "Video games" },
      { emoji: "🧑‍💻", label: "Editor (photos or videos)" },
    ],
    workExperience: [
      { emoji: "🤱", label: "Babysitter" },
      { emoji: "💸", label: "Cashier" },
    ],
    clubs: [
      { emoji: "📸", label: "Photography" },
      { emoji: "🎭", label: "Theater" },
      { emoji: "💃", label: "Dance" },
      { emoji: "🏸", label: "Badminton" },
    ],
    pets: [
      { emoji: "🐢", name: "Princess", type: "Red-eared slider", color: "green" },
      { emoji: "🐢", name: "Dusky", type: "Red-eared slider", color: "green" },
    ],
    languages: ["English", "Spanish"],
    toolkit: "Figma · Canva · HTML/CSS · Procreate",
  },
  {
    id: "teammate",
    name: "Your Name",
    handle: "@your_handle",
    emoji: "🌱",
    avatarStyle: "icon (animated)",
    usernames: [
      { label: "discord", value: "your_discord" },
      { label: "github", value: "your_github" },
      { label: "ig", value: "@your_handle" },
    ],
    aspiration: "Add your aspirations here — what do you want to learn, build, or become?",
    interests: [
      { emoji: "🎨", label: "Digital painting" },
      { emoji: "📸", label: "Photograph" },
      { emoji: "⚽", label: "Soccer" },
      { emoji: "👾", label: "Codes" },
    ],
    hobbies: [
      { emoji: "🕹️", label: "Videogames" },
      { emoji: "🎨", label: "Draw or paint" },
      { emoji: "🎭", label: "Theater" },
      { emoji: "🧑‍🍳", label: "Cook" },
      { emoji: "📚", label: "Books" },
    ],
    workExperience: [{ emoji: "✨", label: "Add your experience" }],
    clubs: [{ emoji: "✨", label: "Add your clubs" }],
    pets: [],
    languages: ["English"],
    toolkit: "Add your tools",
  },
];
