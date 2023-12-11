import { Helmet } from "react-helmet-async";
import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Foyez | Home</title>
      </Helmet>

      <Hero></Hero>
    </div>
  );
};

export default Home;
