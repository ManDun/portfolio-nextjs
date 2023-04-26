import React from "react";
import egsapp from "../public/images/projects/egsapp.png";
import tcmwp from "../public/images/projects/tcmwp.png";
import mansoft from "../public/images/projects/mansoft.png";
import manascodes from "../public/images/projects/manascodes.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full lg:h-screen p-2 projects-bg">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-[#276778]">
          Projects
        </p>
        <h2 className="py-4">What I have built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Grids */}
          <ProjectItem
            title="EGS App"
            backgroundImg={egsapp}
            projectUrl="/egsapp"
            tech="Python Django"
          />
          <ProjectItem
            title="Mansoft"
            backgroundImg={mansoft}
            projectUrl="/mansoft"
            tech="Python Django"
          />
          <ProjectItem
            title="That Code Monk"
            backgroundImg={tcmwp}
            projectUrl="/codemonk"
            tech="Wordpress"
          />
          <ProjectItem
            title="ManasCodes"
            backgroundImg={manascodes}
            projectUrl="/manascodes"
            tech="Python Django"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
