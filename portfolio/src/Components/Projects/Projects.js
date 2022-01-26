import React from "react";
import AllProject from "./AllProject";
import ProjectNote from "./ProjectNote/ProjectNote";
import Footer from '../Footer/Footer';

function Projects() {
  return (
    <div>
      <ProjectNote />
      <AllProject />
      <Footer/>
    </div>
  );
}

export default Projects;
