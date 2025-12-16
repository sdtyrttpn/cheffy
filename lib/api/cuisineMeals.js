export default async function cuisineMeals(cuisineName) {
  const result = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${cuisineName}`);
  const json = await result.json();
  const data = json.meals;

  const cuisineMeals = data.map((meal) => ({
    mealId: meal.idMeal,
    mealName: meal.strMeal,
    mealImage: meal.strMealThumb,
  }));

  return cuisineMeals;
}
