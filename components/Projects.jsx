import React from "react";
import egsapp from "../public/images/projects/egsapp.png";
import tcmwp from "../public/images/projects/tcmwp.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
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
            backgroundImg={egsapp}
            projectUrl="/egsapp"
            tech="Python Django"
          />
          <ProjectItem
            title="Wordpress Blog"
            backgroundImg={tcmwp}
            projectUrl="/egsapp"
            tech="Wordpress"
          />
          <ProjectItem
            title="EGS App"
            backgroundImg={egsapp}
            projectUrl="/egsapp"
            tech="Python Django"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
