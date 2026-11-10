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
  line: "I worked with credit risk at a bank. Now I am learning to build the models that read it.",
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
  linkedin: "",
  /** Put the PDF in /public and set this to "/cv.pdf". Empty = not shown. */
  cv: "",
  portrait: "/portrait.jpg",
  portraitAlt:
    "Qodiriy Aqlliev in a black leather jacket, looking back at the camera on a beach at night, with a dark sky and white surf behind him.",
} as const;

export const background = {
  heading: "From the bank floor to the model.",
  paragraphs: [
    "At Ipoteka Bank in Tashkent I handled overdue loans, which showed me what a default looks like before it becomes a row in a dataset.",
    "That taught me to start from the person on the other side of the data. It is how I want to build AI: models that a bank, a manager, or a customer can actually use.",
  ],
} as const;

/** Work history, newest first. Add `dates` (e.g. "2023 – 2024") when you have them. */
export const experience = [
  {
    id: "ipoteka",
    role: "Overdue Collection Department",
    org: "Ipoteka Bank",
    place: "Tashkent",
    dates: "",
    points: [
      "Worked a portfolio of overdue loans: tracked delinquent accounts and prioritised them by risk and amount.",
      "Contacted borrowers to agree on repayment plans, and recorded every outcome.",
    ],
  },
  {
    id: "river",
    role: "Receptionist",
    org: "River Hotel",
    place: "Tashkent",
    dates: "",
    points: ["Handled check-ins, bookings and guest requests, often across languages."],
  },
  {
    id: "pizzeria",
    role: "Shift Manager",
    org: "Pizzeria",
    place: "Tashkent",
    dates: "",
    points: ["Ran shifts end to end: staff, rush-hour orders, cash and closing."],
  },
] as const;

export const education = [
  {
    id: "mba",
    level: "MBA, in progress",
    program: "Big Data & AI",
    school: "Sejong University, Seoul",
  },
  {
    id: "bachelor",
    level: "Bachelor",
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
