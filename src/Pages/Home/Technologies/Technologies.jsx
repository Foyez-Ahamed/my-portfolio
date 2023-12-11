import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Technologies = () => {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("technologies.json");
        const data = await response.json();
        setTechnologies(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(technologies);

  return (
    <div>
      <div className="lg:ml-24">
        <h1 className="text-4xl font-bold">Technologies I Know</h1>
        <progress className="progress w-[100px] prog" value="20" max="100"></progress>
      </div>

     <Marquee>
     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-10">
        {technologies.map((technology) => (
          <div key={technology.id} className="card bg-base-50 shadow-md">
            <figure className="px-10 pt-10">
              <img
                src={technology.image}
                alt={technology.name}
                className="rounded-xl h-[50px]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{technology.name}</h2>
            </div>
          </div>
        ))}
      </div>
     </Marquee>

    </div>
  );
};

export default Technologies;
