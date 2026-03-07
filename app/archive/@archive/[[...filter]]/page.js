import Link from 'next/link';
import NewsList from '@/components/news-list';
import { getAvailableNewsYears, getNewsForYear } from '@/lib/news';

export default async function FilteredNewsPage({ params }) {
  // await kuri params nk'uko bikenewe
  const { filter } = await params;

  const selectedYear = filter?.[0]; // year iri muri index 0
  const selectedMonth = filter?.[1]; // niba month iriho

  let news;

  // niba ufite year gusa cyangwa na month
  if (selectedYear) {
    news = getNewsForYear(selectedYear);
  }

  // umwanya wo kwerekana content
  let newsContent = <p>No news found for the selected period.</p>;

  // niba news yabonetse, yohereze muri NewsList
  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  const links = getAvailableNewsYears();

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link}>
                <Link href={`/archive/${link}`}>{link}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {newsContent}
    </>
  );
}