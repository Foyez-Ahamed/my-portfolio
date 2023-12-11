import { Helmet } from "react-helmet-async";
import Hero from "../Hero/Hero";
import HomeProjects from "../HomeProjects/HomeProjects";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Foyez | Home</title>
      </Helmet>

      
      <Hero></Hero>

      <div>
        <HomeProjects></HomeProjects>
      </div>
     

    </div>
  );
};

export default Home;
