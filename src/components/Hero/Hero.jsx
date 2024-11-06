import { TypeAnimation } from "react-type-animation";
import Particles from "../../Utility/particles";
import dp from "/dp2.png";

const Hero = () => {

  const handleResume = () => {
    window.open(
      "https://drive.google.com/file/d/1Xfk5OtklleVHU2UBxk5chHu1fsSKesyN/view?usp=sharing",
      "_blank",
      "noopener noreferrer"
    );
  };

  return (
    <div className=" ">
      <Particles />
      <div className="">
        <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between md:items-center  w-[95%] mx-auto h-screen md:px-16 ">
          <div className="flex flex-col justify-start items-start z-20 gap-y-3 md:gap-y-5">
            <h2 className="text-xl">Hi there,</h2>
            <h2 className="text-4xl font-bold">
              I&apos;m{" "}
              <span className="blue">
                {" "}
                Masud{" "}
                <span className="bg white px-2 rounded shadow-xl">
                  Khan{" "}
                </span>{" "}
              </span>
            </h2>

            <TypeAnimation
              sequence={[
                "Mern Stack Developer.",
                1000,
                "Canva Designer.",
                1000,
                "Content Writer.",
                1000,
                "Data Entry.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="blue font-bold inline-block text-3xl md:text-6xl"
              repeat={Infinity}
            />
            <button onClick={handleResume} className="bg white px-5 py-3 rounded-md text-base md:text-xl">
              Resume
            </button>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={dp}
              alt="dp"
              className="rounded-full border-8 border-[#0a66c2] shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
