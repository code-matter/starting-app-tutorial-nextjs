import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

const News = () => {
  return (
    <>
      <header>
        <h1>News Page</h1>
      </header>
      <main className={styles.news}>
        <ul>
          <li>
            <Link href="/news/1">News #1</Link>
            <Link href="/news/2">News #2</Link>
            <Link href="/news/3">News #3</Link>
          </li>
        </ul>
      </main>
    </>
  );
};

export default News;
