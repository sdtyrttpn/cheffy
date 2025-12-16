export default async function mealsByLetter(letter) {
  const result = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
  const json = await result.json();
  if (!json.meals) {
    return [];
  }
  const data = json.meals;

  return data.map((meal) => ({
    mealId: meal.idMeal,
    mealName: meal.strMeal,
    mealImage: meal.strMealThumb,
  }));
}
