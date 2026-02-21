import { DUMMY_NEWS } from "@/dummy-newss";

export default async function NewsDetailPage({ params }) {
  
  const resolvedParams = await params;
  const newsSlug = resolvedParams.slug;

  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsSlug
  );


  if (!newsItem) {
    return <h2>News not found.</h2>;
  }

  return (
    <article className="news-article">
      <header>
        <img
          src={`/images/news/${newsItem.image}`}
          alt={newsItem.title}
        />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>
          {newsItem.date}
        </time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}