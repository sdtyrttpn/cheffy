export default async function categoryInfo() {
  const result = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
  const json = await result.json();
  const data = json.categories;

  const categoryInfo = data.map((c) => ({
    categoryId: c.idCategory,
    categoryName: c.strCategory,
    categoryImage: c.strCategoryThumb,
    categoryDescription: c.strCategoryDescription,
  }));

  return categoryInfo;
}
