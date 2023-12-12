import { Helmet } from "react-helmet-async";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <div>
      <Helmet>
        <title>Foyez | Projects</title>
      </Helmet>


       <div>
       <div className="flex justify-center items-center">
       <div>
        <h1 className="text-4xl font-bold">My Projects</h1>
        <progress
          className="progress w-[200px] prog"
          value="20"
          max="100"
        ></progress>
      </div>
       </div>
       </div>
 

       <div className="mt-16">
       <ProjectCard></ProjectCard>
       </div>
       
    </div>
  );
};

export default Projects;
