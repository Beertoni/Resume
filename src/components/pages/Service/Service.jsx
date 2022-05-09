import React from "react";
import { FaJs, FaJava, FaHtml5, FaReact, FaNodeJs, FaGithub, FaGitlab, FaDocker, FaGulp, FaYarn, FaNpm } from "react-icons/fa";

const serviceData = [
  {
    id: 1,
    icon: <FaJava />,
    title: "JAVA",
    description:
      "",
  },
  {
    id: 2,
    icon: <FaHtml5 />,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
  },
  {
    id: 3,
    icon: (<FaReact />),
    title: "Frontend Development",
    description:
      "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
  },
  {
    id: 4,
    icon: <FaJs />,
    title: "Bootstrap Template",
    description:
      "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
  },
  {
    id: 5,
    icon: <FaNodeJs />,
    title: "Tailwindcss Template",
    description:
      "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
  },
  {
    id: 6,
    icon: <FaGithub />,
    title: "React Template",
    description:
      "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
  },
  {
    id: 7,
    icon: <FaGitlab />,
    title: "React Template",
    description:
      "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
  },
  {
    id: 8,
    icon: <FaDocker />,
    title: "React Template",
    description:
      "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
  },
  {
    id: 9,
    icon: <FaGulp />,
    title: "React Template",
    description:
      "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
  },
  {
    id: 10,
    icon: <FaYarn />,
    title: "React Template",
    description:
      "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
  },
  {
    id: 11,
    icon: <FaNpm />,
    title: "React Template",
    description:
      "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
  },
  
];

const Service = () => {
  return (

    <div className="w-full lg:w-1/2">
      <div className="my-4 md:mx-4 shadow p-6 rounded-md bg-white group hover:shadow-md">
        <div className="w-30 h-20 flex items-center justify-center rounded-md text-3xl mb-5 bg-purple-100 text-purple-600 transition duration-200 group-hover:bg-purple-600 group-hover:text-white">
        {serviceData.map((item, index) =>{
         return (
           item.icon
           )
        })}
        </div>
      </div>
    </div>

  );
};

export default Service;
