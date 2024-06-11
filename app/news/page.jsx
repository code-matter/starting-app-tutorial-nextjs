import { DUMMY_NEWS } from "@/lib/constants/dummy-news";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const News = () => {
  return (
    <>
      <h1>News Page</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((news) => {
          return (
            <li key={news.id}>
              <Link href={`news/${news.slug}`}>
                <img src={`/images/news/${news.image}`} alt={news.title} />
                <span>{news.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default News;
