import { useRef } from "react";
import "../Contact/Contact.css";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import { AiFillPhone, AiTwotoneMail, AiFillHome } from "react-icons/ai";

// import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
// import { MdOutlineFollowTheSigns } from "react-icons/md"

const Contact = () => {
  const form = useRef();

  const handleContact = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6wvoe9f",
        "template_e3bjd9c",
        form.current,
        "EDsO98koIDTArdR6k"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Send Message Successfully");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );

    // const form = new FormData(e.currentTarget);
    // const name = form.get('name');
    // const email = form.get('email');
    // const message = form.get('message');

    // console.log(name, email, message);
  };

  return (
    <div className="dark:bg-zinc-900">
      <div className="lg:ml-24">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <progress
          className="progress w-[100px] prog"
          value="20"
          max="100"
        ></progress>
      </div>

      <section className="flex flex-col lg:flex-row justify-between items-center gap-4 mt-10">
        <div className="flex-1 lg:ml-24 space-y-4">
          <div
            className="shadow-md p-6 bg-gray-100 dark:bg-zinc-900"
            data-aos="zoom-in-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2">
                {" "}
                <AiFillHome className=""></AiFillHome> Uttara, Dhaka, Bangladesh
              </li>
              <li className="flex items-center gap-2">
                <AiFillPhone className=""></AiFillPhone> +8801614145039
              </li>
              <li className="flex items-center gap-2">
                <AiTwotoneMail className=""></AiTwotoneMail>
                foyezahamedwd@gmail.com
              </li>
            </ul>

            {/* <div className="flex gap-4 mt-4">
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
            </div> */}
          </div>
        </div>

        <div className="flex-1 space-y-4">
          {/*  */}
          <div>
            <div className="flex justify-center">
              <div className="shadow-xl p-8 w-full md:w-[450px] lg:w-[450px] rounded-xl bg-gray-100 dark:bg-zinc-900">
                <form ref={form} onSubmit={handleContact}>
                  <div className="relative">
                    <input
                      type="Text"
                      placeholder="Enter name Here..."
                      name="user_name"
                      required
                      className=" mt-4 mb-4 input  w-full md:w-[390px] lg:w-[390px]"
                    />{" "}
                    <br />
                    <input
                      type="email"
                      placeholder="Enter email Here..."
                      name="user_email"
                      required
                      className=" mt-4 mb-4 input w-full md:w-[390px] lg:w-[390px]"
                    />{" "}
                    <br />
                    <textarea
                      className="textarea mt-4 mb-4 w-full md:w-[390px] lg:w-[390px] "
                      placeholder="Enter Message Here"
                      name="message"
                      required
                    ></textarea>
                    <br />
                    <input
                      type="submit"
                      value="Send Message"
                      className=" btn w-full md:w-[390px] lg:w-[390px] mt-5 font-bold  text-white submitBg"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </section>
    </div>
  );
};

export default Contact;
