import SkillCard from "./skill-card";

const skillData = [
  {
    id: 1,
    name: "HTML",
  },
  {
    id: 2,
    name: "CSS",
  },
  {
    id: 3,
    name: "Javascript",
  },
  {
    id: 4,
    name: "React JS",
  },
  {
    id: 5,
    name: "React Native",
  },
  {
    id: 6,
    name: "Next JS",
  },
  {
    id: 7,
    name: "Vite JS",
  },
  {
    id: 8,
    name: "Tailwind CSS",
  },
];

const Skills = () => {
  return (
    <section className="w-full" id="skills">
      <div>
        <div className="text-center mb-6">
          <a className="text-5xl font-bold">Skills</a>
        </div>
        <div className="flex flex-row flex-wrap">
          {skillData &&
            skillData.map((skill) => (
              <SkillCard key={skill.id} id={skill.id} name={skill.name} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
