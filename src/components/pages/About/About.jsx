import React from "react";
import Skills from "./Skills/Skills";

const About = () => {
  return (
    <section className="py-8">
      <div className="flex flex-wrap md:px-4">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">Quem sou eu?</h3>
            <p className="text-sm text-gray-400 leading-6 mb-3">
              Sou o Gustavo, muito prazer! Atuo com o desenvolvimento de softwares 
              desde Janeiro de 2021, inicialmente só com java para web, e depois de 
              algum tempo já estava habituado com spring boot, kotlin javascript,
              ReactJs, NodeJs, e outras tecnologias.  
            </p>
            <p className="text-sm text-gray-400 leading-6 mb-3">
              Atuei em projetos para desenvolvimento de plataformas que possibilitavam
              transacionar com pix(Saqjá), sistema interno para construtora(Prado), fintech
              (Fiducia), fazendo todo o desenvolvimento de api, elaboração e desenvolvimento
              das telas, e integração com as api's. 
            </p>
          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
