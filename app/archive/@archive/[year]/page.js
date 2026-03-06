import { getNewsForYear } from "@/lib/news";

export default function FilteredNewsPage({ params }) {
  const news = getNewsForYear(params.year);

  if (!news || news.length === 0) {
    return <p>No news found for this year.</p>;
  }

  return (
    <ul className="news-list">
      {news.map((item) => (
        <li key={item.id}>
          <img src={`/images/news/${item.image}`} alt={item.title} />
          <h2>{item.title}</h2>
        </li>
      ))}
    </ul>
  );
}