import Link from "next/link";

export default function CategoryCard({ category }) {
  return (
    <Link href={`/categories/${category.categoryName.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="group relative shadow-sm text-center overflow-hidden bg-cover bg-center transition rounded-xl">
        {/* image */}
        <img
          src={category.categoryImage}
          alt={category.categoryName}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* filter */}
        <div className="absolute inset-0 bg-dark/50"></div>

        {/* title */}
        <div className="absolute inset-0 m-4 border-2 border-light flex items-center justify-center p-6 rounded-lg">
          <h2 className="text-light font-bold text-base sm:text-xl md:text-2xl xl:text-3xl line-clamp-3">
            {category.categoryName}
          </h2>
        </div>
      </div>
    </Link>
  );
}
