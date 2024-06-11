import { DUMMY_NEWS } from "@/lib/constants/dummy-news";
import React from "react";

const NewsId = ({ params }) => {
  const slug = params.newsId;
  const currentNews = DUMMY_NEWS.find((news) => news.slug === slug);

  return (
    <article className="news-article">
      <header>
        <img
          src={`/images/news/${currentNews.image}`}
          alt={currentNews.title}
        />
        <h1>{currentNews.title}</h1>
        <time dateTime={currentNews.date}>{currentNews.date}</time>
      </header>
      <main>
        <p>{currentNews.content}</p>
      </main>
    </article>
  );
};

export default NewsId;
