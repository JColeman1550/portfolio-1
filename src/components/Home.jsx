import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen flex-[3] transition-all-duration-500 
        dark:bg-black dark:text-white">

      <main className="flex max-w-[1000px] flex-col gap-10 p-5
md:mx-10 md:py-14">


        <div className="space-y-5">
          <h1 className="text-2xl font-bold md:text-4xl">About</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">I’m a former collegiate athlete and school teacher. My passion for coding began when I discovered baseball analytics,
            learning how data visualization could illuminate insights and enhance performance.
            So in 2021, I embarked on my journey to becoming a full stack engineer and began teaching myself Python.
            Then, I delved deeper, exploring R to develop applications focused on pitcher performance analysis,
            which led me to showcase my work at the annual Saberseminar in Chicago – a pivotal moment in my journey.
            As a software engineer, I combine my unique blend of teaching and technical expertise to
            tackle challenges in software development. I’m eager to continue my journey in tech,
            bringing my drive for continuous learning and growth to a dynamic software development team.
          </p>
        </div>

        <div className="space-y-10">
          <h1 className="text-2xl font-bold 
    md:text-4xl">Projects</h1>

          <div className="flex flex-col lg:flex-row
    lg:gap-20">


            <ul>
              <li
                className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] 
before:top-1/2 before:h-3 before:w-3 
before: -translate-y1/2 before:rounded-full 
before:bg-black dark:before:bg-white before:transform"
              >
                <span className="text-lg font-semibold">
               <a href="https://julianc.vercel.app/">Personal Web Development Blog</a>   
                </span>

                <span className="font-light">
                  <img
                    src="https://github.com/JColeman1550/portfolio-1/blob/main/public/home-screen.png?raw=true"
                    alt="" />

                </span>

                <span className="text-sm 
              text-gray-400">
                  React, CSS
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Welcome to my personal blog, built with React! This is my space to document my journey as a developer—whether I’m tackling new projects, overcoming challenges, or breaking down what I’ve learned from reading, coding, and attending events.
                  It’s more than just a portfolio; it’s a journal of my growth in tech.
                  Each post reflects my thought process, problem-solving strategies, and the skills I’m sharpening along the way.
                  Beyond the blog, you’ll find an About Me page where I share more about my background and approach to development, plus links to my social media and past projects. Whether you’re a fellow dev, a recruiter, or just curious about what I’m building, feel free to explore, connect, and follow along!
                </p>
              </li>

              <li
                className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] 
before:top-1/2 before:h-3 before:w-3 
before: -translate-y1/2 before:rounded-full 
before:bg-black dark:before:bg-white before:transform"
              >
                <span className="text-lg font-semibold">
                 <a href="https://jobhitlist.netlify.app/">Job Hitlist</a>
                </span>

                <span className="font-light">
                  <img
                    src="https://github.com/JColeman1550/portfolio-1/blob/main/public/hl_home.png?raw=true"
                    alt="HL-pic"
                  />
                </span>

                <span className="text-sm 
              text-gray-400">
                  React, CSS, useState
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Hit List is a job-tracking web app built with React that helps users stay organized during the job search process.
                  With a clean, modern UI, it allows users to add, edit, delete, and filter job listings,
                  keeping track of crucial details like company name, location, and personal notes.
                  Whether you're applying to a few positions or managing a long list of opportunities,
                  Hit List makes it easy to stay on top of your applications.
                  The app features intuitive search and filtering options, so users can quickly find specific job listings.
                  The interface is designed with a responsive card-style layout, ensuring a smooth experience across all screen sizes. Built with React and CSS,
                  it leverages React hooks (useState) for state management, making interactions seamless and efficient.
                  Future updates will bring even more functionality, including API integration for fetching company data,
                  a light/dark mode toggle, and status tracking for applications (e.g., "Interview Scheduled," "Offer Received").
                </p>
              </li>
            </ul>

            <ul>
              <li
                className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] 
