import Link from "next/link";
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";

export default function MealCard({ meal }) {
  return (
    <div className="overflow-hidden">
      <Link href={`/meals/${meal.mealId}`} className="block">
        <Image
          src={meal.mealImage}
          alt={meal.mealName}
          width={300}
          height={300}
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 16vw"
          className="object-cover rounded-md shadow border border-gray-300 w-full h-auto"
        />
      </Link>

      <div className="flex items-start justify-between mt-2 px-1 gap-2">
        <Link href={`/meals/${meal.mealId}`} className="flex-1 min-w-0">
          <h2 className="text-dark font-bold text-lg hover:text-primary transition truncate">
            {meal.mealName}
          </h2>
        </Link>

        <FavoriteButton meal={meal} />
      </div>
    </div>
  );
}
