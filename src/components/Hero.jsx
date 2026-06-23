import Icons from "./Icons";
import StarField from "./StarField";
import profile from "./assets/profile.png";

const Hero = () => {
  return (
    <StarField>
      <section
        id="hero"
        className="h-screen  text-white z-10 px-4 md:px-8 lg:px-10"
      >
        <div className="flex h-full flex-col items-center  text-center md:flex-row  md:text-left ">
          <div className="mt-8 flex space-x-4 order-0 md:space-x-0  lg:order-2">
            <img
              src={profile}
              alt="Hero Image"
              className="w-50 object-contain  md:w-250"
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold  md:text-6xl lg:text-7xl">
              Hi, I'm <span className="text-blue-500 z-[-10]">Sadik</span>
            </h1>
            <p className="mt-4 text-lg leading-6 md:text-xl lg:text-2xl lg:leading-12">
              I am motivated and enthusiastic about web development, constantly
              seeking to learn and grow in this ever-evolving field. I am
              passionate about creating innovative and user-friendly web
              applications that make a positive impact on people's lives.
            </p>
            <Icons />
            <div className="flex justify-center mt-[30px]  md:mt-[50px] ">
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
