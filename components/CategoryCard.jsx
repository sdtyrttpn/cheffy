import Link from "next/link";
import Image from "next/image";

export default function CategoryCard({ category }) {
  const slug = category.categoryName.replace(/\s+/g, "-");

  return (
    <Link
      href={`/categories/${slug}`}
      aria-label={`Browse ${category.categoryName} category`}
      className="block"
    >
      <div className="group relative shadow-sm text-center overflow-hidden rounded-xl">
        {/* image */}
        <div className="relative w-full aspect-square">
          <Image
            src={category.categoryImage}
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 16vw"
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* filter */}
        <div className="absolute inset-0 bg-dark/50"></div>

        {/* border and title */}
        <div className="absolute inset-0 m-4 border-2 border-light flex items-center justify-center p-6 rounded-lg">
          <h2 className="text-light font-bold text-base sm:text-xl md:text-2xl xl:text-3xl line-clamp-3 text-center">
            {category.categoryName}
          </h2>
        </div>
      </div>
    </Link>
  );
}
