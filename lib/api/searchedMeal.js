export default async function searchedMeal(value) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(value)}`
  );

  const json = await response.json();

  if (!json.meals) {
    return null;
  }

  return json.meals[0].idMeal;
}
