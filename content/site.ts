/**
 * Everything a visitor reads lives in this file.
 * Adjust a sentence or swap the portrait path and the layout picks it up.
 *
 * Only put things here that are true today. Empty strings are hidden.
 */

export const site = {
  given: "Qodiriy",
  family: "Aqlliev",
  name: "Qodiriy Aqlliev",
  eyebrow: "Seoul / MBA student, Big Data & AI",
  line: "I interned in overdue loan collection at a bank. Now I am learning to build the models that read credit risk.",
  study: "MBA, Big Data & AI · Sejong University",
  lookingFor: "I am looking for a junior AI or data role, or an internship, in Seoul or remote.",
  email: "aqlliev@outlook.com",
  github: "https://github.com/aqlliev",
  githubLabel: "github.com/aqlliev",
  telegram: "https://t.me/askqodir",
  telegramLabel: "t.me/askqodir",
  x: "https://x.com/aqlliev",
  xLabel: "x.com/aqlliev",
  /** Paste the full LinkedIn URL. Empty = not shown. */
  linkedin: "https://www.linkedin.com/in/aqlliev",
  /** Put the PDF in /public and set this to "/cv.pdf". Empty = not shown. */
  cv: "/cv.pdf",
  portrait: "/portrait.jpg",
  portraitAlt:
    "Qodiriy Aqlliev in a black leather jacket, looking back at the camera on a beach at night, with a dark sky and white surf behind him.",
} as const;

export const background = {
  heading: "From the bank floor to the model.",
  paragraphs: [
    "During an internship at Ipoteka Bank in Tashkent I worked on overdue loans, which showed me what a default looks like before it becomes a row in a dataset.",
    "That taught me to start from the person on the other side of the data. It is how I want to build AI: models that a bank, a manager, or a customer can actually use.",
  ],
} as const;

/** The jobs shown in full. Empty `dates` are hidden. */
export const experience = [
  {
    id: "ipoteka",
    role: "Intern, Overdue Collection Department",
    org: "Ipoteka Bank",
    place: "Tashkent",
    dates: "May – Jul 2023",
    points: [
      "Tracked overdue loan accounts and helped prioritise them by risk and amount.",
      "Contacted borrowers about repayment plans and recorded the outcomes.",
    ],
  },
  {
    id: "uzschool",
    role: "Sales Manager",
    org: "Uzschool",
    place: "Tashkent",
    dates: "Mar – May 2024",
    points: [
      "Sold online English courses, generating about 50 million UZS in revenue within 10 days.",
    ],
  },
] as const;

/** Other jobs, one line each, newest first. The full list is in the CV. */
export const otherWork = [
  { id: "dominos", role: "Pizza Maker Assistant", org: "Domino’s Pizza", dates: "Jun – Aug 2025" },
  { id: "bellissimo", role: "Pizza Maker, then Assistant to the Shift Manager", org: "Bellissimo Pizza", dates: "Feb – Jun 2025" },
  { id: "river", role: "Receptionist", org: "River Hotel", dates: "Nov – Dec 2024" },
  { id: "alisher", role: "Receptionist", org: "Alisher Hotel", dates: "" },
] as const;

export const education = [
  {
    id: "mba",
    level: "MBA · Sep 2025 – Aug 2027 (expected)",
    program: "Big Data & AI",
    school: "Sejong University, Seoul",
  },
  {
    id: "bachelor",
    level: "Bachelor · graduated Jun 2025",
    program: "Economic Security",
    school: "Tashkent State University of Economics",
  },
] as const;

export const learning = {
  heading: "What I am learning now.",
  intro:
    "I do not have finished AI projects to show yet. This is where I am today, stated plainly.",
  rows: [
    {
      label: "Tools so far",
      value: "Python, SQL, Excel",
      meta: "Excel at the level of formulas and pivot tables.",
    },
    {
      label: "In the MBA",
      value: "Data analysis for decisions",
      meta: "Structured and unstructured data, case work, and carrying a result into a management decision.",
    },
    {
      label: "Next",
      value: "A first project in public",
      meta: "It goes on GitHub, and on this page, when it is finished.",
    },
  ],
} as const;
