import { skillsData } from "@/data/skillsData";

const flatSkills = Array.from(
  new Set(skillsData.flatMap((group) => group.items))
).slice(0, 14);

const TechMarquee = () => {
  const track = [...flatSkills, ...flatSkills];

  return (
    <div className="overflow-hidden border-y border-line bg-black-soft py-5">
      <div className="flex w-max animate-marquee gap-10">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-3 font-mono text-sm text-gray-500"
          >
            {item}
            <span className="text-orange">/</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
