import Link from "next/link";
import Image from "next/image";
import headerImage from "@/public/homePageHeader.webp";
import categoryInfo from "@/lib/api/categoryInfo";
import CategoryCard from "@/components/CategoryCard";
import cuisinesInfo from "@/lib/api/cuisinesInfo";
import CuisineCard from "@/components/CuisineCard";
import { ChevronRight } from "lucide-react";
import mealsByLetter from "@/lib/api/mealsByLetter";
import MealCard from "@/components/MealCard";
import Newsletter from "@/components/Newsletter";

export default async function HomePage() {
  const categoryData = await categoryInfo();
  const slicedCategoryData = categoryData.slice(0, 6);

  const cuisinesData = await cuisinesInfo();
  const slicedCuisinesData = cuisinesData.slice(0, 6);

  const featuredMeals = await mealsByLetter("a");
  const slicedFeaturedMeals = featuredMeals.slice(0, 6);

  return (
    <>
      <header className="border-b border-gray-300 py-8">
        <div className="container mx-auto grid grid-cols-1 gap-4 px-4 lg:grid-cols-2">
          <div className="flex flex-col gap-8 justify-center">
            <h1 className="font-bold text-5xl sm:text-7xl">Discover meals from around the world</h1>
            <h2 className="font-semibold text-2xl text-dark/80">
              Browse categories or explore cuisines.
            </h2>
            <div className="flex items-center gap-2">
              <Link
                href="/categories"
                className="inline-flex items-center justify-center rounded-xl bg-primary text-light px-5 py-3 font-semibold hover:bg-primary/90 transition text-center truncate"
              >
                Browse Categories
              </Link>
              <Link
                href="/cuisines"
                className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white text-dark px-5 py-3 font-semibold hover:bg-gray-50 transition text-center truncate"
              >
                Explore Cuisines
              </Link>
            </div>
          </div>

          {/* header image */}
          <div className="relative aspect-square rounded-2xl shadow-sm overflow-hidden lg:aspect-auto lg:min-h-140">
            <Image
              src={headerImage}
              alt="Discover meals from around the world"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </header>
      <main>
        {/* featured meals section */}
        <section className="border-b border-gray-300 py-8">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <h2 className="font-bold text-4xl text-dark/90">Featured Meals</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
              {slicedFeaturedMeals.map((meal) => (
                <MealCard key={meal.mealId} meal={meal} />
              ))}
            </div>
            <Link
              href="/meals"
              className="flex items-center gap-1 hover:underline font-semibold text-primary self-end"
            >
              Explore all meals <ChevronRight />
            </Link>
          </div>
        </section>

        {/* featured categories section */}
        <section className="border-b border-gray-300 py-8">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <h2 className="font-bold text-4xl text-dark/90">Featured Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
              {slicedCategoryData.map((c) => (
                <CategoryCard key={c.categoryName} category={c} />
              ))}
            </div>
            <Link
              href="/categories"
              className="flex items-center gap-1 hover:underline font-semibold text-primary self-end"
            >
              Explore all categories <ChevronRight />
            </Link>
          </div>
        </section>

        {/* featured cuisines section */}
        <section className="border-b border-gray-300 py-8">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <h2 className="font-bold text-4xl text-dark/90">Featured Cuisines</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
              {slicedCuisinesData.map((c) => (
                <CuisineCard key={c.cuisineName} cuisine={c} />
              ))}
            </div>
            <Link
              href="/cuisines"
              className="flex items-center gap-1 hover:underline font-semibold text-primary self-end"
            >
              Explore all cuisines <ChevronRight />
            </Link>
          </div>
        </section>

        <section className=" border-gray-300 pt-8">
          <Newsletter />
        </section>
      </main>
    </>
  );
}
