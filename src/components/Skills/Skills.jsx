import Marquee from "react-fast-marquee";

// SVG files
import PhotoShop from "/Service/Adobe_Photoshop.svg";
import bootstrap from "/Service/bootstrap.svg";
import bun from "/Service/Bun.svg";
import css from "/Service/css.svg";
import html from "/Service/html.svg";
import express from "/Service/express.svg";
import figma from "/Service/figma.svg";
import firebase from "/Service/firebase.svg";
import git from "/Service/git.svg";
import github from "/Service/github.svg";
import javascript from "/Service/javascript.svg";
import mongoDB from "/Service/mongoDB.svg";
import nextJs from "/Service/NextJs.svg";
import npm from "/Service/NPM.svg";
import react from "/Service/react.svg";
import tailwind from "/Service/tailwind.svg";
import vscode from "/Service/vscode.svg";
import zed from "/Service/zed.png";
import gimp from "/Service/gimp.svg";
import arch from "/Service/archlinux.svg";
import surge from "/Service/surge.svg";
import netlify from "/Service/netlify.svg";
import yarn from "/Service/yarn.svg";

const items = [
  { src: html, alt: "HTML" },
  { src: css, alt: "CSS" },
  { src: bootstrap, alt: "Bootstrap" },
  { src: tailwind, alt: "Tailwind CSS" },
  { src: javascript, alt: "JavaScript" },
  { src: react, alt: "React" },
  { src: nextJs, alt: "Next.js" },
  { src: express, alt: "Express.js" },
  { src: mongoDB, alt: "MongoDB" },
  { src: figma, alt: "Figma" },
  { src: PhotoShop, alt: "Photoshop" },
  { src: gimp, alt: "WordPress" },
  { src: git, alt: "Git" },
  { src: github, alt: "GitHub" },
  { src: firebase, alt: "Firebase" },
  { src: netlify, alt: "Netlify" },
  { src: surge, alt: "surge" },
  { src: npm, alt: "NPM" },
  { src: bun, alt: "Bun" },
  { src: yarn, alt: "Yarn" },
  { src: vscode, alt: "VSCode" },
  { src: zed, alt: "zed" },
  { src: arch, alt: "Arch Linux" },
];

const Skills = () => {
  return (
    <div className="z-10" id="skill">
      <header className="my-10 text-center ">
        <button className="text-xl md:text-3xl font-bold py-3 px-8 rounded-md bg white">
          Skills
        </button>
      </header>

      <Marquee
        gradient={false}
        speed={80}
        delay={0}
        play={true}
        direction="left"
      >
        <div className="flex gap-8 my-8 md:my-10">
          {items.map((item) => (
            <ul key={item.alt}>
              <img
                src={item.src}
                alt={item.alt}
                className="w-16 md:w-20 h-16 md:h-20 object-contain"
              />
            </ul>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Skills;
