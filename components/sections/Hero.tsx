"use client";

import { useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { TrendingUpIcon } from "@/components/ui/trending-up";
import AnimatedIconLoop from "@/components/ui/AnimatedIconLoop";
import Button from "@/components/ui/Button";
import { MessengerIcon } from "@/components/ui/Icons";
import { heroContent } from "@/data/hero";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

export default function Hero() {
  const content = heroContent.thesis;
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const visible = useRef(false);
  const raf = useRef<number>(0);

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const animate = useCallback(() => {
    pos.current.x = lerp(pos.current.x, mouse.current.x, 0.08);
    pos.current.y = lerp(pos.current.y, mouse.current.y, 0.08);
    if (glowRef.current) {
      glowRef.current.style.setProperty("--gx", `${pos.current.x}px`);
      glowRef.current.style.setProperty("--gy", `${pos.current.y}px`);
    }
    raf.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    raf.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf.current);
  }, [animate]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    if (!visible.current && glowRef.current) {
      visible.current = true;
      glowRef.current.style.opacity = "1";
    }
  };

  const handleMouseLeave = () => {
    visible.current = false;
    if (glowRef.current) glowRef.current.style.opacity = "0";
  };

  return (
    <section
      className="relative md:h-screen flex items-end overflow-hidden pt-28 max-md:pb-8 md:pt-0"
      style={{
        background: "linear-gradient(180deg, #f6f6f3 0%, #f5e0d4 80%, #FF5015 100%)",
      }}
    >
      {/* Animated grain overlay */}
      <div className="absolute inset-0 z-[2] grain-overlay overflow-hidden" />

      {/* Content */}
      <div className="container relative z-10 pb-8 flex flex-col items-center text-center justify-end">
        <div className="max-w-[560px]">
          {/* Badge */}
          <motion.div
            {...fade(0.05)}
            className="flex justify-center mb-5"
          >
            <span className="inline-flex items-center gap-2 border border-d/20 rounded-full px-4 py-1.5 text-[13px] text-d70 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-o" />
              100% defense success rate
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fade(0.15)}
            className="text-[length:var(--h1)] leading-[1.08] tracking-[-2px] mb-5 max-md:text-4xl max-md:tracking-[-1.5px] text-d"
          >
            {content.headline.before} {content.headline.emphasis}
          </motion.h1>

          {/* Description */}
          <motion.p
            {...fade(0.2)}
            className="text-base text-d50 leading-[1.7] mb-8 max-w-[480px] mx-auto"
          >
            {content.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fade(0.25)}
            className="flex gap-3 flex-wrap justify-center mb-9 max-md:flex-col max-md:w-full"
          >
            <Button href={content.primaryCta.href}>{content.primaryCta.label}</Button>
            <Button variant="white" href={content.secondaryCta.href}>
              <MessengerIcon />
              {content.secondaryCta.label}
            </Button>
          </motion.div>
        </div>

        {/* Hero Cards */}
        <div className="grid grid-cols-3 gap-5 w-full max-w-[900px] mx-auto max-md:grid-cols-1">
          {/* Left Dark Card */}
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            {...fade(0.4)}
            className="rounded-card bg-d bg-dark-dots p-8 relative overflow-hidden flex flex-col justify-between h-[380px] max-md:h-auto max-md:min-h-[280px] max-md:gap-8 cursor-default text-left"
          >
            {/* Bright dots layer masked by radial gradient — follows cursor with smooth delay */}
            <div
              ref={glowRef}
              className="pointer-events-none absolute inset-0 rounded-card transition-opacity duration-500"
              style={{
                opacity: 0,
                backgroundImage: "radial-gradient(rgba(255,80,21,0.45) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
                WebkitMaskImage: "radial-gradient(150px circle at var(--gx,50%) var(--gy,50%), black 0%, transparent 70%)",
                maskImage: "radial-gradient(150px circle at var(--gx,50%) var(--gy,50%), black 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10">
              <span className="w-10 h-10 rounded-full bg-o/15 flex items-center justify-center">
                <AnimatedIconLoop interval={3000}>
                  <TrendingUpIcon size={20} className="text-o" />
                </AnimatedIconLoop>
              </span>
            </div>
            <div className="relative z-10">
              <h3 className="text-white font-bold text-[22px] leading-tight">
                47 theses. Zero failed defenses.
              </h3>
              <p className="text-white/50 text-[13px] leading-relaxed mt-2 mb-6">
                Join students from CMU, UP, Ateneo, UST, and DLSU.
              </p>
              <Button variant="ghost" href="#testimonials">See Results</Button>
            </div>
          </motion.div>

          {/* Right Card — Image + Stats Widget */}
          <motion.div
            {...fade(0.5)}
            className="rounded-card relative overflow-hidden h-[380px] max-md:h-auto max-md:min-h-[280px] col-span-2 max-md:col-span-1"
          >
            <img
              src="/flux-hero.png"
              alt="Statistical analysis illustration"
              className="object-cover w-full h-full absolute inset-0 scale-x-[-1]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />

            {/* Floating Stats Widget */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute bottom-4 left-4 bg-white rounded-2xl p-5 shadow-card w-[280px]"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-[18px] font-bold text-d leading-tight">Avg. Turnaround</h4>
                  <p className="text-[11px] text-d40 mt-0.5 text-left">Days to completion</p>
                </div>
                <span className="border border-d20 rounded-full px-2.5 py-1 text-[11px] text-d font-medium flex items-center gap-1">
                  Per project
                </span>
              </div>

              {/* Bar Chart */}
              <div className="flex gap-3 justify-start mb-4">
                {/* Freelancers */}
                <div className="flex flex-col items-center gap-1.5 relative p-2 rounded-xl">
                  <div
                    className="absolute inset-0 rounded-[inherit]"
                    style={{
                      backgroundRepeat: "repeat",
                      backgroundPosition: "left top",
                      backgroundSize: "64px auto",
                      backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='126' height='126'><path id='a' d='M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z' fill='rgb(136,136,136,0.2)' fill-rule='evenodd'/></svg>")`,
                    }}
                  />
                  <p className="text-[11px] text-d40 font-medium relative z-[1]">Freelancers</p>
                  <div className="flex gap-1 items-end h-[52px] relative z-[1]">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 52 }}
                      transition={{ duration: 0.5, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                      className="w-[22px] rounded-md bg-d20"
                    />
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 40 }}
                      transition={{ duration: 0.5, delay: 1.35, ease: [0.25, 0.1, 0.25, 1] }}
                      className="w-[22px] rounded-md bg-d10"
                    />
                  </div>
                </div>
                {/* StatCraft */}
                <div className="flex flex-col items-center gap-1.5 relative p-2 rounded-xl bg-obg">
                  <p className="text-[11px] text-o font-semibold relative z-[1]">StatCraft</p>
                  <div className="flex gap-1 items-end h-[52px] relative z-[1]">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 18 }}
                      transition={{ duration: 0.4, delay: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
                      className="w-[22px] rounded-md bg-o"
                    />
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 14 }}
                      transition={{ duration: 0.4, delay: 1.6, ease: [0.25, 0.1, 0.25, 1] }}
                      className="w-[22px] rounded-md bg-o/60"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom: Metric + Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.7 }}
                className="flex items-end justify-between"
              >
                <div>
                  <p className="text-[11px] text-d40 leading-none">Avg. days</p>
                  <p className="font-mono text-[28px] font-bold text-d leading-none mt-1">10</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.9, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute -right-16 bottom-10 flex items-center gap-1.5 bg-white rounded-full px-3 py-1.5 shadow-card"
              >
                <span className="w-5 h-5 rounded-full bg-o flex items-center justify-center flex-shrink-0">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M9 3L3 9M3 9H7M3 9V5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="text-[11px] font-semibold text-d whitespace-nowrap">3x faster than avg</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
