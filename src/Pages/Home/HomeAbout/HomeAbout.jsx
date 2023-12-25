import { Link } from "react-router-dom";
import pic from "../../../assets/logo/aboutMe2.png";

const HomeAbout = () => {
  return (

    <div>
      <div className="lg:ml-24">
        <h1 className="text-4xl font-bold">About Me</h1>
        <progress
          className="progress w-[100px] prog"
          value="20"
          max="100"
        ></progress>
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

          <Link to="/about">
            <div className="mt-6">
              <button className="heroBtn flex justify-center items-center gap-2 rounded-md text-white">
                See details
              </button>
            </div>
          </Link>
        </div>
      </section>
    </div>
    
  );
};

export default HomeAbout;
