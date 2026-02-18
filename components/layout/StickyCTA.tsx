"use client";

import { useState, useEffect } from "react";
import { MessengerIcon } from "@/components/ui/Icons";
import Button from "@/components/ui/Button";

export default function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-white py-2.5 z-[98] transition-transform duration-300 shadow-sticky ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="container flex items-center justify-between">
        <p className="text-[14px] font-bold">
          Ready to start? <span className="text-d40 font-normal max-md:hidden">{"\u2014"} Free quote in 24h</span>
        </p>
        <div className="flex gap-2">
          <Button variant="white" href="https://m.me/statcraft" className="!py-2.5 !px-[18px] !text-[13px]">
            <MessengerIcon />
            Messenger
          </Button>
          <div className="hidden md:block">
            <Button href="#contact" className="!py-2.5 !px-[18px] !text-[13px]">
              Send your data {"\u2192"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
