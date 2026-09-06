import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { personalData } from "@/data/personalData";

const About = () => {
  return (
    <section id="about" className="bg-black px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading index="01" kicker="About" title="A little about me" />
        </Reveal>

        <Reveal delay={100}>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
            {personalData.summary}
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
