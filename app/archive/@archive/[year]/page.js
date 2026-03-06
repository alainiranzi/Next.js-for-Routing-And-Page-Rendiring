import NewsList from '@/components/news-list';
import { getNewsForYear } from '@/lib/news';

export default async function FilteredNewsPage({ params }) {
  
  const { year } = await params;

  const news = getNewsForYear(year);
  console.log('Year:', year, 'News found:', news);

  return <NewsList news={news} />;
}