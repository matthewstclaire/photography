import React from "react";
import styles from "../styles/Home.module.css";

const About = () => {
  return (
    <section className={`${styles.container} flex justify-center pt-[10vh]`}>
      <article className="prose prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600">
        <h1>Nextjs + TS + Tailwind Starter</h1>
        <p>About Page</p>
      </article>
    </section>
  );
};

export default About;
