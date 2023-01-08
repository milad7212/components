// import content
import { useState } from "react";

import Wrap from "../hoc/Wrap";
// import modal package

const Feature16 = () => {
  const skills = {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Figma",
        para: "Lorem ipsum text  dummy",
        logo: "figma",
      },
      {
        name: "Node js",
        para: "Lorem ipsum text  dummy",
        logo: "nodejs",
      },
      {
        name: "Adobe Photoshop",
        para: "Lorem ipsum text  dummy",
        logo: "ps",
      },
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: "reactjs",
      },
      {
        name: "Sketch",
        para: "Lorem ipsum text  dummy",
        logo: "sketch",
      },
      {
        name: "Python",
        para: "Lorem ipsum text  dummy",
        logo: " python",
      },
    ],
  };
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);

  return (
    <section className="min-h-fit bg-bg_light_primary" id="skills">
      {/* content */}
      <div className="md:container px-5  py-14">
        <h2 className="md:text-3xl text-2xl" data-aos="fade-down">
          {skills.title}
        </h2>
        <h4 className="text-gray" data-aos="fade-down">
          {skills.subtitle}
        </h4>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 400}
              className="bg-white sm:cursor-pointer 
               relative group w-full flex items-center
                gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
            >
              <div>
                <img
                  src={skill.logo}
                  alt="..."
                  className="w-10 group-hover:scale-125 duration-200"
                />
              </div>
              <div>
                <h6>{skill.name}</h6>
                <p className="italic">{skill.para}</p>
                <div className="text-xl absolute top-3 right-3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wrap(Feature16);
