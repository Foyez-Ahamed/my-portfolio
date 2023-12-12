import { AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { HiReceiptRefund } from "react-icons/hi";
import { useTheme } from "../../hooks/useTheme";
import { FaMoon } from 'react-icons/fa';
import { BsFillSunFill } from 'react-icons/bs';

const Navbar = () => {

  const {changeTheme, mode} = useTheme();

  const navItems = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isActive
            ? "text-[#006566]"
            : isPending
            ? "pending"
            : ""
        }
      >
        <li className="text-[16px] ml-4 font-medium hover:text-[#006566] transition-all duration-300 ease-in-out ">Home</li>
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isActive ? "text-[#006566]" : isPending ? "pending" : ""
        }
      >
        <li className="text-[16px] font-medium ml-4 hover:text-[#006566] transition-all duration-300 ease-in-out">About Me</li>
      </NavLink>

      <NavLink
        to="/skills"
        className={({ isActive, isPending }) =>
          isActive ? "text-[#006566]" : isPending ? "pending" : ""
        }
      >
        <li className="text-[16px] font-medium  ml-4 hover:text-[#006566] transition-all duration-300 ease-in-out">Skills</li>
      </NavLink>

      <NavLink
        to="/projects"
        className={({ isActive, isPending }) =>
          isActive ? "text-[#006566]" : isPending ? "pending" : ""
        }
      >
        <li className="text-[16px] font-medium ml-4 hover:text-[#006566] transition-all duration-300 ease-in-out">Projects</li>
      </NavLink>
    </>
  );

  return (
    <div>
      <div className="navbar rounded-md shadow-md dark:bg-zinc-900 dark:text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <AiOutlineMenu className="text-2xl"></AiOutlineMenu>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-4] dark:text-black"
            >
              {navItems}
            </ul>
          </div>

          <div className="flex justify-center items-center">
            <Link to="/">
              <a className="cursor-pointer">
                {" "}
                <img
                  className="w-[60px] lg:w-[60px] rounded-md lg:ml-[-12px] lg:pt-2 hidden lg:block"
                  src={logo}
                  alt="logo image"
                />{" "}
              </a>
            </Link>

            {/* dark theme  */}

            <button onClick={changeTheme} className="mt-[-4px] lg:mt-0"> {mode === 'dark'? <BsFillSunFill className="lg:text-xl"></BsFillSunFill> : <FaMoon className="lg:text-xl"></FaMoon>} </button>

          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>

        <div className="navbar-end">
          <a
            href="https://drive.google.com/file/d/19ZTB0IvwEz56nv55ZslesUm8QZOAwv-d/view?usp=drive_link"
            target="_blank"
            download
            rel="noopener noreferrer"
          >
            <button className="btn btn-outline border-2 border-[#006566] font-medium hover:bg-transparent hover:border-transparent transition-all duration-300 transform hover:scale-105 hover:text-[#006566] dark:text-white">
              Hire Me <HiReceiptRefund className="text-xl"></HiReceiptRefund>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
