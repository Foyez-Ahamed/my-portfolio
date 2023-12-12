import { useEffect, useState } from "react";

const ProjectCard = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="zoom-in-right"
          data-aos-easing="linear"
          data-aos-duration="1500">
        {projects.map((project) => (
          <div
            key={project.id}
            className="card bg-base-100 shadow-xl image-full group hover:bg-primary-500 transition-all duration-300"
          >
            <figure>
              <img src={project.image} alt="Projects" />
            </figure>
            <div className="card-body opacity-0 group-hover:opacity-100 transition-all ease-in duration-300"
             >
              <h2 className="card-title text-white">{project.name}</h2>
              <p className="text-white">{project.type}</p>
              <div className="card-actions justify-end">

                <button className="heroBtn flex justify-center items-center gap-2 rounded-md text-white ">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Site
                  </a>{" "}
                </button>

                <button className="heroBtn flex justify-center items-center gap-2 rounded-md text-white ">
                  <a
                    href={project.details}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Details
                  </a>{" "}
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
