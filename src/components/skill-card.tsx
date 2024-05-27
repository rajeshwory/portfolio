interface ISkill {
  id: number;
  name: string;
}

const SkillCard = ({ name }: ISkill) => {
  return (
    <div className="w-1/6 h-16 m-6 p-2 border-solid border rounded-lg border-yellow-100 justify-center">
      <a className="text-2xl">{name}</a>
    </div>
  );
};

export default SkillCard;
