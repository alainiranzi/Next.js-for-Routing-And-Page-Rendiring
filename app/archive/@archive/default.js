import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";

export default function ArchiveDefault() {
  const years = getAvailableNewsYears();

  return (
    <div>
      <p>Select a year to see archived news:</p>
      <nav>
        {years.map((year) => (
          <Link
            key={year}
            href={`/archive/${year}`}
            style={{ marginRight: "12px", color: "blue", textDecoration: "underline" }}
          >
            {year}
          </Link>
        ))}
      </nav>
    </div>
  );
}