before:top-1/2 before:h-3 before:w-3 
before: -translate-y1/2 before:rounded-full 
before:bg-black dark:before:bg-white before:transform"
              >
                <span className="text-lg font-semibold">
                  <a href='https://web-production-6f765.up.railway.app/'>ThrowTrack</a>
                </span>

                <span className="font-light">
                  <img src="https://raw.githubusercontent.com/JColeman1550/throwTrack/refs/heads/main/tt-past-mobile.jpeg"
                    alt="TT-pic" />
                </span>

                <span className="text-sm 
              text-gray-400">
                  JavaScript, CSS, EJS
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  ThrowTrack is a web-based application designed to help pitchers at the youth level
                  track their pitching sessions with precision and care. Built with HTML, CSS, JavaScript, and Node.js,
                  ThrowTrack allows users to monitor essential metrics such as pitch count, ball/strike count, and pitches thrown in different strike zones. The app uses EJS templating to render dynamic content, offering an interactive and user-friendly experience for coaches, parents,
                  and pitchers themselves.
                  The primary goal of ThrowTrack is to promote the health and safety of young pitchers by providing a
                  tool that helps manage their workload and prevent overuse injuries. Users can easily add or subtract pitches,
                  track ball and strike counts, and visualize their performance across the different strike zones.
                  Past sessions are stored for future reference, ensuring that key pitching data is accessible for long-term development
                  and decision-making.
                </p>
              </li>

              <li
                className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] 
before:top-1/2 before:h-3 before:w-3 
before: -translate-y1/2 before:rounded-full 
before:bg-black dark:before:bg-white before:transform"
              >
                <span className="text-lg font-semibold">
                 <a href='https://github.com/JColeman1550/Flashcard-Game'>Flashcard Trivia Game</a>
                </span>

                <span className="font-light">
                  <img src="https://github.com/JColeman1550/portfolio-1/blob/main/public/trivia-cards.png?raw=true"
                    alt="Trivia-pic" />
                </span>

                <span className="text-sm 
              text-gray-400">
                  React, Axios, CSS
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Trivia App is an interactive trivia game built with React that allows users to test their knowledge in a fun and engaging way. With the ability to select a category and customize the number of questions, players can challenge themselves with flashcards that display questions on the front and answers on the back.
                  The app uses the Open Trivia Database API to fetch trivia questions and categories,
                  and Axios to handle API requests, offering a smooth and dynamic experience.
                  Designed with mobile users in mind, the app is fully responsive,
                  ensuring a seamless experience across devices. The user interface is simple and intuitive,
                  built with React.js, while basic structure and styling are handled with HTML and CSS.
                  Whether you’re testing your knowledge in a specific category or just looking for a fun way to learn,
                  Trivia App offers a customizable and engaging trivia experience!
                </p>
              </li>
            </ul>

          </div>
        </div>

        <div className="max-w-3xl space-y-8">
          <h1 className="text-2xl font-bold 
    md:text-4xl">Certifications</h1>

          <div className="space-y-10">
            <div className="text-baseline space-y-3">
              <h3 className="text-sm font-semibold 
        md:text-lg" >Certified Entry-Level Python Programmer (2024)</h3>
              <h4 className="text-sm font-semibold 
        md:text-lg">
                Python Institute
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400
        md:text:base">The Certified Entry-Level Python Programmer (PCEP) certification
                validates foundational knowledge of Python programming and core programming concepts.
                This certification demonstrates my proficiency in syntax, data types, control flow, functions,
                and basic troubleshooting. It also confirms my ability to write, analyze, and debug Python programs,
                laying a strong foundation for software development, data analysis, and automation.</p>
            </div>


            <div className="text-baseline space-y-3">
              <h3 className="text-sm font-semibold 
        md:text-lg" >Responsive Web Design (2024)</h3>
              <h4 className="text-sm font-semibold 
        md:text-lg">
                Free Code Camp
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400
        md:text:base">The Responsive Web Design Certification
                demonstrates my ability to build accessible, mobile-friendly, and visually appealing websites using HTML, CSS,
                and Flexbox/Grid layouts. This certification highlights my expertise in responsive design principles,
                ensuring seamless user experiences across various screen sizes and devices. Additionally,
                it showcases my skills in CSS animations, media queries, and best practices for modern web development,
                enabling me to create functional and engaging web interfaces.</p>
            </div>
            <div className="text-baseline space-y-3">
              <h3 className="text-sm font-semibold 
        md:text-lg" >Google Data Analytics Specialization (2023)</h3>
              <h4 className="text-sm font-semibold 
        md:text-lg">
                Google
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400
        md:text:base">The Google Data Analytics Specialization
                certifies proficiency in data cleaning, visualization, and analysis using tools like SQL, R, Tableau, and spreadsheets.
                This certification demonstrates the ability to collect, process, and interpret complex datasets, apply statistical thinking,
                and generate insights to drive data-informed decision-making. Additionally, it highlights my expertise in data storytelling,
                dashboard creation,
                and problem-solving, equipping the skills to work in real-world analytics environments.</p>
            </div>

          </div>
        </div>
      </main>


    </div> // Home takes 75% of viewport
  )

}

export default Home