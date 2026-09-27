import Image from "next/image";
import { personalData } from "@/data/personalData";
import Reveal from "./Reveal";

const metaRows = [
  { label: "Role", value: personalData.role },
  { label: "Stack", value: personalData.stackLine },
  { label: "Location", value: personalData.location },
  { label: "Experience", value: `${personalData.yearsExperience} years` },
];

const Hero = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line bg-black px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40"
    >
      {/* animated background blobs */}
      <div
        className="pointer-events-none absolute -left-32 top-10 h-72 w-72 animate-float rounded-full bg-orange/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 top-1/3 h-96 w-96 animate-float-slow rounded-full bg-orange/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-wider text-orange">
            Full Stack Engineer — Crafting Web Experiences
          </p>

          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl">
            Code that scales.
            <br />
            Interfaces that perform.
            <br />
            APIs that connect.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-400 md:text-lg">
            {personalData.name} develops modern full stack applications by
            combining intuitive frontend experiences with robust backend
            services. Experienced in building production-ready React and Next.js
            applications, REST APIs with Node.js and Express.js, and data-driven
            applications powered by MongoDB.
          </p>

          {/* Title block */}
          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-line pt-8 sm:grid-cols-4">
            {metaRows.map((row) => (
              <div key={row.label}>
                <p className="font-mono text-[11px] uppercase tracking-wide text-gray-600">
                  {row.label}
                </p>
                <p className="mt-1 text-sm text-white">{row.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-orange px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:scale-105 hover:bg-orange-light hover:shadow-[0_0_30px_-5px_rgba(255,106,0,0.6)]"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:border-orange hover:text-orange"
            >
              Get in touch
            </a>
            <a
              href={personalData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-orange px-6 py-3 text-sm font-semibold text-orange transition-all duration-300 hover:bg-orange hover:text-black hover:shadow-[0_0_30px_-5px_rgba(255,106,0,0.7)]"
            >
              <span>Resume</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                <path d="M14 3h7v7" />
                <path d="M10 14L21 3" />
                <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
              </svg>
            </a>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative mx-auto w-full max-w-sm">
          <div className="relative">
            <div
              className="absolute -inset-4 animate-float rounded-[2.5rem] bg-gradient-to-br from-orange/40 via-orange/10 to-transparent blur-2xl"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-line bg-black-soft">
              <Image
                src={personalData.profileImage}
                alt={personalData.name}
                width={500}
                height={600}
                className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                priority
              />
            </div>

            <div className="absolute -bottom-5 -left-5 flex items-center gap-2 rounded-full border border-line bg-black px-4 py-2 shadow-lg">
              <span className="h-2 w-2 animate-pulse-dot rounded-full bg-orange" />
              <span className="font-mono text-xs text-white">
                {personalData.status}
              </span>
            </div>

            <div className="absolute -top-5 -right-5 rounded-2xl border border-line bg-black px-4 py-3 shadow-lg">
              <p className="font-display text-xl font-bold text-orange">
                {personalData.yearsExperience}+
              </p>
              <p className="font-mono text-[10px] uppercase tracking-wide text-gray-500">
                Years exp.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
