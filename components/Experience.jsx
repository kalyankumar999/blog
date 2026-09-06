import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { experienceData } from "@/data/experienceData";
import { achievementsData } from "@/data/achievementsData";

const Experience = () => {
  return (
    <section id="experience" className="bg-black-soft px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            index="03"
            kicker="Experience"
            title="Where I've worked"
          />
        </Reveal>

        <div className="space-y-14">
          {experienceData.map((role, i) => (
            <Reveal key={role.company} delay={i * 100}>
              <article className="relative border-l border-line pl-8">
                <span
                  className={`absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-black-soft bg-orange ${
                    role.status === "current" ? "animate-pulse-dot" : ""
                  }`}
                />

                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  {role.status === "current" && (
                    <span className="rounded-full border border-orange/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-orange">
                      Current
                    </span>
                  )}
                </div>

                <h3 className="mt-2 font-display text-xl font-semibold text-white md:text-2xl">
                  {role.role}
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  {role.company} · {role.location}
                </p>
                <p className="font-mono text-xs text-gray-600">
                  {role.duration}
                </p>

                <ul className="mt-4 space-y-2.5">
                  {role.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="text-sm leading-relaxed text-gray-400 md:text-[15px]"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        {achievementsData.length > 0 && (
          <Reveal delay={200}>
            <div className="mt-14 rounded-2xl border border-line bg-black p-6 md:p-8">
              <p className="font-mono text-[11px] uppercase tracking-wide text-orange">
                Highlights
              </p>
              <ul className="mt-3 space-y-2">
                {achievementsData.map((note, i) => (
                  <li
                    key={i}
                    className="text-sm leading-relaxed text-gray-400"
                  >
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default Experience;
