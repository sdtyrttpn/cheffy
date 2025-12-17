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
        <div className="min-h-[50vh] flex flex-col items-stretch justify-center gap-4 px-4 text-center">
          <p className="text-gray-500 text-xl">No favorites yet, start exploring meals you love.</p>
          <div className="flex flex-col items-stretch justify-center gap-2 lg:flex-row ">
            <Link href="/categories">
              <button className="btn-primary w-full">Browse Categories</button>
            </Link>
            <Link href="/cuisines">
              <button className="btn-secondary w-full">Explore Cuisines</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
