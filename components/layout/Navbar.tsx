"use client";

import { useState, useEffect } from "react";
import { LogoMark, HamburgerIcon, CloseIcon } from "@/components/ui/Icons";
import Button from "@/components/ui/Button";

const links = [
  { href: "#team", label: "Team" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((v) => !v);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-100 py-3.5 border-b transition-all duration-300 ${
          scrolled
            ? "bg-cr/92 backdrop-blur-2xl border-d10 shadow-nav"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="container flex items-center justify-between">
          <a
            href="#"
            className={`text-[length:var(--h5)] font-extrabold no-underline flex items-center gap-2 tracking-tight transition-colors duration-300 ${
              scrolled ? "text-d" : "text-white"
            }`}
          >
            <LogoMark />
            StatCraft
          </a>
          <div className="hidden md:flex gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-base font-medium no-underline transition-colors duration-300 ${
                  scrolled ? "text-d50 hover:text-d" : "text-white/80 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2.5">
            <button className="md:hidden bg-transparent border-none cursor-pointer p-2" onClick={toggleMenu}>
              <HamburgerIcon />
            </button>
            <Button href="#contact" className="!py-2.5 !px-[22px] !text-[14px]">
              Get a quote {"\u2192"}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black/30 z-[199] transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile menu */}
      <div
        className={`fixed top-0 w-[280px] h-screen bg-white z-[200] pt-20 px-7 pb-7 transition-[right] duration-300 shadow-[-8px_0_40px_rgba(0,0,0,0.1)] ${
          menuOpen ? "right-0" : "-right-[300px]"
        }`}
      >
        <button className="absolute top-5 right-5 bg-transparent border-none cursor-pointer" onClick={toggleMenu}>
          <CloseIcon />
        </button>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={toggleMenu}
            className="block py-3.5 text-base font-semibold text-d no-underline border-b border-d10"
          >
            {l.label}
          </a>
        ))}
        <Button href="#contact" className="mt-4" onClick={toggleMenu}>
          Get a quote {"\u2192"}
        </Button>
      </div>
    </>
  );
}
