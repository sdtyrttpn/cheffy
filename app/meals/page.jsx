"use client";

import mealsByLetter from "@/lib/api/mealsByLetter";
import MealCard from "@/components/MealCard";
import Header from "@/components/Header";
import { useEffect, useState } from "react";

export default function MealsPage() {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const [letter, setLetter] = useState(alphabet[0]);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function getMeals() {
      const mealList = await mealsByLetter(letter.toLowerCase());
      setMeals(mealList || []);
    }
    getMeals();
  }, [letter]);

  function handleLetter(e) {
    setLetter(e.target.innerText);
  }
  return (
    <>
      <Header title={"meals"} />
      <section className="flex gap-2 container mx-auto p-4 flex-wrap justify-center">
        {alphabet.map((l) => (
          <button
            key={l}
            className={`inline-flex items-center justify-center rounded-md border px-5 py-3 font-semibold transition text-center cursor-pointer w-12 ${
              letter == l
                ? "bg-primary text-light"
                : "bg-white hover:bg-gray-200 border-gray-300 text-dark"
            }`}
            onClick={handleLetter}
          >
            {l}
          </button>
        ))}
      </section>
      <main className="container mx-auto p-4 gap-4 gap-y-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xl:px-0 min-h-[30vh]">
        {meals.map((meal) => (
          <MealCard key={meal.mealId} meal={meal} />
        ))}
      </main>
    </>
  );
}
