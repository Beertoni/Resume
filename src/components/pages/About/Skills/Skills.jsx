import React from "react";
import SkillItem from "./SkillItem";

const skillData = [
  {
    id: 1,
    title: "Html, Css",
    percentage: "87%",
  },
  {
    id: 2,
    title: "Javascript",
    percentage: "90%",
  },
  {
    id: 3,
    title: "ReactJS",
    percentage: "85%",
  },
  {
    id: 4,
    title: "Git, Github",
    percentage: "78%",
  },
  {
    id: 5,
    title: "Node",
    percentage: "73%",
  },
  {
    id: 6,
    title: "Java",
    percentage: "80%",
  },
  {
    id: 7,
    title: "AWS",
    percentage: "20%",
  },
];

const Skills = () => {
  return (
    <div className="py-4">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">Skills</h3>
          </div>
        </div>
        {skillData.map((skill, id) => (
          <SkillItem skill={skill} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
