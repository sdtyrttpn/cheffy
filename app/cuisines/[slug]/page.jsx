import cuisineMeals from "@/lib/api/cuisineMeals";
import MealCard from "@/components/MealCard";
import Header from "@/components/Header";

export default async function CuisinePage({ params }) {
  const { slug } = await params;
  const title = decodeURIComponent(slug);
  const meals = await cuisineMeals(slug);

  return (
    <>
      <header>
        <Header title={title} />
      </header>
      <div className="container mx-auto p-4 gap-4 gap-y-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xl:px-0 min-h-[30vh]">
        {meals.map((meal) => (
          <MealCard key={meal.mealId} meal={meal} />
        ))}
      </div>
    </>
  );
}
