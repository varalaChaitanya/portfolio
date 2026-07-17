import { skills } from "./SkillData";
import SkillCategory from "./SkillCategory";

const SkillGrid = () => {
  return (
    <div
      className="
        mt-16

        grid

        grid-cols-1

        gap-10

        lg:grid-cols-2
      "
    >
      {skills.map((category) => (
        <SkillCategory
          key={category.category}
          category={category}
        />
      ))}
    </div>
  );
};

export default SkillGrid;