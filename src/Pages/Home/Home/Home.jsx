import { Helmet } from "react-helmet-async";
import Hero from "../Hero/Hero";
import HomeProjects from "../HomeProjects/HomeProjects";
import HomeAbout from "../HomeAbout/HomeAbout";
import Technologies from "../Technologies/Technologies";

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

      
      <div className="mt-16">
        <Technologies></Technologies>
      </div>
     

    </div>
  );
};

export default Home;
