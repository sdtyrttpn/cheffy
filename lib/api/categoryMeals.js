export default async function categoryMeals(categoryName) {
  const result = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
  );
  const json = await result.json();
  const data = json.meals;

  return data.map((meal) => ({
    mealId: meal.idMeal,
    mealName: meal.strMeal,
    mealImage: meal.strMealThumb,
  }));
}
