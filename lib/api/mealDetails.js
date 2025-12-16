export default async function mealDetails(mealId) {
  const result = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);

  const json = await result.json();

  if (!json.meals || json.meals.length === 0) {
    return null;
  }

  const data = json.meals[0];

  const mealIngredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = data[`strIngredient${i}`];
    const measure = data[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      mealIngredients.push({
        name: ingredient.trim(),
        measure: measure?.trim() || "",
      });
    }
  }

  return {
    mealId: data.idMeal ?? "",
    mealName: data.strMeal ?? "Unknown Meal",
    mealCategory: data.strCategory ?? "Unknown Category",
    mealCuisine: data.strArea ?? "Unknown Cuisine",

    mealInstructions: data.strInstructions
      ? data.strInstructions.replace(/\r\n/g, "<br />")
      : "Tarif bilgisi bulunamadı.",

    mealImage: data.strMealThumb ?? "/noImageAvailable.webp",

    mealTags: data.strTags ?? null,
    mealVideo: data.strYoutube ?? null,
    mealIngredients,
  };
}
