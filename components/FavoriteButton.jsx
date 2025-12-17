"use client";

import { Heart } from "lucide-react";
import { FavoritesContext } from "@/context/FavoritesContext";
import { useContext, useMemo } from "react";

export default function FavoriteButton({ meal }) {
  const { isFavorite, toggleFavorites } = useContext(FavoritesContext);

  const liked = useMemo(() => isFavorite(meal.mealId), [isFavorite, meal.mealId]);

  return (
    <button
      type="button"
      aria-pressed={liked}
      aria-label={liked ? "Remove from favorites" : "Add to favorites"}
      className="self-start transition cursor-pointer"
      onClick={() => toggleFavorites(meal)}
    >
      <Heart
        size={28}
        className={liked ? "text-red-600 fill-red-600" : "hover:fill-red-600 hover:text-red-600"}
      />
    </button>
  );
}
