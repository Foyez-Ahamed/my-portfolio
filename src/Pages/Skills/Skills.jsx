import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ProgressBar from "@ramonak/react-progress-bar";

const Skills = () => {
  return (
    <div>
      <Helmet>
        <title>Foyez | Skills</title>
      </Helmet>

      <div className="flex justify-center items-center">
        <SectionTitle title={"Skills And Technologies"}></SectionTitle>
      </div>

      <div className="mt-10">
        <h1 className="text-2xl font-bold">Technical Skills (Frontend)</h1>

        <div className="flex flex-col lg:flex-row mt-6">
          <div className="flex-1 space-y-3">
            <h1 className="text-xl font-bold">HTML</h1>
            <ProgressBar className="w-[300px] " completed={100}></ProgressBar>
          </div>

          <div className="flex-1 space-y-3">
            <h1 className="text-xl font-bold">CSS</h1>
            <ProgressBar className="w-[300px]" completed={100}></ProgressBar>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row mt-6">
          <div className="flex-1 space-y-3">
            <h1 className="text-xl font-bold">TAILWIND CSS</h1>
            <ProgressBar className="w-[300px] " completed={100}></ProgressBar>
          </div>

          <div className="flex-1 space-y-3">
            <h1 className="text-xl font-bold">JAVASCRIPT</h1>
            <ProgressBar className="w-[300px]" completed={70}></ProgressBar>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row mt-6">
          <div className="flex-1 space-y-3">
            <h1 className="text-xl font-bold">REACT</h1>
            <ProgressBar className="w-[300px] " completed={70}></ProgressBar>
          </div>

          <div className="flex-1 space-y-3">
            <h1 className="text-xl font-bold">FIREBASE</h1>
            <ProgressBar className="w-[300px]" completed={70}></ProgressBar>
          </div>
        </div>
      </div>

      {/* backend  */}

      <div className="mt-10">
        <h1 className="text-2xl font-bold">Technical Skills (Backend)</h1>

        <div className="flex flex-col lg:flex-row mt-6">
          <div className="flex-1 space-y-3">
            <h1 className="text-xl font-bold">NODE JS</h1>
            <ProgressBar className="w-[300px] " completed={40}></ProgressBar>
          </div>

          <div className="flex-1 space-y-3">
            <h1 className="text-xl font-bold">EXPRESS JS</h1>
            <ProgressBar className="w-[300px]" completed={50}></ProgressBar>
          </div>
        </div>

      </div>

      {/* database */}
     
      <div className="mt-10">
        <h1 className="text-2xl font-bold">Technical Skills (Database)</h1>

        <div className="flex flex-col lg:flex-row mt-6">
          <div className="flex-1 space-y-3">
            <h1 className="text-xl font-bold">MONGODB</h1>
            <ProgressBar className="w-[300px] " completed={40}></ProgressBar>
          </div>
        </div>

      </div>


      {/* tools */}
      
      <div className="mt-16">
      <h1 className="text-2xl font-bold">Pragmatic tools</h1>
      <span className="text-xl"> Vs code, Git, GitHub, Chrome dev tools </span>
      </div>

      <div className="mt-16">
      <h1 className="text-2xl font-bold">Deployment tools</h1>
      <span className="text-xl"> Vercel, Netlify, Serge </span>
      </div>


    </div>
  );
};

export default Skills;
