import { useRef } from "react";
import "../Contact/Contact.css";


import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

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
          toast.success('Send Message Successfully')
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
    <div>
      <div className="lg:ml-24">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <progress
          className="progress w-[100px] prog"
          value="20"
          max="100"
        ></progress>
      </div>

      <section className="flex flex-col lg:flex-row justify-between items-center gap-4 mt-10">
        <div className="flex-1"></div>

        <div className="flex-1 space-y-4">
          {/*  */}
          <div>
            <div className="flex justify-center">
              <div className="shadow-xl p-8 w-full md:w-[450px] lg:w-[450px] rounded-xl bg-gray-100">
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
