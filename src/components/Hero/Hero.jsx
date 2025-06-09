import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        
        <div className={styles.heroImgContainer}>
          <img
            src={getImageUrl("hero/Thathsara.png")}
            alt="Hero image of me"
            className={styles.heroImg}
          />
        </div>

        <p className={styles.description}>
          Hi there! I'm Nawanka Thathsara, a software engineer passionate about coding, exploring new technologies, and solving problems. I’m dedicated to making a positive impact on the world by sharing my knowledge and contributing to meaningful projects.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
