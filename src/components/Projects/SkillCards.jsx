import React from "react";
import styles from "./SkillCard.module.css";

export const SkillCards = ({ skill }) => {
  return (
    <div className={styles.skillCard}>
      <img src={skill.imageSrc} alt={skill.title} className={styles.image} />
      <p className={styles.title}>{skill.title}</p>
    </div>
  );
};
