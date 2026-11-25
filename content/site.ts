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
  line: "I interned in overdue loan collection at a bank. Now I am learning to build the models that read credit risk.",
  study: "MBA student, Big Data & AI · Sejong University, Seoul",
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
  paragraphs: [
    "During an internship at Ipoteka Bank in Tashkent I worked on overdue loans, which showed me what a default looks like before it becomes a row in a dataset.",
    "That taught me to start from the person on the other side of the data. It is how I want to build AI: models that a bank, a manager, or a customer can actually use.",
  ],
} as const;

/** Work shown on the site, newest first. The CV has the full list. */
export const experience = [
  { id: "dominos", role: "Pizza Maker Assistant", org: "Domino’s Pizza, Tashkent", dates: "Jun – Aug 2025", note: "" },
  {
    id: "bellissimo",
    role: "Pizza Maker, then Assistant to the Shift Manager",
    org: "Bellissimo Pizza, Tashkent",
    dates: "Feb – Jun 2025",
    note: "",
  },
  { id: "rever", role: "Receptionist", org: "Rever Hotel, Tashkent", dates: "Nov – Dec 2024", note: "" },
  {
    id: "uzschool",
    role: "Sales Manager",
    org: "Uzschool, Tashkent",
    dates: "Mar – May 2024",
    note: "Sold online English courses, generating about 50 million UZS in revenue within 10 days.",
  },
  {
    id: "ipoteka",
    role: "Intern, Overdue Collection Department",
    org: "Ipoteka Bank, Tashkent",
    dates: "May – Jul 2023",
    note: "Tracked overdue loan accounts, helped prioritise them by risk and amount, and contacted borrowers about repayment plans.",
  },
] as const;

export const education = [
  { id: "mba", program: "MBA, Big Data & AI", school: "Sejong University, Seoul", dates: "Sep 2025 – Aug 2027 (expected)" },
  {
    id: "bachelor",
    program: "Bachelor, Economic Security",
    school: "Tashkent State University of Economics",
    dates: "graduated Jun 2025",
  },
] as const;

export const learning = [
  "I do not have finished AI projects to show yet.",
  "So far I have worked with Python, SQL and Excel (formulas and pivot tables). The MBA covers structured and unstructured data, case work, and carrying a result into a management decision.",
] as const;
