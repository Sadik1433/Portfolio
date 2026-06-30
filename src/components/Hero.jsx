import Icons from "./Icons";
import StarField from "./StarField";
import profile from "./assets/profile.png";

const Hero = () => {
  return (
    <StarField>
      <section
        id="hero"
        className="z-10 px-4 py-2 md:px-5 lg:px-10 lg:h-screen"
      >
        <div className="flex h-full flex-col items-center  text-center md:flex-row   md:text-left ">
          <div className="mt-8 flex space-x-4 order-0 md:space-x-0 md:order-1 lg:order-2" data-aos={window.innerWidth < 768 ? "fade-up" : "fade-left"} data-aos-duration="1000">
            <img
              src={profile}
              alt="Hero Image"
              className="w-40 md:w-50 object-contain  md:w-250"z
            />
          </div>
          <div className="md:mt-18"  data-aos="fade-right" data-aos-duration="1000">
            <h1 className="text-2xl text-white font-bold text-left md:text-3xl lg:text-5xl">
              Hi, I'm <span className="text-blue-500 z-[-10] name-text">Sadik</span>
            </h1>
            <p className="mt-2 text-white text-lg leading-6 md:text-xl md:mt-4  lg:text-2xl lg:leading-12">
              I am motivated and enthusiastic about web development, constantly
              seeking to learn and grow in this ever-evolving field. I am
              passionate about creating innovative and user-friendly web
              applications that make a positive impact on people's lives.
            </p>
            <Icons />
            <div className="flex justify-center  mt-[0px]  md:mt-[50px] ">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-lg  btn-outline btn-primary">Resume</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </StarField>
  );
};

export default Hero;
