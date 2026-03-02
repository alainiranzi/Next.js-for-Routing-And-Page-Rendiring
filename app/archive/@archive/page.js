import { getNewsForYear } from "@/lib/news";

export default function FilteredNewsPage({ params }) {
  const newsYear = +params.year;
  const news = getNewsForYear(newsYear);

  if (!news || news.length === 0) return <p>No news found for {newsYear}</p>;

  return (
    <div>
      <h2>News for {newsYear}</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {news.map((item) => (
          <div key={item.slug} style={{ width: "200px", border: "1px solid #ccc", padding: "8px", borderRadius: "8px" }}>
            <img
              src={`/images/news/${item.image}`}
              alt={item.title}
              style={{ width: "100%", height: "auto", borderRadius: "4px" }}
            />
            <h3>{item.title}</h3>
            <p>{item.date}</p>
            <a href={`/news/${item.slug}`}>Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
}