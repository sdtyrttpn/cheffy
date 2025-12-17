import mealDetails from "@/lib/api/mealDetails";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Utensils } from "lucide-react";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const meal = await mealDetails(slug);

  if (!meal) return { title: "Meal not found | Cheffy" };

  return {
    title: `${meal.mealName} Recipe | Cheffy`,
    description: `How to cook ${meal.mealName}. Ingredients, steps and tips.`,
  };
}

export default async function MealDetailsPage({ params }) {
  const { slug } = await params;
  const meal = await mealDetails(slug);
  if (!meal) {
    notFound();
  }

  return (
    <>
      <main className="container mx-auto py-10 px-4 lg:px-0">
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          {/* image */}
          <div className="rounded-2xl border border-gray-300 bg-white shadow-sm relative overflow-hidden min-h-100">
            <Image
              src={meal.mealImage}
              alt={meal.mealName}
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="">
            {/* title */}
            <h1 className="text-4xl font-bold text-dark mb-4 sm:text-6xl">{meal.mealName}</h1>

            {/* category and cuisine pill */}
            <div className="flex items-center gap-2 my-4">
              <Link
                href={`/cuisines/${encodeURIComponent(meal.mealCuisine)}`}
                className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium bg-primary text-light"
              >
                <MapPin size={16} /> {meal.mealCuisine}
              </Link>

              <Link
                href={`/categories/${encodeURIComponent(meal.mealCategory)}`}
                className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium bg-primary text-light"
              >
                <Utensils size={16} /> {meal.mealCategory}
              </Link>
            </div>

            {/* ingredients */}
            <div className="lg:col-span-1">
              <div className="rounded-2xl border border-gray-300 bg-white shadow-sm overflow-hidden">
                <div className="p-5 border-b border-gray-300">
                  <h2 className="text-xl font-bold text-dark">Ingredients</h2>
                  <p className="text-sm text-dark/60 mt-1">
                    {meal.mealIngredients?.length || 0} items
                  </p>
                </div>

                <div className="p-5">
                  {meal.mealIngredients?.length ? (
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="text-left text-dark/70">
                            <th className="py-2 pr-3">Ingredient</th>
                            <th className="py-2">Measure</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-dark/10">
                          {meal.mealIngredients.map((item, idx) => (
                            <tr key={`${item.name}-${idx}`} className="align-top">
                              <td className="py-3 pr-3 font-medium text-dark">{item.name}</td>
                              <td className="py-3 text-dark/70">{item.measure || "—"}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p className="text-sm text-dark/60">No ingredient data found.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* instructions */}
        <div
          className="rounded-2xl border border-gray-300 bg-white shadow-sm overflow-hidden p-6 mt-6"
          dangerouslySetInnerHTML={{
            __html: meal.mealInstructions,
          }}
        />
      </main>
    </>
  );
}
