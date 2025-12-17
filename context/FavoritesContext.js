"use client";
import { createContext, useEffect, useMemo, useCallback, useState } from "react";

export const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  // load from ls
  useEffect(() => {
    try {
      const stored = localStorage.getItem("favoriteMeals");
      const parsed = stored ? JSON.parse(stored) : [];
      setFavorites(Array.isArray(parsed) ? parsed : []);
    } catch {
      setFavorites([]);
    }
  }, []);

  // save to ls
  useEffect(() => {
    try {
      localStorage.setItem("favoriteMeals", JSON.stringify(favorites));
    } catch {}
  }, [favorites]);

  // checking meal
  const isFavorite = useCallback(
    (mealId) => favorites.some((m) => m.mealId === mealId),
    [favorites]
  );

  // toggle meal
  const toggleFavorites = useCallback((meal) => {
    setFavorites((prev) => {
      const exists = prev.some((m) => m.mealId === meal.mealId);
      return exists ? prev.filter((m) => m.mealId !== meal.mealId) : [...prev, meal];
    });
  }, []);

  const value = useMemo(
    () => ({ favorites, isFavorite, toggleFavorites }),
    [favorites, isFavorite, toggleFavorites]
  );

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}
