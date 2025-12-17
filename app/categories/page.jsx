import categoryInfo from "@/lib/api/categoryInfo";
import Header from "@/components/Header";
import CategoryCard from "@/components/CategoryCard";

export async function generateMetadata() {
  return {
    title: `Categories | Cheffy`,
    description: `Explore meal categories and discover recipes from different cuisines around the world.
`,
  };
}

export default async function CategoriesPage() {
  const data = await categoryInfo();

  return (
    <>
      <Header title={"Categories"} />
      <main className="container mx-auto p-4 gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:px-0">
        {data.map((c) => (
          <CategoryCard key={c.categoryId} category={c} />
        ))}
      </main>
    </>
  );
}
