import { getLatestNews } from "@/lib/news";

export default function LatestNewsPage() {
  const latestNews = getLatestNews();

  return (
    <div>
      <h2>Latest News Page</h2>

      {latestNews.length === 0 ? (
        <p>No latest news available.</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          {latestNews.map((news) => (
            <div
              key={news.slug}
              style={{
                width: "200px",
                border: "1px solid #ccc",
                padding: "8px",
                borderRadius: "8px",
              }}
            >
              <img
                src={`/images/news/${news.image}`}
                alt={news.title}
                style={{ width: "100%", height: "auto", borderRadius: "4px" }}
              />
              <h3>{news.title}</h3>
              <p>{news.date}</p>
              <a href={`/news/${news.slug}`}>Read more</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}