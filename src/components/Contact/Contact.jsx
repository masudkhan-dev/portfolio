import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaQuora,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaDiscord,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import "./Contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <footer className="w-[95%] mx-auto" id="contact">
      <header className="my-10 text-center mt-32">
        <button className="text-xl md:text-3xl font-bold py-3 px-8 rounded-md bg white">
          Who Am I
        </button>
      </header>

      <main className="my-2 md:my-10  ">
        <div className="container md:w-[1200px] mx-auto mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
            <div className="flex flex-col justify-center items-start px-8 md:ml-[15%] gap-5">
              <h2 className="text-3xl md:text-5xl font-bold font-t text-[#170602]">
                Lets Connect
              </h2>
              <div>
                <ul className=" font-t text-base gap-3 flex flex-col justify-start items-start">
                  <li className=" cursor-pointer italic flex flex-row items-center  gap-2">
                    <FaLocationDot></FaLocationDot>
                    Sirajganj Bangladesh
                  </li>
                  <li className="cursor-pointer italic flex flex-row items-center  gap-2">
                    <IoCall></IoCall>
                    +880 1627 282572
                  </li>

                  <li className="cursor-pointer italic flex flex-row items-center gap-2">
                    <IoMdMail></IoMdMail>
                    masudkhan.dev@gmail.com
                  </li>
                </ul>
              </div>

              <div>
                {/* Social Media */}
                <div className="">
                  <div className="flex gap-5 text-base md:text-xl justify-center items-center ">
                    <div className="Scard">
                      <Link
                        className="socialContainer containerOne  shadow-xl hover:shadow-none "
                        target="blank"
                        to="https://www.facebook.com/masudkhan.dev/"
                      >
                        <FaFacebookF className="socialSvg FacebookSvg" />
                      </Link>
                      <Link
                        to="https://x.com/masudkhan_dev"
                        className="socialContainer containerTwo  shadow-xl hover:shadow-none "
                        target="blank"
                      >
                        <FaTwitter className="socialSvg  twitterSvg" />
                      </Link>

                      <Link
                        to="https://www.instagram.com/masudkhan.dev/"
                        className="socialContainer containerThree shadow-xl hover:shadow-none"
                        target="blank"
                      >
                        <FaInstagram className="socialSvg  instagramSvg" />
                      </Link>

                      <Link
                        className="socialContainer containerFour  shadow-xl hover:shadow-none "
                        to="https://wa.me/+8801627282572"
                        target="blank"
                      >
                        <FaWhatsapp className="socialSvg whatsappSvg" />
                      </Link>

                      <Link
                        className="socialContainer containerFive  shadow-xl hover:shadow-none "
                        to="https://t.me/the_professor_666"
                        target="blank"
                      >
                        <FaTelegramPlane className="socialSvg twitterSvg" />
                      </Link>
                    </div>
                  </div>

                  <div className="flex justify-center items-center text-base md:text-xl  mt-5">
                    <div className="Scard">
                      <Link
                        className="socialContainer containerSix  shadow-xl hover:shadow-none "
                        to="https://bn.quora.com/profile/Mr-Problem-1"
                        target="blank"
                      >
                        <FaQuora className="socialSvg FacebookSvg" />
                      </Link>
                      <Link
                        className="socialContainer containerSeven  shadow-xl hover:shadow-none "
                        to="https://www.pinterest.com/masudkhandev/"
                        target="blank"
                      >
                        <FaPinterest className="socialSvg  twitterSvg" />
                      </Link>

                      <Link
                        to="https://www.linkedin.com/in/masud-khan-dev/"
                        className="socialContainer containerEight  shadow-xl hover:shadow-none "
                        target="blank"
                      >
                        <FaLinkedinIn className="socialSvg  instagramSvg" />
                      </Link>

                      <Link
                        to="https://github.com/masudkhan-dev"
                        className="socialContainer containerNine  shadow-xl hover:shadow-none "
                        target="blank"
                      >
                        <FaGithub className="socialSvg whatsappSvg" />
                      </Link>

                      <Link
                        to="https://discord.com/channels/@masudkhan.dev"
                        className="socialContainer containerTen  shadow-xl hover:shadow-none "
                        target="blank"
                      >
                        <FaDiscord className="socialSvg twitterSvg" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="flex justify-center md:justify-start items-center my-10 ">
              <form className="flex flex-col gap-5 w-[20em] md:w-[35em] py-10 px-8 md:px-10 rounded-lg shadow-xl">
                <div className="flex flex-col">
                  <label
                    htmlFor=""
                    className="font-bold text-lg text-[#170602]"
                  >
                    User Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Name"
                    required
                    className=" border-2 border-[#170602] rounded w-full bg-[#fff] p-3 mt-2 text-[#170602]"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor=""
                    className="font-bold text-lg text-[#170602]"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="from_email"
                    placeholder="Email"
                    required
                    className="border-2 border-[#170602] rounded w-full bg-[#fff] p-3 mt-2 text-[#170602]"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor=""
                    className="font-bold text-lg text-[#170602]"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id=""
                    cols="20"
                    rows="5"
                    placeholder="Tell me something..."
                    className="border-2 border-[#170602] w-full rounded bg-[#fff] p-3 mt-2 text-[#170602]"
                  ></textarea>
                </div>
                <div className="flex justify-center items-center gap-10 ">
                  <input
                    name="message"
                    type="submit"
                    value="Send Message"
                    className="bg white py-3 rounded-md shadow-xl w-full"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </footer>
  );
};

export default Contact;
