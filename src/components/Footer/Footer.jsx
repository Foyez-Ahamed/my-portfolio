import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineFollowTheSigns } from "react-icons/md"

const Footer = () => {
  return (
    <div>
      <footer className="footer items-center p-4 shadow-md">
        <aside className="items-center grid-flow-col">
          <Link to="/">
            <a className="cursor-pointer">
              {" "}
              <img
                className="w-[60px] lg:w-[60px] rounded-md lg:ml-[-12px] lg:pt-2 hidden lg:block"
                src={logo}
                alt="logo image"
              />{" "}
              {/* <h1 className="">Hi</h1> */}
            </a>
          </Link>

          <p>Copyright © 2023 - All right reserved foyezahamed</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">

        <div className="flex gap-4 mt-4">
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

        </nav>
      </footer>
    </div>
  );
};

export default Footer;
