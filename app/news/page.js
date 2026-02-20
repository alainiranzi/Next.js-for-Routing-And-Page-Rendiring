import '../globals.css';
import Link from "next/link";
import { DUMMY_NEWS } from '@/dummy-news';

export default function NewsPage() {
return (
<>
<h1>News Page</h1>
<ul className="news-list">
    {DUMMY_NEWS.map((news) => (
        <li key={news.id}>
            <Link href={`/news/${news.slug}`}>{news.title}
            <img src={`/images/news/${news.image}`} />
            </Link>
        </li>
    ))}
</ul>

</>
);

}