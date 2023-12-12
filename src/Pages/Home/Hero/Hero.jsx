import heroPic from "../../../assets/Hero/hero.png";
import "../Hero/Hero.css";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineFollowTheSigns } from "react-icons/md";
const Hero = () => {
  return (
    <div>
      <section className="flex flex-col lg:flex-row justify-between items-center gap-4">
        <div
          className="flex-1 lg:ml-24 space-y-4"
          data-aos="zoom-in-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
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
            download
            rel="noopener noreferrer"
          >
            <button className="heroBtn flex justify-center items-center gap-2 rounded-md text-white ">
              My Resume{" "}
              <MdOutlineFileDownload className="text-xl mt-1"></MdOutlineFileDownload>
            </button>
          </a>

          <div className="flex gap-4">
            <h1 className="flex justify-center items-center">
              <MdOutlineFollowTheSigns className="text-2xl text-[#006566]"></MdOutlineFollowTheSigns>
            </h1>

            <a
              href="https://www.linkedin.com/in/foyez-ahamed/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <span className="text-2xl text-[#0077B5]">
                <FaLinkedin></FaLinkedin>
              </span>{" "}
            </a>

            <a
              href="https://github.com/Foyez-Ahamed"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <span className="text-2xl text-gray-700">
                <FaGithub></FaGithub>
              </span>{" "}
            </a>

            <a
              href="https://web.facebook.com/foyezahamed1435/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <span className="text-2xl text-[#1877F2] ">
                <FaFacebook></FaFacebook>
              </span>{" "}
            </a>
            <a
              href="https://twitter.com/foyezahamed1435"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <span className="text-2xl text-[#1DA1F2]">
                <FaTwitter></FaTwitter>
              </span>{" "}
            </a>
          </div>
        </div>

        <div
          className="flex-1 hero"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1500"
        >
          <img src={heroPic} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
