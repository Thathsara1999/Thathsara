import React from "react";
// import skillcss from "./Projects/SkillCard.module.css"
import styles from "./Projects.module.css";
import skills from "../../data/skills.json";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
// import { SkillCards } from "./SkillCards";  // <-- check filename here

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>

      {/* <h2 className={styles.title}>Skills</h2>
      <div className={styles.skillcss}>
        {skills.map((skill, id) => (
          <SkillCards key={id} skill={skill} />
        ))}
      </div> */}
    </section>
  );
};
