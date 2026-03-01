import { getLatestNews } from "@/lib/news";

export default function LatestNewsPage() {
const latestNews = getLatestNews();

    return (
    <>
     <h2>Latest News Page</h2>

     
    </>
    );
}