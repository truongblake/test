import React from "react";

export const EXPERIENCES = [
  {
    year: "Sep 2023 - Mar 2024",
    role: "Electrical Engineering Lab Technician",
    company: "University of Washington",
    description: `Assisted in setting up and maintaining lab equipment, supporting students with hands-on projects, and guiding them through complex circuit design and assembly tasks. Conducted PCB assembly, ensuring high standards in soldering and troubleshooting. Worked closely with professors to enhance lab exercises and provide practical demonstrations, fostering a collaborative and educational environment for students in electrical engineering courses.`,
    tags: ["PCB Assembly", "Circuit Design", "Soldering", "Troubleshooting"],
  },
  {
    year: "Jan 2023 - Jun 2023",
    role: "Electrical Engineering Facilitator",
    company: "University of Washington",
    description: `Led weekly workshops to support students’ understanding of fundamental electrical engineering concepts, with a focus on circuit analysis. Guided students through problem-solving techniques and fostered a collaborative learning environment. Worked closely with professors to tailor material to students' needs, enhancing communication skills and demonstrating leadership in academic support.`,
    tags: ["Leadership", "Communication", "Circuit Analysis"],
  },
  {
    year: "Jun 2023 - Sep 2023",
    role: "Electrical Engineering Intern",
    company: "FUJIFILM Sonosite, Inc",
    description: `Contributed to engineering projects focused on power electronics and circuit analysis, gaining hands-on experience with industry processes and standards. Assisted in testing and troubleshooting electrical systems, enhancing understanding of real-world applications. Collaborated with team members to optimize component designs and presented findings, developing communication skills in a professional setting.`,
    tags: ["Communication", "Circuit Analysis", "Troubleshooting", "Soldering", "PCB Designing"],
  },
  {
    year: "Apr 2023 - Jun 2023",
    role: "Electrical Engineering Grader",
    company: "University of Washington",
    description: `Evaluated assignments and exams for courses focused on circuit analysis and transistor functionality, providing constructive feedback to support student learning. Worked closely with professors to ensure grading consistency and clarity. Strengthened understanding of fundamental electrical concepts and academic assessment practices.`,
    tags: ["Circuit Analysis","Transistors"],
  },
  {
    year: "Apr 2022 - Sep 2022",
    role: "Student Orientation Assistant",
    company: "University of Washington",
    description: `Supported incoming students during orientation by providing campus tours, answering questions, and facilitating group activities to foster community. Collaborated with a team to create a welcoming and informative experience, enhancing communication skills and teamwork in a dynamic environment.`,
    tags: ["Communication", "Teamwork"],
  },
  {
    year: "July 2021 - Jan 2022",
    role: "Math Tutor",
    company: "Mathnasium",
    description: `Provided personalized math tutoring for K-12 students, covering topics from basic arithmetic to Calculus I. Developed tailored lesson plans to address individual learning needs, enhancing students' mathematical understanding and confidence. Utilized clear communication and adaptable teaching techniques to support diverse learning styles.`,
    tags: ["Calculus I", "K-12"],
  },
];

const Work = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="scale-1 my-20 text-center text-4xl">Experience</h1>
        <div>
          {EXPERIENCES.map((experience, index) => (
            <div key={index} className="scale-1 mb-8 flex flex-wrap lg:justify-center">
              <div className="w-full lg:w-1/4">
                <p className="mb-2 text-sm text-neutral-400">
                  {experience.year}
                </p>
              </div>
              <div className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold">
                  {experience.role} -{" "}
                  <span className="text-sm text-purple-100">
                    {experience.company}
                  </span>
                </h6>
                <p className="mb-4 text-neutral-100">
                  {experience.description}
                </p>
                <div className="flex flex-wrap">
                {experience.tags.map((tag, key) => (
                  <span
                    key={key}
                    className="mr-2 mt-4 px-3 py-2 bg-neutral-900 text-sm font-medium ring-2 ring-inset ring-zinc-50/10 rounded-xl p-3 hover:bg-zinc-800 transition-colors text-purple-400"
                  >
                    {tag}
                  </span>
                ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
