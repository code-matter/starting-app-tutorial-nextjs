import React from "react";
import styles from "./main-header.module.css";
import Link from "next/link";

const MainHeader = () => {
  return (
    <>
      <header className={styles.mainHeader}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/news">News</Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default MainHeader;
