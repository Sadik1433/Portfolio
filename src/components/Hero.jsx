import Icons from "./Icons";
import StarField from "./StarField";
import profile from "./assets/profile.png";

const Hero = () => {
  return (
    <StarField>
      <section
        id="hero"
        className="z-10 h-screen text-white px-4 md:px-8 lg:px-16"
      >
        <div className="flex h-full flex-col items-center  text-center">
          <div className="mt-8 flex space-x-4">
            <img
              src={profile}
              alt="Hero Image"
              className="w-100 object-cover rounded-full"
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl">
              Hi, I'm <span className="text-blue-500 z-[-10]">Sadik</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl lg:text-2xl">
              I am motivated and enthusiastic about web development, constantly
              seeking to learn and grow in this ever-evolving field. I am
              passionate about creating innovative and user-friendly web
              applications that make a positive impact on people's lives.
            </p>
          </div>
          <div className="">
            <Icons />
          </div>
        </div>
      </section>
    </StarField>
  );
};

export default Hero;
