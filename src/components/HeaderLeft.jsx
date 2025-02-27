import React from "react";
import image from "/public/IMG_2968.jpg"; // importing my headshot
import {
  BiMoon,
  BiSun,
  BiCurrentLocation,
  BiEnvelope,
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";
const HeaderLeft = ({ darkMode, toggleDarkMode }) => {
  return (
    // HeaderLeft takes 25% of viewport
    // creates dark gray border between headerLeft & Home sections
    <div
      className="min-h-screen flex-1 relative p-10 transition-all duration-500 
         dark:bg-black dark:text-white sm:border-r dark:border-white-700"
    >
      <div className="flex flex-col gap-5">
        <div
          className="flex flex-col items-center
            justify-center gap-5"
        >
          <img
            src={image}
            alt=""
            className="w-32
                    rounded-full"
          />

          <div className="text-center space-y-1">
            <h1 className="text-4xl font-semibold">
              Julian
              <span className="text-4xl font-light"> T. </span>
              <span className="font-semibold">Coleman</span>
            </h1>
            <h3 className="text-4xl font-light">Software Engineer</h3>
          </div>
          <button className="absolute right-10 top-10" onClick={toggleDarkMode}>
            {
              // if darkMode is on
              darkMode ? (
                <BiSun className="text-2xl" />
              ) : (
                <BiMoon className="text-2xl" />
              )
            }
          </button>
        </div>
        <div
          className="flex flex-col items-start justify-start gap-5 border-b p-5 
                 dark:border-gray-700"
        >
          <ul className="space-y-3">
            <li className="flex-items-center gap-2">
              <BiCurrentLocation className="text-xl" />
              <span>Boston, MA</span>
            </li>

            <li className="flex-items-center gap-2">
              <BiEnvelope className="text-xl" />
              <span>juliantcoleman1@gmail.com</span>
            </li>
          </ul>
        </div>

        <div
          className="flex flex-col items-start justify-start gap-5 border-b p-5
                    dark:border-gray-700"
        >
          <h1
            className="text-baes font-semibold 
                    md:text-2x1"
          >
            SOCIAL MEDIA
          </h1>

          <ul className="space-y-3">
            <li className="flex-items-center gap-2">
              <BiLogoGithub className="text-xl" />
              <span>
                <a href="https://github.com/JColeman1550">@JColeman1550</a>
              </span>
            </li>

            <li className="flex-items-center gap-2">
              <BiLogoLinkedin className="text-xl" />
              <span>
                <a href="https://www.linkedin.com/in/juliantcoleman/">
                  juliantcoleman
                </a>
              </span>
            </li>

            <li className="flex-items-center gap-2">
              <BiLogoTwitter className="text-xl" />
              <span>
                <a href="https://x.com/Julian__TD">Julian__TD</a>
              </span>
            </li>
          </ul>
        </div>

        <div
          className="flex flex-col items-start justoify-start
    gap-5 border-b p-5 dark: border-gray-700"
        >
          <h1
            className="text-baes font-semibold 
md:text-2x1"
          >
            EDUCATION
          </h1>

          <ul>
            <li
              className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] 
before:top-1/2 before:h-3 before:w-3 
before: -translate-y1/2 before:rounded-full 
before:bg-black dark:before:bg-white before:transform"
            >
              <span className="font-semibold md:text-lg">
                Political Science
              </span>
              <span className="font-light">
                University of Southern California
              </span>
              <span className="text-sm text-gray-400">2012-2014</span>
            </li>

            <li
              className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] 
before:top-1/2 before:h-3 before:w-3 
before: -translate-y1/2 before:rounded-full 
before:bg-black dark:before:bg-white before:transform"
            >
              <span className="font-semibold md:text-lg">
                Certified Entry-Level Python Programmer
              </span>
              <span className="font-light">Python Institute</span>
              <span className="text-sm text-gray-400">2024</span>
            </li>
          </ul>
        </div>

        <div
          className="flex flex-col items-start justify-start gap-5 border-b p-5 
                 dark:border-gray-700"
        >
          <h1 className="text-base font-semibold md: 2xl">SKILLS</h1>

          <div className="flex flex-wrap gap-3">
            <div className="flex flex-wrap gap-3">
              <span
                className="rounded-xl bg-black text-white p-3 text-center 
            dark:bg-white dark:text-black"
              >
                HTML 5
              </span>
              <span
                className="rounded-xl bg-black text-white p-3 text-center 
            dark:bg-white dark:text-black"
              >
                CSS
              </span>
              <span
                className="rounded-xl bg-black text-white p-3 text-center 
            dark:bg-white dark:text-black"
              >
                JavaScript
              </span>
              <span
                className="rounded-xl bg-black text-white p-3 text-center 
            dark:bg-white dark:text-black"
              >
                Node.JS
              </span>
              <span
                className="rounded-xl bg-black text-white p-3 text-center 
            dark:bg-white dark:text-black"
              >
                React
              </span>

              <div className="flex flex-wrap gap-3">
                <span
                  className="rounded-xl bg-black text-white p-3 text-center 
            dark:bg-white dark:text-black"
                >
                  MongoDB
                </span>
                <span
                  className="rounded-xl bg-black text-white p-3 text-center 
            dark:bg-white dark:text-black"
                >
                  Python
                </span>
                <span
                  className="rounded-xl bg-black text-white p-3 text-center 
            dark:bg-white dark:text-black"
                >
                  Public Speaking
                </span>
                <span
                  className="rounded-xl bg-black text-white p-3 text-center 
            dark:bg-white dark:text-black"
                >
                  R
                </span>
                <span
                  className="rounded-xl bg-black text-white p-3 text-center 
            dark:bg-white dark:text-black"
                >
                  Shiny App
                </span>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col items-start justify-start gap-5 border-b p-5 
                 dark:border-gray-700"
          >
            <h1
              className="text-baes font-semibold 
md:text-2x1"
            >
              Experience
            </h1>

            <div className="flex flex-wrap gap-16 p-3">
              <ul className="flex list-disc flex-col gap-3">
                <li>Full Stack Engineer - Resilient Coders</li>
                <li>Software Engineer Freelancer</li>
                <li>Data Analyst Contractor</li>
                <li>ELA Teacher - Neighborhood House</li>
             </ul>

            </div>
          </div>




        </div>
      </div>
    </div>
  );
};

export default HeaderLeft;
