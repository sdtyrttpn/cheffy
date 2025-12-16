"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import { FavoritesContext } from "@/context/FavoritesContext";
import { useContext } from "react";

export default function MealCard({ meal }) {
  const { isFavorite, toggleFavorites } = useContext(FavoritesContext);
  const liked = isFavorite(meal.mealId);

  return (
    <div className="overflow-hidden">
      {/* image */}
      <Link href={`/meals/${meal.mealId}`}>
        <Image
          width={300}
          height={300}
          src={meal.mealImage}
          alt={meal.mealName}
          className="object-cover rounded-md shadow border border-gray-300"
        />
      </Link>

      {/* title */}
      <div className="flex items-center justify-between mt-2 px-1 gap-2">
        <Link href={`/meals/${meal.mealId}`} className="flex-1 min-w-0">
          <h2 className="text-dark font-bold text-lg hover:text-primary transition truncate">
            {meal.mealName}
          </h2>
        </Link>

        <button
          className="self-start transition cursor-pointer"
          onClick={() => {
            toggleFavorites(meal);
          }}
        >
          <Heart
            className={`${
              liked ? "text-red-600 fill-red-600" : "hover:fill-red-600 hover:text-red-600"
            }`}
            size={28}
          />
        </button>
      </div>
    </div>
  );
}
