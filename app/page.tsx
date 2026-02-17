import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyCTA from "@/components/layout/StickyCTA";
import Hero from "@/components/sections/Hero";
import ProofBar from "@/components/sections/ProofBar";
import Credentials from "@/components/sections/Credentials";
import Problem from "@/components/sections/Problem";
import CaseStudy from "@/components/sections/CaseStudy";
import Team from "@/components/sections/Team";
import WhatYouGet from "@/components/sections/WhatYouGet";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import Compare from "@/components/sections/Compare";
import Tools from "@/components/sections/Tools";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProofBar />
      <Credentials />
      <Problem />
      <CaseStudy />
      <Team />
      <WhatYouGet />
      <Services />
      <Pricing />
      <Compare />
      <Tools />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <StickyCTA />
    </>
  );
}
