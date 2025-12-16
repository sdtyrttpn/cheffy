import Link from "next/link";
import { areaToFlag } from "./areaToFlag";
import Image from "next/image";

export default function CuisineCard({ cuisine }) {
  const cuisineName = cuisine.cuisineName.trim();
  const flagSrc = areaToFlag[cuisineName];

  return (
    <Link href={`/cuisines/${cuisineName}`}>
      <div className="border border-gray-400 rounded-xl flex flex-col items-center justify-center hover:bg-gray-200 transition p-4 md:p-6">
        {flagSrc && (
          <Image
            src={flagSrc}
            alt={`${cuisineName} flag`}
            width={120}
            height={90}
            className="rounded-md mb-4 border border-gray-300"
          />
        )}
        <h2 className="text-dark font-bold text-xl mt-auto truncate w-full text-center">
          {cuisineName}
        </h2>
      </div>
    </Link>
  );
}
