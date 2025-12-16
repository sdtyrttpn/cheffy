"use client";
import { createContext, useEffect, useState } from "react";

export const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  //   checking meal is on the list
  function isFavorite(mealId) {
    const includes = favorites.some((m) => m.mealId === mealId);
    return includes;
  }

  //   add or remove from favorites
  function toggleFavorites(meal) {
    const includes = favorites.some((m) => m.mealId === meal.mealId);
    if (!includes) {
      setFavorites((prev) => [...prev, meal]);
    } else {
      setFavorites((prev) => prev.filter((m) => m.mealId !== meal.mealId));
    }
  }

  // saving to ls
  useEffect(() => {
    localStorage.setItem("favoriteMeals", JSON.stringify(favorites));
  }, [favorites]);

  // load from ls
  useEffect(() => {
    const stored = localStorage.getItem("favoriteMeals");
    stored ? JSON.parse(stored) : [];
  });

  return (
    <FavoritesContext.Provider value={{ favorites, isFavorite, toggleFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}
