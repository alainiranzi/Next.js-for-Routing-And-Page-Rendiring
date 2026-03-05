import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";

export default function ArchivePage() {
  const years = getAvailableNewsYears();

  return (
    <ul>
      {years.map((year) => (
        <li key={year}>
          <Link href={`/archive/${year}`}>{year}</Link>
        </li>
      ))}
    </ul>
  );
}