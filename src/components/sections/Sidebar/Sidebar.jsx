import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import profile from "../../../images/profile.jpeg";

const socials = [
  {
    id: 1,
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/gustavohenrique.bertonimarques/",
  },
  {
    id: 2,
    icon: <FaGithub />,
    link: "https://github.com/Beertoni",
  },
  {
    id: 3,
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/gustavo-henrique-bertoni-marques-ba81751a1/",
  },
  {
    id: 4,
    icon: <FaInstagram />,
    link: "https://www.instagram.com/beertoni_/",
  },
  {
    id: 5,
    icon: <FaTwitter />,
    link: "https://twitter.com/KitaaGustavo",
  },
];

const Sidebar = () => {
  return (
    <aside className="sticky top-0 bg-white md:mx-8 lg:mx-4 mb-8 p-6 shadow-md rounded-md -mt-40">
      <div className="w-24 h-24 rounded-md overflow-hidden mx-auto mb-5">
        <img src={profile} alt="shafiqhammad" className="w-full" />
      </div>
      <div className="text-center">
        <h1 className="text-xl text-gray-800 font-bold mb-1">Gustavo Bertoni</h1>
        <p className="text-sm text-gray-400 mb-3">
          Software Engineer at
          <a href="https://www.ibm.com/br-pt" target="_blank" className="text-blue-700 pl-1">
            IBM
          </a>
        </p>
        <a
          href="#0"
          className="inline-block mb-3 rounded bg-green-400 text-center border-0 py-2 px-6 text-white leading-7 tracking-wide hover:bg-green-600"
          download="Resume"
        >
          Download Resume
        </a>
        <ul className="flex flex-wrap justify-center">
          {socials.map((social, id) => (
            <SocialIcon social={social} key={id} />
          ))}
        </ul>
      </div>
      <div className="text-start pt-4">
        <h3 className="text-md mb-2 uppercase font-medium text-gray-800">
          Sobre mim
        </h3>
        <p className="text-gray-400 text font-light leading-relaxed">
          Me chamo Gustavo tenho 20 anos, sou estudante de Análise e Desenvolvimento de Sistemas pela
          UNISO no quinto período.
          Sempre buscando novas formas de me aprimorar pessoalmente e profissionalmente, adoro todos os
          tipos de tecnologias e os resultados que conseguimos alcançar dominando elas.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;

const SocialIcon = (props) => {
  const { icon, link } = props.social;
  return (
    <li className="m-2">
      <a
        target="_blank"
        href={link}
        className="w-8 h-8 bg-purple-100 rounded text-purple-800 flex items-center justify-center hover:text-white hover:bg-purple-600"
      >
        {icon}
      </a>
    </li>
  );
};
