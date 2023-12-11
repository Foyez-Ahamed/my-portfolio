import { Helmet } from "react-helmet-async";
import Hero from "../Hero/Hero";
import HomeProjects from "../HomeProjects/HomeProjects";
import HomeAbout from "../HomeAbout/HomeAbout";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Foyez | Home</title>
      </Helmet>

      
      <Hero></Hero>

      <div className="mt-16">
        <HomeProjects></HomeProjects>
      </div>

      <div className="mt-16">
        <HomeAbout></HomeAbout>
      </div>
     

    </div>
  );
};

export default Home;
