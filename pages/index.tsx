import React from "react";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import DesktopNav from "../components/Navigation/DesktopNav";

const Home = () => {
  return (
    <section
      className={`${styles.container} h-screen flex justify-center pt-[10vh]`}
    >
      <article className="prose prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600">
        <h1>Nextjs + TS + Tailwind Starter</h1>
        <p>This is a starter project</p>
      </article>
    </section>
  );
};

export default Home;
