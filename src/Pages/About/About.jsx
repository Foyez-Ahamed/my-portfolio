import { Helmet } from "react-helmet-async";
import pic from "../../../src/assets/logo/aboutMe2.png";
import Education from "../../components/Education/Education";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Foyez | About</title>
      </Helmet>

      <div>

       <div className="flex justify-center items-center">
       <div>
        <h1 className="text-4xl font-bold">About Me</h1>
        <progress
          className="progress w-[170px] prog"
          value="20"
          max="100"
        ></progress>
      </div>
       </div>

      <section className="flex flex-col lg:flex-row justify-between items-center gap-4 mt-10">
        <div className="flex-1 lg:ml-24" data-aos="zoom-in-right"
        data-aos-easing="linear"
        data-aos-duration="1500"
        >
          <img className="rounded-full" src={pic} alt="" />
        </div>

        <div className="flex-1 space-y-4" data-aos="zoom-in-right"
        data-aos-easing="linear"
        data-aos-duration="1500">
          <h1 className="text-4xl font-bold">Personal Overview</h1>

          <p className="text-[17px] text-justify lg:w-[410px]">
            To secure a challenging position as a web developer where my passion
            for crafting efficient and innovative web solutions can be
            leveraged. Seeking an environment that fosters continual learning
            and growth, allowing me to contribute my skills to drive impactful
            results in the realm of web development.
          </p>

        </div>
      </section>

      <Education></Education>

      <div className="mt-10">

       <div>

        <h1 className="text-4xl font-bold">My Goal</h1>
        <progress
          className="progress w-[140px] prog"
          value="20"
          max="100"
        ></progress>

        <p className="text-[17px] text-justify">My professional goals and aspirations may include mastering the latest technologies and frameworks within the development, staying abreast of industry trends, and consistently enhancing my coding skills. Might aim to contribute to open-source projects, collaborate with cross-functional teams, and deliver high-quality, user-centric applications. Additionally, aspiring to take on leadership roles, such as becoming a tech lead or architect, and actively participating in the developer community could further enrich my professional journey. As a web developer, I am proud of my foundational skills and eagerness to contribute to real-world projects. I find fulfillment in the process of learning and adapting to industry best practices. My commitment to staying updated with the latest technologies reflects my dedication to growth, and I am excited about the opportunity to apply my knowledge in a professional setting. I look forward to collaborating with experienced developers and contributing positively to the dynamic field of web development.</p>
      </div>
      
      </div>

    </div>

    </div>
  );
};

export default About;
