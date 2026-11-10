/**
 * Everything a visitor reads lives in this file.
 * Replace the draft projects, adjust a sentence, or swap the portrait
 * path - the layout picks the change up on refresh.
 *
 * Name: the first string is the large line, the second is the italic line.
 * Swap them if you prefer "Aqlliev" as the large line.
 *
 * School: "TDUI" is written here as Tashkent State University of Economics,
 * whose short name is TDIU. Change `school` if that is the wrong place.
 */

export type SkillGroup = "data" | "security" | "work" | "shared";

export type Job = {
  id: string;
  role: string;
  org: string;
  place: string;
  /** Leave empty to hide. Example: "2023 – 2024" */
  dates: string;
  points: string[];
  tags: string[];
};

export type Project = {
  id: string;
  number: string;
  title: string;
  summary: string;
  notes: string;
  tags: string[];
  /** Set false once this entry is a real project. The Draft mark disappears. */
  draft: boolean;
};

export const site = {
  given: "Qodiriy",
  family: "Aqlliev",
  name: "Qodiriy Aqlliev",
  role: "Junior AI Engineer",
  study: "MBA, Big Data & AI · Sejong University",
  line: "I worked with credit risk at a bank. Now I build the models that read it.",
  email: "aqlliev@outlook.com",
  github: "https://github.com/aqlliev",
  githubLabel: "github.com/aqlliev",
  telegram: "https://t.me/askqodir",
  telegramLabel: "t.me/askqodir",
  x: "https://x.com/aqlliev",
  xLabel: "x.com/aqlliev",
  location: "Seoul",
  timezone: "Asia/Seoul",
  portrait: "/portrait.jpg",
  portraitAlt:
    "Qodiriy Aqlliev in a black leather jacket, looking back at the camera on a beach at night, with a dark sky and white surf behind him.",
} as const;

export const about = {
  heading: "About",
  paragraphs: [
    "I am a junior AI engineer, studying in the Big Data & AI MBA at Sejong University in Seoul. My bachelor’s is in economic security, from Tashkent State University of Economics.",
    "Before Seoul I worked in Tashkent. At Ipoteka Bank I handled overdue loans, which showed me what a default looks like before it becomes a row in a dataset. I also worked the front desk of a hotel and ran shifts at a pizzeria.",
    "Those jobs taught me to start from the person on the other side of the data. That is how I want to build AI: models that a bank, a manager, or a customer can actually use.",
  ],
  facts: [
    {
      label: "Now",
      value: "MBA, Big Data & AI",
      meta: "Sejong University, Seoul",
    },
    {
      label: "Before",
      value: "Overdue collections",
      meta: "Ipoteka Bank, Tashkent",
    },
    {
      label: "Looking for",
      value: "A junior AI engineer role",
      meta: "Seoul, or remote.",
    },
  ],
} as const;

export const education = [
  {
    id: "mba",
    level: "MBA",
    program: "Big Data & AI",
    school: "Sejong University",
    place: "Seoul",
    detail:
      "Graduate School of Business. The program joins data analysis with management: structured and unstructured data, case work, and the step of carrying a result into a decision.",
  },
  {
    id: "bachelor",
    level: "Bachelor",
    program: "Economic Security",
    school: "Tashkent State University of Economics",
    place: "Tashkent",
    detail:
      "How a firm, a payment, or a market becomes exposed, and how that risk is recognized before it is expensive.",
  },
] as const;

/**
 * Work history, newest first. Add `dates` when you have them.
 */
export const experience: Job[] = [
  {
    id: "ipoteka",
    role: "Overdue Collection Department",
    org: "Ipoteka Bank",
    place: "Tashkent",
    dates: "",
    points: [
      "Worked a portfolio of overdue loans: tracked delinquent accounts and prioritised them by risk and amount.",
      "Contacted borrowers to agree on repayment plans, and recorded every outcome.",
      "Saw credit risk from the ground: the behaviour behind a default, before it becomes a model feature.",
    ],
    tags: ["Credit risk", "Financial data", "Negotiation"],
  },
  {
    id: "river",
    role: "Receptionist",
    org: "River Hotel",
    place: "Tashkent",
    dates: "",
    points: [
      "Handled check-ins, bookings and guest requests in the hotel’s reservation system.",
      "Solved guests’ problems on the spot, often across languages.",
    ],
    tags: ["Customer service", "Booking systems"],
  },
  {
    id: "pizzeria",
    role: "Shift Manager",
    org: "Pizzeria",
    place: "Tashkent",
    dates: "",
    points: [
      "Ran shifts end to end: staff, rush-hour orders, cash and closing.",
      "Kept the kitchen and the counter moving when everything happened at once.",
    ],
    tags: ["Team lead", "Operations"],
  },
];

