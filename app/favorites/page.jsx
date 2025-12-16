"use client";
import Header from "@/components/Header";
import MealCard from "@/components/MealCard";
import { FavoritesContext } from "@/context/FavoritesContext";
import Link from "next/link";
import { useContext } from "react";

export default function CategoriesPage() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <>
      <Header title="Favorites" />

      {favorites.length > 0 ? (
        <main className="container mx-auto p-4 gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:px-0 min-h-[50vh]">
          {favorites.map((meal) => (
            <MealCard key={meal.mealId} meal={meal} />
          ))}
        </main>
      ) : (
        <div className="min-h-[50vh] flex flex-col items-center justify-center gap-4 px-4 text-center">
          <p className="text-gray-500 text-xl">No favorites yet, start exploring meals you love.</p>
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
      )}
    </>
  );
}
