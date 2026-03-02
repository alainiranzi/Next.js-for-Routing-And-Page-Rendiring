import { getNewsForYear, getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";

export default function FilteredNewsPage({ params }) {
  const newsYear = +params.year;
  const news = getNewsForYear(newsYear);
  const years = getAvailableNewsYears();

  return (
    <div>
      {/* Years navigation */}
      <nav style={{ marginBottom: "16px" }}>
        {years.map((year) => (
          <Link
            key={year}
            href={`/archive/${year}`}
            style={{
              marginRight: "8px",
              fontWeight: year === newsYear ? "bold" : "normal",
              textDecoration: "underline",
              color: "blue",
            }}
          >
            {year}
          </Link>
        ))}
      </nav>

      <h2>News for {newsYear}</h2>

      {news.length === 0 ? (
        <p>No news found for {newsYear}</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
          {news.map((item) => (
            <div
              key={item.slug}
              style={{
                width: "200px",
                border: "1px solid #ccc",
                padding: "8px",
                borderRadius: "8px",
              }}
            >
              <img
                src={`/images/news/${item.image}`}
                alt={item.title}
                style={{ width: "100%", borderRadius: "4px" }}
              />
              <h3>{item.title}</h3>
              <p>{item.date}</p>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}