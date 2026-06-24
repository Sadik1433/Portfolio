// react icons
import { MdOutlineCall, MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import Footer from "./Footer";

const Contact = () => {
  return (
    <section id="contact" className="w-full px-2">
      <div className="px-2">
        <h5 className="text-lg font-bold text-[var(--color-primary)]">Get In Touch</h5>
        <p className="mt-4 text-lg leading-6 md:text-xl lg:text-2xl lg:leading-10">
          I am actively seeking internship and entry-level opportunities where I
          can apply my skills, learn from experienced professionals, and
          contribute to meaningful projects. Feel free to reach out for
          collaborations, project discussions, or career opportunities.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[35px] boxShadow p-[30px]  rounded-xl">
        <aside className="w-full flex flex-col rounded-md">
          <div className="mb-10">
            <h1 className="text-[2rem] font-[600] leading-[35px] text-[var(--color-info)]">
              Contact Information
            </h1>
          </div>

          <div className="flex flex-col gap-[20px] text-xl   lg:2xl">
            <p className="flex items-center gap-[8px]">
              <MdOutlineCall />
              +8801305282768
            </p>
            <p className="flex items-center break-all gap-[8px]">
              <MdOutlineEmail />
              zenuilibrary@gmail.com
            </p>
            <p className="flex items-center gap-[8px]">
              <IoLocationOutline />
              Kulaura, Moulvibazar, Sylhet
            </p>
          </div>

          <div className="flex gap-[15px] flex-wrap text-black mt-8">
            <a className="text-[1.3rem] p-1.5 cursor-pointer rounded-full bg-orange-500 text-white hover:bg-white hover:text-orange-500 transition-all duration-300  boxShadow">
              <CgFacebook />
            </a>
            <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full  bg-orange-500 text-white hover:bg-white hover:text-orange-500 transition-all duration-300 boxShadow">
              <BsTwitter />
            </a>
            <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-orange-500 text-white hover:bg-white hover:text-orange-500 transition-all duration-300  boxShadow">
              <BsInstagram />
            </a>
            <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full  bg-orange-500 text-white hover:bg-white hover:text-orange-500 transition-all duration-300 boxShadow">
              <BsLinkedin />
            </a>
          </div>
        </aside>

        {/* form area */}
        <form>
          <div className="flex flex-col sm:flex-row items-center gap-[30px]">
            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
              <label className="text-[1rem] dark:text-[#abc2d3] text-gray-700">
                First Name
              </label>
              <input
                type="text"
                className="peer dark:bg-transparent dark:text-[#abc2d3] dark:border-slate-700 border-gray-300 border-b outline-none focus:border-[#3B9DF8] w-full text-gray-400 transition-colors duration-300"
              />
            </div>

            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
              <label className="text-[1rem] dark:text-[#abc2d3] text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                className="peer dark:bg-transparent dark:text-[#abc2d3] dark:border-slate-700 border-gray-300 border-b outline-none focus:border-[#3B9DF8] w-full text-gray-400 transition-colors duration-300"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-[30px] mt-10">
            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
              <label className="text-[1rem] dark:text-[#abc2d3] text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                className="peer dark:bg-transparent dark:text-[#abc2d3] dark:border-slate-700 border-gray-300 border-b outline-none focus:border-[#3B9DF8] w-full text-gray-400 transition-colors duration-300"
              />
            </div>

            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
              <label className="text-[1rem] dark:text-[#abc2d3] text-gray-700">
                Phone Number
              </label>
              <input
                type="number"
                className="peer dark:bg-transparent dark:text-[#abc2d3] dark:border-slate-700 border-gray-300 border-b outline-none focus:border-[#3B9DF8] w-full text-gray-400 transition-colors duration-300"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[5px] w-full mt-10">
            <label className="text-[1rem] dark:text-[#abc2d3] text-gray-700">
              Write Message
            </label>
            <textarea className="peer dark:bg-transparent dark:text-[#abc2d3] dark:border-slate-700 min-h-[100px] border-gray-300 border-b resize-none outline-none w-full text-gray-400 transition-colors focus:border-[#3B9DF8] duration-300"></textarea>
          </div>

          <div className="w-full flex items-center sm:items-end justify-center sm:justify-end mt-5">
            <button
              type="submit"
              className="dark:border-slate-700 dark:text-[#abc2d3] dark:hover:bg-slate-900 dark:hover:text-[#abc2d3] dark:hover:border-slate-700 py-2.5 px-6 bg-gray-800 border transition-all duration-300 hover:border-gray-800 hover:text-gray-800 hover:bg-transparent text-white rounded-md text-[1rem] mt-[10px] w-max"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div className="relative bottom-0">
        <Footer />
      </div>
    </section>
  );
};

export default Contact;
