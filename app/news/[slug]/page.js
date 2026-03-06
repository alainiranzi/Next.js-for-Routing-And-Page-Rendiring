import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function NewsDetailPage({ params }) {
  console.log("PARAMS:", params);

  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === params.slug
  );

  if (!newsItem) {
    console.log("News not found!");
    notFound();
  }

  return (
    <article>
      <header>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}