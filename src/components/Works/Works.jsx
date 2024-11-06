import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay  } from "swiper/modules";

import w1 from "/works/w-01.png";
import w2 from "/works/w-02.png";
import w3 from "/works/w-03.png";
import w4 from "/works/w-04.png";
import w5 from "/works/w-05.png";
import w6 from "/works/w-06.png";
import w7 from "/works/w-07.png";

const cards = [
  {
    id: 1,
    src: w1,
    title: "Book Vibe",
    description: "A beautiful collection of books that will make you happy.",
    language: ["React.js", "Tailwind CSS"],
    live: "https://aspiring-bee.surge.sh/",
    code: "https://github.com/masudkhan-dev/book-vibe",
  },
  {
    id: 2,
    src: w2,
    title: "Zjox Softwarks",
    description: "A beautiful design of practice.",
    language: ["React.js", "Tailwind CSS"],
    live: "https://sturdy-screw.surge.sh/",
    code: "https://github.com/masudkhan-dev/zjox-softwarks",
  },
  {
    id: 3,
    src: w3,
    title: "Alpha Clash Pro",
    description:
      "A beautiful game of everyone who want to make typing speed faster.",
    language: ["JavaScript", "Tailwind CSS"],
    live: "https://alpha-clash-pro-1.netlify.app/",
    code: "https://github.com/masudkhan-dev/alpha-clash-pro",
  },
  {
    id: 4,
    src: w4,
    title: "Weather APP",
    description: "You can see live weather from this app",
    language: ["JavaScript", "CSS"],
    live: "https://masudkhan-dev.github.io/weather/",
    code: "https://github.com/masudkhan-dev/weather",
  },
  {
    id: 5,
    src: w5,
    title: "Calculator",
    description: "Calculator for HSC Students focus on ict calculator",
    language: ["React.js", "Tailwind CSS"],
    live: "https://mrkcalculator.netlify.app/",
    code: "https://github.com/masudkhan-dev/calculator",
  },
  {
    id: 6,
    src: w6,
    title: "Geimetric Genious",
    description: "You can convert geometric things very easily",
    language: ["JavaScript", "Tailwind CSS"],
    live: "https://geometry-genious1.netlify.app/",
    code: "https://github.com/masudkhan-dev/geometric-genious",
  },
  {
    id: 7,
    src: w7,
    title: "CV Builder",
    description:
      "Easily build cv without any isssues. Just fill the form and print the cv",
    language: ["React.js", "Tailwind CSS"],
    live: "https://mrkcvbuilder.netlify.app/",
    code: "https://github.com/masudkhan-dev/CV-Builder",
  },
];

const Works = () => {
  return (
    <div className="w-[95%] mx-auto" id="work">
      <header className="my-10 text-center mt-32">
        <button className="text-xl md:text-3xl font-bold py-3 px-8 rounded-md bg white">
          My Works
        </button>
      </header>

      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 2000 }}
          delay
          freeMode={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper grid grid-cols-1 md:grid-cols-3"
        >
          {cards.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-56 w-full object-cover"
                  />

                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-900">
                      {item.title}
                    </h3>

                    <p className="my-2 line-clamp-3 text-sm/relaxed text-gray-500">
                      {item.description}
                    </p>

                    <div className="space-x-2">
                      <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                        {item.language[0]}
                      </span>
                      <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                        {item.language[1]}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <Link
                        to={item.live}
                        target="blank"
                        className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                      >
                        Live
                        <span className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                          &rarr;
                        </span>
                      </Link>

                      <Link
                        to={item.code}
                        target="blank"
                        className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                      >
                        Code
                        <span className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                          &rarr;
                        </span>
                      </Link>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Works;
