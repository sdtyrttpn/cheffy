export default async function randomMeal() {
  const result = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
  const json = await result.json();
  const data = json.meals[0];

  const randomMealId = data.idMeal;

  return randomMealId;
}
