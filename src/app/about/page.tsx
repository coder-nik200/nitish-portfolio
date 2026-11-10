"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PaperCrumple from "@/components/PaperCrumple";

import {
  EnvelopeSimple,
  GithubLogo,
  XLogo,
  X,
  CaretLeft,
  CaretRight,
  ArrowsOut,
} from "@phosphor-icons/react";

import { Container } from "@/components/container";
import { HighlightedText } from "@/components/highlighted-text";
import { LiquidGlassCard } from "@/components/ui/liquid-glass";

import { aboutConfig } from "@/config/about";
import { createPageMetadata, pageTitle } from "@/lib/metadata";

const connectIconMap = {
  mail: EnvelopeSimple,
  x: XLogo,
  github: GithubLogo,
};

export default function AboutPage() {
  const [activeCertificate, setActiveCertificate] = useState<number | null>(
    null,
  );

  const certificates = aboutConfig.hackathons.items;

  const closeLightbox = () => setActiveCertificate(null);

  const showNext = () => {
    setActiveCertificate((current) =>
      current === null ? null : (current + 1) % certificates.length,
    );
  };

  const showPrevious = () => {
    setActiveCertificate((current) =>
      current === null
        ? null
        : (current - 1 + certificates.length) % certificates.length,
    );
  };

  useEffect(() => {
    if (activeCertificate === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrevious();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeCertificate]);

  return (
    <>
      <div className="space-y-12 pb-20 pt-8 sm:space-y-16">
        {/* Introduction */}
        <Container>
          <div className="max-w-2xl space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {aboutConfig.headline[0]}
                <br />
                {aboutConfig.headline[1]}
              </h1>

              <p className="text-base leading-relaxed text-secondary sm:text-lg">
                <HighlightedText text={aboutConfig.intro} />
              </p>
            </div>

            <blockquote className="border-l-2 border-border pl-4 text-sm italic leading-relaxed text-secondary sm:text-base">
              {aboutConfig.quote}
            </blockquote>

            <div className="relative flex flex-wrap items-center gap-2 py-1">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-border"
              />

              {aboutConfig.traits.map((trait) => (
                <span
                  key={trait}
                  className={`relative rounded-full border px-3 py-1 text-xs font-medium ${aboutConfig.traitStyles[trait]}`}
                >
                  {trait}
                </span>
              ))}
            </div>

            <div className="grid gap-4 border-t border-border pt-6 sm:grid-cols-3">
              {aboutConfig.meta.map((item) => (
                <div key={item.label}>
                  <p className="text-xs uppercase tracking-wider text-secondary">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>

        {/* My Journey */}
        <Container>
          <section className="max-w-2xl space-y-5">
            <h2 className="text-xl font-bold tracking-tight">
              {aboutConfig.story.title}
            </h2>

            <div className="space-y-4 text-sm leading-relaxed text-secondary sm:text-base">
              {aboutConfig.story.paragraphs.map((paragraph) => (
                <p key={paragraph}>
                  <HighlightedText text={paragraph} />
                </p>
              ))}
            </div>
          </section>
        </Container>

        {/* Hackathons */}
        <Container>
          <section className="max-w-2xl space-y-5">
            {/* Heading */}
            <div className="space-y-2">
              <h2 className="text-xl font-bold tracking-tight">
                {aboutConfig.hackathons.title}
              </h2>

              <p className="text-sm leading-relaxed text-secondary sm:text-base">
                {aboutConfig.hackathons.description}
              </p>
            </div>

            {/* Hackathon Images */}
            <div className="space-y-6">
              {certificates.map((hackathon) => (
                <article key={hackathon.name} className="w-full space-y-2">
                  {/* Image */}
                  <div className="relative aspect-[3/2] w-full overflow-hidden border-0 bg-transparent p-0">
                    <PaperCrumple
                      src={hackathon.image}
                      alt={`${hackathon.name} certificate`}
                      width={1200}
                      height={800}
                      sceneHeight={420}
                      imageFit="contain"
                      releaseBehavior="restore"
                      crumpleAmount={0.85}
                      crumpleDuration={0.55}
                      releaseDuration={0.5}
                      foldCount={7}
                      foldSharpness={0.6}
                      wrinkleDepth={0.65}
                      paperTexture={0.08}
                      draggable
                      returnToOrigin
                      className="!m-0 !block !h-full !w-full !rounded-none !border-0 !p-0"
                    />
                  </div>

                  {/* About */}
                  <div className="space-y-2 pt-1">
                    <h3 className="text-lg font-semibold">{hackathon.name}</h3>

                    <div>
                      <span className="inline-flex rounded-full border border-border px-3 py-1 text-xs font-medium">
                        {hackathon.achievement}
                      </span>
                    </div>

                    <p className="text-xs font-medium uppercase tracking-wider text-secondary">
                      {hackathon.organizer}
                    </p>

                    <p className="text-sm leading-relaxed text-secondary">
                      {hackathon.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </Container>

        {/* Principles */}
        <Container>
          <section className="max-w-2xl space-y-6">
            <h2 className="text-xl font-bold tracking-tight">
              {aboutConfig.principles.title}
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              {aboutConfig.principles.items.map((item) => (
                <LiquidGlassCard
                  key={item.title}
                  glowIntensity="sm"
                  shadowIntensity="sm"
                  borderRadius="12px"
                  blurIntensity="sm"
                  className="p-4"
                >
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-secondary">
                    {item.description}
                  </p>
                </LiquidGlassCard>
              ))}
            </div>
          </section>
        </Container>

        {/* Beyond the Screen */}
        <Container>
          <section className="max-w-2xl space-y-4">
            <h2 className="text-xl font-bold tracking-tight">
              {aboutConfig.beyond.title}
            </h2>

            <div className="space-y-4 text-sm leading-relaxed text-secondary sm:text-base">
              {aboutConfig.beyond.paragraphs.map((paragraph) => (
                <p key={paragraph}>
                  <HighlightedText text={paragraph} />
                </p>
              ))}
            </div>
          </section>
        </Container>

        {/* Connect */}
        <Container>
          <LiquidGlassCard
            glowIntensity="sm"
            shadowIntensity="md"
            borderRadius="18px"
            blurIntensity="md"
            className="max-w-2xl space-y-4 p-6"
          >
            <h2 className="text-xl font-bold tracking-tight">Let's connect</h2>

            <p className="text-sm leading-relaxed text-secondary sm:text-base">
              Whether you want to collaborate, talk about AI, or just say hi —
              I'd love to hear from you.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {aboutConfig.connectLinks.map((link) => {
                const Icon = connectIconMap[link.icon];
                const external = link.href.startsWith("http");

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    aria-label={link.name}
                    className="flex size-10 items-center justify-center rounded-xl border border-border text-secondary transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <Icon className="size-5" />
                  </Link>
                );
              })}
            </div>
          </LiquidGlassCard>
        </Container>
      </div>

      {/* Certificate Lightbox */}
      {activeCertificate !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Certificate preview"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close certificate preview"
            className="absolute right-5 top-5 z-20 flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X size={22} />
          </button>

          {/* Previous */}
          {certificates.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous certificate"
              className="absolute left-3 top-1/2 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6 sm:size-12"
            >
              <CaretLeft size={24} />
            </button>
          )}

          {/* Image */}
          <div
            className="relative flex h-full max-h-[85vh] w-full max-w-5xl items-center justify-center animate-in zoom-in-95 fade-in duration-300"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              key={certificates[activeCertificate].image}
              src={certificates[activeCertificate].image}
              alt={`${certificates[activeCertificate].name} certificate`}
              fill
              sizes="100vw"
              priority
              className="object-contain"
            />
          </div>

          {/* Next */}
          {certificates.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next certificate"
              className="absolute right-3 top-1/2 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6 sm:size-12"
            >
              <CaretRight size={24} />
            </button>
          )}

          {/* Certificate Name */}
          <div className="absolute bottom-5 left-0 right-0 text-center text-sm text-white">
            {certificates[activeCertificate].name}
            <span className="ml-2 text-white/50">
              {activeCertificate + 1} / {certificates.length}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
