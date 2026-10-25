"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import {
  CalendarBlank,
  EnvelopeSimple,
  FileText,
  GithubLogo,
  LinkedinLogo,
  MediumLogo,
  SealCheck,
  XLogo,
} from "@phosphor-icons/react";
import { SiLeetcode } from "@icons-pack/react-simple-icons";

import StarBorder, { type StarBorderTheme } from "@/components/StarBorder";
import { ProfileAvatar } from "@/components/profile-avatar";
import { Container } from "@/components/container";
import { RotatingTitle } from "@/components/landing/rotating-title";
import { SpotifyLastPlayed } from "@/components/landing/spotify-last-played";
import { TimezoneWidget } from "@/components/landing/timezone-widget";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { heroConfig, socialLinks } from "@/config/hero";

const iconMap = {
  x: XLogo,
  linkedin: LinkedinLogo,
  github: GithubLogo,
  medium: MediumLogo,
  mail: EnvelopeSimple,
  resume: FileText,
  leetcode: SiLeetcode,
} as const;

export type SocialIconKey = keyof typeof iconMap;

export function Hero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const starTheme = mounted && resolvedTheme === "light" ? "light" : "dark";

  const starProps = {
    theme: starTheme as StarBorderTheme,
    duration: 3,
    thickness: 1.5,
    radius: 999,
    trailLength: 0.3,
    stars: 1,
    glow: 0.75,
    sparkle: true,

    hover: "brighten" as const,
    clickPulse: true,
  };

  return (
    <Container className="pt-4 sm:pt-0">
      <div className="animate-in-up-on-view flex flex-col gap-5">
        {/* Cover Banner */}
        <div className="corner-frame relative h-[calc(var(--grid-cell-size)*4)] overflow-visible">
          <div className="relative size-full overflow-hidden border border-foreground/15">
            <Image
              src="/assets/nitish-header.jpeg"
              alt="Nitish Kumar Bharti — Portfolio Cover"
              fill
              priority
              sizes="(max-width: 640px) 100vw, 720px"
              className="object-cover object-center"
            />

            <div className="pointer-events-none absolute inset-0 bg-black/10" />
          </div>
        </div>

        {/* Timezone */}
        <TimezoneWidget className="-mt-3 self-end" />

        {/* Overlapping Profile Picture */}
        <div className="-mt-[calc(var(--grid-cell-size)*2)] flex items-end gap-4">
          <div className="relative z-30 shrink-0 rounded-full bg-background p-1">
            <ProfileAvatar />
          </div>
        </div>

        {/* Name and Rotating Title */}
        <div className="min-w-0">
          <h1 className="flex items-center gap-2 text-3xl font-bold tracking-tight sm:text-4xl">
            {heroConfig.name}

            <SealCheck
              className="size-6 shrink-0 text-[#1D9BF0] sm:size-7"
              weight="fill"
              aria-label="Verified"
            />
          </h1>

          <RotatingTitle />

          {/* Animated Contact Buttons */}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {/* Book a Call */}
            <StarBorder
              as={Link}
              href={heroConfig.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              {...starProps}
              backgroundColor="var(--card)"
              textColor="var(--foreground)"
              color={starTheme === "dark" ? "#ffffff" : "#09090b"}
              trailColor={starTheme === "dark" ? "#a1a1aa" : "#52525b"}
              className="hero-star-button hero-star-button--secondary"
            >
              <CalendarBlank weight="bold" />
              Book a call
            </StarBorder>

            {/* Email Me */}
            <StarBorder
              as="a"
              href={`mailto:${heroConfig.email}`}
              {...starProps}
              backgroundColor="var(--card)"
              textColor="var(--foreground)"
              color={starTheme === "dark" ? "#ffffff" : "#09090b"}
              trailColor={starTheme === "dark" ? "#a1a1aa" : "#52525b"}
              className="hero-star-button hero-star-button--secondary"
            >
              <EnvelopeSimple weight="bold" />
              Email me
            </StarBorder>
          </div>
        </div>

        {/* Introduction */}
        <p className="max-w-xl text-sm leading-relaxed text-secondary sm:text-base">
          {heroConfig.bio}
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap gap-0.5">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];

            const external =
              link.href.startsWith("https://") ||
              link.href.startsWith("http://");

            return (
              <Tooltip key={link.name} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    href={link.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    aria-label={link.name}
                    className="flex items-center gap-2 p-1 text-secondary transition-colors hover:text-foreground"
                  >
                    <Icon className="size-5" />
                  </Link>
                </TooltipTrigger>

                <TooltipContent>{link.name}</TooltipContent>
              </Tooltip>
            );
          })}
        </div>

        {/* Music Activity */}
        <div className="max-w-full pt-1">
          <SpotifyLastPlayed />
        </div>
      </div>
    </Container>
  );
}
