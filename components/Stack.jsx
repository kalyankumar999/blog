import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { skillsData } from "@/data/skillsData";

const Stack = () => {
  return (
    <section id="skills" className="bg-black px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading index="02" kicker="Skills" title="What I work with" />
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {skillsData.map((group, i) => (
            <Reveal key={group.category} delay={i * 80}>
              <div className="rounded-2xl border border-line bg-black-soft p-6 transition-colors duration-300 hover:border-orange/40">
                <p className="font-mono text-[11px] uppercase tracking-wide text-orange">
                  {group.category}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line bg-black px-3 py-1.5 text-xs text-gray-300 transition-colors duration-300 hover:border-orange hover:text-orange"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
