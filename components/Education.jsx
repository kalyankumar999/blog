import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { educationData } from "@/data/educationData";
import { languages } from "@/data/personalData";

const Education = () => {
  return (
    <section id="education" className="bg-black-soft px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading index="05" kicker="Education" title="Academic background" />
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {educationData.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 100}>
              <div className="h-full rounded-2xl border border-line bg-black p-6 transition-colors duration-300 hover:border-orange/40">
                <h3 className="font-display text-lg font-semibold text-white">
                  {edu.degree}
                </h3>
                <p className="mt-1 text-sm text-gray-400">{edu.institution}</p>
                <div className="mt-3 flex flex-wrap gap-x-4 font-mono text-xs text-gray-600">
                  <span>{edu.duration}</span>
                  {edu.detail && <span className="text-orange">{edu.detail}</span>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {languages?.length > 0 && (
          <Reveal delay={200}>
            <div className="mt-10">
              <p className="font-mono text-[11px] uppercase tracking-wide text-gray-600">
                Languages
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span
                    key={lang.name}
                    className="rounded-full border border-line bg-black px-3 py-1.5 text-xs text-gray-300"
                  >
                    {lang.name} — {lang.level}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default Education;
