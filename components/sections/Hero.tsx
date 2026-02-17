"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { CheckIcon, MessengerIcon } from "@/components/ui/Icons";

const VIDEO_URL =
  "https://res.cloudinary.com/dafjwq523/video/upload/v1771302830/Writing_On_Board_Video_1920x1080_n0fopm.mp4";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

export default function Hero() {
  return (
    <section className="relative min-h-[700px] pt-40 pb-[100px] overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-d/80" />

      {/* Content */}
      <div className="container relative z-10 text-center flex flex-col items-center">
        <motion.div {...fade(0.1)} className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/15 rounded-full text-[14px] font-semibold text-o mb-6 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-o" style={{ animation: "pulse 2s infinite" }} />
          Accepting clients for thesis season 2026
        </motion.div>

        <motion.h1 {...fade(0.25)} className="text-[length:var(--h1)] leading-[1.08] tracking-[-2px] mb-5 max-md:text-4xl max-md:tracking-[-1.5px] text-white max-w-[720px]">
          Stop panicking about <em className="not-italic text-o">Chapter 4.</em>
        </motion.h1>

        <motion.p {...fade(0.4)} className="text-base text-white/75 leading-[1.7] mb-8 max-w-[540px]">
          We handle statistical analysis, data cleaning, and write-up for Filipino thesis students {"\u2014"} plus 1-on-1 math tutoring. You focus on defending.
        </motion.p>

        <motion.div {...fade(0.55)} className="flex gap-3 flex-wrap justify-center mb-9">
          <Button href="#contact">Get a free quote {"\u2192"}</Button>
          <Button variant="ghost" href="https://m.me/statcraft">
            <MessengerIcon />
            Message on Messenger
          </Button>
        </motion.div>

        <motion.div {...fade(0.7)} className="flex gap-5 flex-wrap justify-center">
          {["DOST-SEI Scholar", "Published researcher", "100% on-time"].map((t) => (
            <div key={t} className="flex items-center gap-1.5 text-[13px] font-semibold text-white/70">
              <CheckIcon className="text-o" />
              {t}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
