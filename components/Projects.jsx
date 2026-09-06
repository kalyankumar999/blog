"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { projectsData } from "@/data/projectsData";

const ProjectCard = ({ project, index }) => {
  const [expanded, setExpanded] = useState(false);
  const hasLiveDemo =
    project.liveDemoUrl && project.liveDemoUrl !== "URL_TO_LIVE_DEMO";

  return (
    <Reveal delay={index * 90}>
      <article className="group relative overflow-hidden rounded-2xl border border-line bg-black-soft p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange/50 hover:shadow-[0_20px_50px_-20px_rgba(255,106,0,0.35)] md:p-7">
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-0"
          aria-hidden="true"
        />

        <p className="font-mono text-[11px] uppercase tracking-wide text-gray-600">
          {project.position}
        </p>
        <h3 className="mt-1 font-display text-xl font-semibold text-white">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-400">
          {project.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line bg-black px-2.5 py-1 font-mono text-[11px] text-gray-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {expanded && (
          <div className="mt-5 space-y-4 border-t border-line pt-5">
            {project.features?.length > 0 && (
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wide text-orange">
                  Features
                </p>
                <ul className="mt-2 list-inside list-disc space-y-1.5 text-sm text-gray-400">
                  {project.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            )}
            {project.contributions?.length > 0 && (
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wide text-orange">
                  Contribution
                </p>
                <ul className="mt-2 list-inside list-disc space-y-1.5 text-sm text-gray-400">
                  {project.contributions.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        <div className="mt-5 flex items-center gap-4">
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="font-mono text-xs text-gray-400 underline-offset-4 transition-colors hover:text-orange hover:underline"
          >
            {expanded ? "Collapse" : "Expand"}
          </button>
          {hasLiveDemo && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto font-mono text-xs text-orange hover:underline"
            >
              Live demo →
            </a>
          )}
        </div>
      </article>
    </Reveal>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="bg-black px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading index="04" kicker="Projects" title="Selected work" />
        </Reveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projectsData.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
