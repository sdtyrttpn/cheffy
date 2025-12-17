import cuisineInfo from "@/lib/api/cuisinesInfo";
import CuisineCard from "@/components/CuisineCard";
import Header from "@/components/Header";

export const metadata = {
  title: "Cuisines | Cheffy",
  description: "Explore world cuisines and discover traditional meals from different cultures.",
};

export default async function CuisinesPage() {
  const cuisines = await cuisineInfo();
  return (
    <>
      <Header title={"cuisines"} />
      <main className="container mx-auto p-4 gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:px-0">
        {cuisines.map((cuisine) => (
          <CuisineCard key={cuisine.cuisineName} cuisine={cuisine} />
        ))}
      </main>
    </>
  );
}
