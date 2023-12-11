import heroPic from "../../../assets/Hero/hero.png";
import "../Hero/Hero.css";

const Hero = () => {
  return (
    <div>
      <section className="flex flex-col lg:flex-row justify-between items-center gap-4">
        <div className="flex-1 lg:ml-24 space-y-4">
          <h1 className="tagline text-white rounded-md">
            Welcome to my portfolio
          </h1>
          <h2 className="text-4xl font-bold">
            Hello! I am <br /> Foyez Ahamed <br />{" "}
            <span className="text-[18px]"> Junior Web Developer</span>{" "}
          </h2>

          <a
            className="inline-block"
            href="https://drive.google.com/file/d/19ZTB0IvwEz56nv55ZslesUm8QZOAwv-d/view?usp=drive_link"
            rel="noopener noreferrer"
          >
            <button className="heroBtn rounded-md text-white ">Resume</button>
          </a>
        </div>

        <div className="flex-1 hero">
          <img src={heroPic} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