export const skillGroups: { id: SkillGroup | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "data", label: "Data & AI" },
  { id: "security", label: "Security" },
  { id: "work", label: "From work" },
  { id: "shared", label: "Shared" },
];

// TODO: add a "tools" list (Python, SQL, …) once confirmed.

export const skills: {
  id: string;
  group: SkillGroup;
  title: string;
  detail: string;
}[] = [
  {
    id: "forms",
    group: "data",
    title: "Structured and unstructured data",
    detail:
      "Tables, text, and the records that arrive as neither. The MBA starts by asking what kind of data a question actually needs.",
  },
  {
    id: "practice",
    group: "data",
    title: "Analysis in practice",
    detail:
      "Coursework on the programs used to clean, test, and show a result, including the statistics tools the Big Data & AI MBA trains on.",
  },
  {
    id: "cases",
    group: "data",
    title: "Case work",
    detail:
      "Taking a dataset from a question to a result, then holding that result against a real management situation.",
  },
  {
    id: "limits",
    group: "data",
    title: "The limit of a model",
    detail:
      "A figure and the assumption that would change it belong in the same sentence. That is the useful skill.",
  },
  {
    id: "exposure",
    group: "security",
    title: "Economic exposure",
    detail:
      "From the bachelor’s: where a firm, a payment, or a market becomes insecure, and what that failure would cost.",
  },
  {
    id: "institutions",
    group: "security",
    title: "Institutional risk",
    detail:
      "Risk that sits in rules, counterparties, and incentives, alongside the risk that shows up as a statistical outlier.",
  },
  {
    id: "credit",
    group: "work",
    title: "Credit risk, from the inside",
    detail:
      "At Ipoteka Bank: which overdue accounts recover, which do not, and the signals that separate them.",
  },
  {
    id: "conversations",
    group: "work",
    title: "Hard conversations",
    detail:
      "Calling borrowers about late payments and agreeing on a plan. Useful when a model’s result has to be explained to a real person.",
  },
  {
    id: "operations",
    group: "work",
    title: "Running a shift",
    detail:
      "Hotel front desk and pizzeria shift manager: people, timing, and problems that need an answer now.",
  },
  {
    id: "brief",
    group: "shared",
    title: "The short brief",
    detail:
      "Writing a finding so a person who will not open the notebook can still check it and decide.",
  },
  {
    id: "evidence",
    group: "shared",
    title: "Care with evidence",
    detail:
      "Both programs ask the same thing of a claim: show where it came from, and what would change your mind.",
  },
];

export const projects: Project[] = [
  {
    id: "shoreline",
    number: "01",
    title: "Shoreline",
    summary:
      "A reading of a public monthly trade series. The task is to tell a seasonal swing from a break in the pattern, and to say which one deserves a second look.",
    notes:
      "The method is simple on purpose. Plot the series, mark the months that leave the usual band, then write one paragraph a person outside the course could argue with. A finished note names the series and shows the chart beside that paragraph.",
    tags: ["Data", "Trade"],
    draft: true,
  },
  {
    id: "one-page",
    number: "02",
    title: "One page",
    summary:
      "A format for handing a model result to someone who will not open the notebook: the number, the assumption that would change it, and the decision it can support.",
    notes:
      "This is the practical aim of the MBA: analysis a manager can use. The format is the number, the assumption that would change it, and the decision it can support. A finished note names the model and the dataset behind them.",
    tags: ["Brief", "Applied AI"],
    draft: true,
  },
  {
    id: "thin-links",
    number: "03",
    title: "Thin links",
    summary:
      "Five firms, the payments between them, and the two links whose failure would stop the rest. An economic-security exercise, redrawn with the habits of a data course.",
    notes:
      "On paper first, then as a small table, so the exposure reads as a structure: the firms, the payments, and the two links that would stop the rest.",
    tags: ["Risk", "Systems"],
    draft: true,
  },
];

export const workIntro =
  "Three studies I am working through in the MBA. Each one gets its notebook on GitHub when it is done.";
