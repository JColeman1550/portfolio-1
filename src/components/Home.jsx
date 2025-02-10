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
        which led me to showcase my work at an analytics conference in Chicago – a pivotal moment in my journey. 
        As a software engineer, I combine my unique blend of teaching and technical expertise to 
        tackle challenges in software development. I’m eager to continue my journey in tech, 
        bringing my drive for continuous learning and growth to a dynamic software development team.
</p>
</div>

<div className="space-y-10">
    <h1 className="text-2xl font-bold 
    md:text-4xl">Experience</h1>

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
              Full-Stack Engineer 
              </span>

              <span className="font-light">
                Resilient Coders
              </span>

              <span className="text-sm 
              text-gray-400">
                2024-2025
              </span>
              <p className="text-sm text-gray-600 dark:text-gray-400">
              I developed ThrowTrack, a web-based application for baseball pitchers to track pitch counts, 
              ball/strike ratios, and strike zone performance during sessions. The front-end was built using HTML, 
              CSS, and JavaScript, while EJS templating and a Node.js server powered dynamic, session-specific content. 
              Additionally, I created an interactive card memory game using HTML, CSS, and JavaScript to enhance engagement. 
              My backend development experience includes implementing routes and a controller for the Kinfolx app, 
              allowing users to delete reviews, which improved data integrity and user experience. I have engineered 
              both simple and complex APIs using Express and Node.js, ensuring efficient data throughput and reliability. 
              As a full-stack developer, I have built applications by integrating Node.js and MongoDB with responsive front-end designs, 
              optimizing user experience and reducing load times by 30%. Furthermore, I have conducted code reviews and enforced best practices, 
              reducing redundancies and improving project turnaround by 20%, ultimately enhancing team workflows and code quality.
              </p>
            </li>

            <li
              className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] 
before:top-1/2 before:h-3 before:w-3 
before: -translate-y1/2 before:rounded-full 
before:bg-black dark:before:bg-white before:transform"
            >
              <span className="text-lg font-semibold">
              Software Engineer Freelancer 
              </span>

              <span className="font-light">
                Self-Employed
              </span>

              <span className="text-sm 
              text-gray-400">
                2023-2025
              </span>
              <p className="text-sm text-gray-600 dark:text-gray-400">
              As a Software Engineer Freelancer, 
              I have developed advanced data-driven tools for baseball analytics, 
              leveraging Python, machine learning, and data visualization. 
              I created the Defensive Impact Rating (TDIR) metric using Python and Random Forest modeling to enhance defensive 
              assessments for catchers. Presented at the 2023 Saberseminar, this metric helps teams make data-driven
               player development decisions. Collaborating with the Minnesota Twins’ R&D Department, 
               I developed a Stolen Base Probability Tool, 
               utilizing Random Forest modeling to predict optimal stolen base opportunities. 
               This tool contributed to a 15% increase in successful steals during practice simulations, 
               improving in-game decision-making and base-running efficiency. Additionally, 
               I led an independent project to create the Outlier Home Runs Metric, 
               identifying MLB ballparks most conducive to short home runs. 
               Using Python for data analysis and Tableau for visualization, 
               this metric provided teams with strategic insights to adjust 
               their hitting and pitching approaches based on ballpark-specific characteristics.


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
              Data Analyst Contractor 
              </span>

              <span className="font-light">
                Plymouth Rock Assurance, Commonwealth Care Alliance, Office of Attorney General Andrea Joy Campbell
              </span>

              <span className="text-sm 
              text-gray-400">
                2021-Present
              </span>
              <p className="text-sm text-gray-600 dark:text-gray-400">
              I leveraged data management and analysis to enhance operational efficiency across multiple organizations. 
              At Plymouth Rock Assurance, I accurately tracked and logged all incoming and outgoing mail and packages, 
              reducing processing errors by 15%. I collaborated with team members at 
              Commonwealth Care Alliance to optimize mailroom operations, 
              utilizing Excel for data analysis and workflow management. 
              Additionally, I worked with the Office of Attorney General Andrea Joy Campbell, 
              where I entered and validated financial and charity filing data in the AGO database 
              (Damion & FISERV) while ensuring compliance with data protection regulations.
              </p>
            </li>

            <li
              className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] 
before:top-1/2 before:h-3 before:w-3 
before: -translate-y1/2 before:rounded-full 
before:bg-black dark:before:bg-white before:transform"
            >
              <span className="text-lg font-semibold">
              3rd/5th Grade ELA Teacher 
              </span>

              <span className="font-light">
                Neighborhood House Charter School
              </span>

              <span className="text-sm 
              text-gray-400">
                2017-2021
              </span>
              <p className="text-sm text-gray-600 dark:text-gray-400">
              I spearheaded initiatives to advance student learning outcomes and foster a supportive academic environment. 
              I orchestrated quarterly parent-teacher meetings, developing tailored action plans to support student growth and align 
              academic goals with individual learning needs through comprehensive data analysis. Leveraging student grades and reading levels,
               I implemented targeted interventions that significantly improved statewide standardized ELA test scores.
To address literacy skill gaps, I developed a tiered instructional system, 
categorizing students based on competency levels and designing personalized learning experiences. 
I led weekly small group sessions, focusing on specific skill areas to enhance classroom performance and student confidence. 
Additionally, I managed and analyzed student data—including reading levels and assignment progress—using Microsoft Excel, 
ensuring data-driven instructional decision-making to optimize learning outcomes.
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