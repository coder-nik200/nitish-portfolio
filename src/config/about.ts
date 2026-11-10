import { heroConfig } from "@/config/hero";

export const aboutConfig = {
  headline: ["A bit about me", "and my journey."],

  intro:
    "Hey, I'm **Nitish Kumar Bharti**, currently pursuing my **MCA at Lovely Professional University**. I'm passionate about web development, enjoy solving problems, and love exploring new technologies. I'm always looking to learn something new, improve my skills, and become a better developer through hands-on experience.",

  quote:
    "I'm here to learn, try new things, make mistakes, and keep improving along the way.",

  traits: ["Curious", "Problem Solver", "Learner", "Persistent"] as const,

  traitStyles: {
    Curious:
      "border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-800/80 dark:bg-sky-950/40 dark:text-sky-300",
    "Problem Solver":
      "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800/80 dark:bg-emerald-950/40 dark:text-emerald-300",
    Learner:
      "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-800/80 dark:bg-amber-950/40 dark:text-amber-300",
    Persistent:
      "border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-800/80 dark:bg-violet-950/40 dark:text-violet-300",
  },

  meta: [
    { label: "Location", value: heroConfig.location },
    { label: "Education", value: "MCA at LPU" },
    { label: "Interests", value: "Development · DSA · Technology" },
  ],

  story: {
    title: "A little about my journey",
    paragraphs: [
      "My journey in technology started during my **BCA at Khalsa College, Amritsar**. I'm now pursuing my **MCA at LPU**, where I'm continuing to learn, explore new areas of computer science, and work towards my career goals.",

      "Apart from technology, I enjoy participating in quiz competitions. I've won **several inter-college quiz competitions**, which have helped me develop my general knowledge, confidence, and ability to think quickly.",
    ],
  },

  // Hackathon experiences
  hackathons: {
    title: "Hackathons & Experiences",
    description:
      "I enjoy stepping outside my comfort zone, collaborating with people, and turning ideas into working solutions.",

    items: [
      {
        name: "HackWarth 2.0",
        organizer: "GNDU University",
        achievement: "Runner-up",
        image: "/assets/hackathons/hackwarth-2.0.png",
        description:
          "Participated in HackWarth 2.0 at GNDU University and secured the runner-up position. The experience helped me improve my problem-solving abilities, collaborate with a team, and turn ideas into practical solutions.",
      },
      {
        name: "DevStorm 2026",
        organizer: "Lovely Professional University",
        achievement: "Participant",
        image: "/assets/hackathons/devstorm-2026.png",
        description:
          "Participated in DevStorm 2026, a 36-hour hackathon at LPU, where our team worked on CivicFix, a civic issue reporting platform. We developed a solution for reporting potholes and civic issues using image uploads, location mapping, and AI-powered severity assessment. It was a valuable experience in teamwork, rapid development, and building solutions under time constraints.",
      },
    ],
  },

  principles: {
    title: "What I'm focused on",
    items: [
      {
        title: "Learning Development",
        description:
          "Improving my web development skills and understanding how to build reliable applications.",
      },
      {
        title: "Practicing DSA",
        description:
          "Solving problems in C++ and strengthening my logic and problem-solving skills.",
      },
      {
        title: "Exploring and Experimenting",
        description:
          "Taking part in new challenges, trying different approaches, and learning from my mistakes.",
      },
      {
        title: "Building My Career",
        description:
          "Preparing for opportunities where I can apply my knowledge, gain practical experience, and grow as a software developer.",
      },
    ],
  },

  beyond: {
    title: "Beyond the screen",
    paragraphs: [
      "Outside academics and coding, I enjoy **listening to music** and taking part in **activities that challenge me**. I like learning new things and meeting people with **different ideas and perspectives**.",

      "Right now, I'm focused on **making the most of my MCA**, improving my **technical skills**, and preparing for the next stage of my career. I don't have everything figured out yet, but I'm willing to **put in the work** and see how far I can go.",
    ],
  },

  connectLinks: [
    {
      name: "Email",
      href: `mailto:${process.env.NEXT_PUBLIC_EMAIL}`,
      icon: "mail" as const,
    },
    {
      name: "X",
      href: "https://x.com/code_Bharti07",
      icon: "x" as const,
    },
    {
      name: "GitHub",
      href: "https://github.com/coder-nik200",
      icon: "github" as const,
    },
  ],
};
