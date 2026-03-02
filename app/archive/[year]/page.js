// app/archive/[year]/page.js
import { getNewsForYear } from "@/lib/news";

export default function FilteredNewsPage({ params }) {
  const newsYear = params.year; // convert string from URL to number
  const news = getNewsForYear(newsYear); // filter news from dummy

  if (news.length === 0) {
    // niba nta news iri muri uwo mwaka, wowe ushobora kugaragaza null cyangwa message yoroheje
    return <p>No news found for {newsYear}.</p>;
  }

  return (
    <div style={{ padding: "16px" }}>
      <h2>News for {newsYear}</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {news.map((item) => (
          <div
            key={item.slug}
            style={{
              width: "200px",
              border: "1px solid #ccc",
              padding: "8px",
              borderRadius: "8px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
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