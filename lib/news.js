import { DUMMY_NEWS } from "@/dummy-news";

// all news
export function getAllNews() {
  return DUMMY_NEWS;
}

// latest news (take all for now)
export function getLatestNews() {
  return DUMMY_NEWS;
}

// get available years (named export)
export function getAvailableNewsYears() {
  return Array.from(
    new Set(DUMMY_NEWS.map((news) => new Date(news.date).getFullYear()))
  ).sort((a, b) => b - a);
}

// get news for a specific year
export function getNewsForYear(year) {
  return DUMMY_NEWS.filter(
    (news) => new Date(news.date).getFullYear() === +year
  );
}