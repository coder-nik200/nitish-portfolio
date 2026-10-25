import { resumeConfig } from "@/config/resume";

export const heroConfig = {
  name: "Nitish Kumar Bharti",
  coverImage: "/assets/nitish-header.jpeg",

  avatar: "/assets/nitish-profile.png",
  avatarSmile: "/assets/nitish-smile.png",

  email: process.env.NEXT_PUBLIC_EMAIL || "your-email@example.com",
  calendarUrl: "https://cal.com/nitish-kumar-bharti/15min",

  timezone: "Asia/Kolkata",
  location: "Amritsar, India",

  bio: "MCA student and developer passionate about building modern web applications with React, Next.js, Node.js, and MongoDB.",
};

export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/coder-nik200",
    icon: "github",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nitish-kumar-bharti-631a37359/",
    icon: "linkedin",
  },
  {
    name: "X",
    href: "https://x.com/code_Bharti07",
    icon: "x",
  },
  {
    name: "Email",
    href: "mailto:your-email@example.com",
    icon: "mail",
  },
  {
    name: "Resume",
    href: resumeConfig.viewUrl,
    icon: "resume",
  },
  {
    name: "Leetcode",
    href: "https://leetcode.com/u/coder_nik01/",
    icon: "leetcode",
  },
] as const;
