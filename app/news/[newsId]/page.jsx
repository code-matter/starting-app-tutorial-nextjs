import React from "react";

const NewsId = ({ params }) => {
  return (
    <>
      <header>
        <h1>News Article</h1>
      </header>
      <main>
        <h2>NewsId: {params.newsId}</h2>
      </main>
    </>
  );
};

export default NewsId;
