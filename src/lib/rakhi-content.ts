/**
 * All user-facing copy and theme definitions live here so the experience
 * can be re-worded or re-themed without touching component logic.
 */

export const copy = {
  opening: {
    kicker: "रक्षा बंधन",
    line1: "For the girl who has been annoying me since childhood…",
    line2: "…and somehow became one of the most important people in my life.",
    cta: "Open Your Rakhi",
    hint: "A little gift that happens to live on the web",
  },
  personalize: {
    title: "Make it hers",
    subtitle: "Some bonds don't need explaining. This one just needs a name.",
    sisterLabel: "Her name",
    sisterPlaceholder: "Priya",
    brotherLabel: "Your name",
    brotherPlaceholder: "Vivek",
    photoLabel: "A photo of you two (optional)",
    photoHelp: "JPG or PNG · stays on this device",
    messageLabel: "Your message",
    messagePlaceholder: "Write something from the heart…",
    prompts: [
      "A childhood memory…",
      "Something you've always wanted to tell her…",
      "The one thing she does that you secretly love…",
    ],
    next: "Choose a Rakhi",
    back: "Back",
  },
  designs: {
    title: "Pick her Rakhi",
    subtitle: "Five threads. Choose the one that feels like her.",
    next: "Tie the Rakhi",
  },
  assembling: [
    "Preparing your Rakhi…",
    "Adding your memories…",
    "Wrapping it with a little love…",
    "Almost ready…",
  ],
  card: {
    greeting: "Happy Raksha Bandhan",
    signature: "With love,",
    fallbackMessage:
      "A thread tied with love, memories, and a little bit of mischief. No matter how old we get, you'll always be my sister.",
    share: "Share this Rakhi",
    copy: "Copy link",
    copied: "Link copied",
    download: "Save card",
    restart: "Make another",
  },
} as const;

export type ThemeId = "royal" | "floral" | "heritage" | "minimal" | "festive";

export type RakhiTheme = {
  id: ThemeId;
  index: string;
  name: string;
  tagline: string;
  /** CSS custom properties applied to the themed surface. */
  vars: Record<string, string>;
};

export const themes: RakhiTheme[] = [
  {
    id: "royal",
    index: "01",
    name: "Royal",
    tagline: "Deep red, antique gold, ornamental detail.",
    vars: {
      "--t-paper": "var(--parchment)",
      "--t-accent": "var(--vermillion)",
      "--t-accent-2": "var(--antique-gold)",
      "--t-ink": "var(--ink)",
      "--t-wash":
        "radial-gradient(120% 90% at 50% 0%, color-mix(in oklab, var(--vermillion) 9%, transparent), transparent 70%)",
    },
  },
  {
    id: "floral",
    index: "02",
    name: "Floral",
    tagline: "Jasmine, marigold and rose, softly gathered.",
    vars: {
      "--t-paper": "var(--ivory)",
      "--t-accent": "var(--saffron)",
      "--t-accent-2": "var(--rose)",
      "--t-ink": "var(--ink)",
      "--t-wash":
        "radial-gradient(110% 80% at 80% 10%, color-mix(in oklab, var(--saffron) 14%, transparent), transparent 65%)",
    },
  },
  {
    id: "heritage",
    index: "03",
    name: "Heritage",
    tagline: "Rajasthani textile lines and block-print order.",
    vars: {
      "--t-paper": "var(--parchment)",
      "--t-accent": "var(--forest)",
      "--t-accent-2": "var(--burnt)",
      "--t-ink": "var(--ink)",
      "--t-wash":
        "radial-gradient(120% 90% at 20% 100%, color-mix(in oklab, var(--forest) 10%, transparent), transparent 70%)",
    },
  },
  {
    id: "minimal",
    index: "04",
    name: "Minimal",
    tagline: "One thread, ivory air, a whisper of gold.",
    vars: {
      "--t-paper": "var(--ivory)",
      "--t-accent": "var(--antique-gold)",
      "--t-accent-2": "var(--burnt)",
      "--t-ink": "var(--ink)",
      "--t-wash": "none",
    },
  },
  {
    id: "festive",
    index: "05",
    name: "Festive",
    tagline: "Rangoli geometry with a lit brass diya.",
    vars: {
      "--t-paper": "var(--parchment)",
      "--t-accent": "var(--burnt)",
      "--t-accent-2": "var(--saffron)",
      "--t-ink": "var(--ink)",
      "--t-wash":
        "radial-gradient(90% 70% at 50% 100%, color-mix(in oklab, var(--saffron) 18%, transparent), transparent 70%)",
    },
  },
];

export const getTheme = (id: ThemeId) =>
  themes.find((t) => t.id === id) ?? themes[0];
