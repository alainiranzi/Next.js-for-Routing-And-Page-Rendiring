// components/NewsList.js
import Link from 'next/link';

export default function NewsList({ news = [] }) {
  if (!news || news.length === 0) return <p>No news available.</p>;

  return (
    <ul className="news-list">
      {news.map(item => (
        <li key={item.id}>
          <Link href={`/news/${item.slug}`}>
            <img src={`/images/news/${item.image}`} alt={item.title} />
            <span>{item.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}