export default async function cuisinesInfo() {
  const result = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
  const json = await result.json();
  const data = json.meals;

  const cuisineNames = data.map((c) => ({
    cuisineName: c.strArea,
  }));

  return cuisineNames;
}
