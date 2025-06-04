import Link from "next/link";

interface Recipe {
  id: number;
  title: string;
  image: string;
}

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link
      href={`/recipes/${recipe.id}`}
      className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-200 transform transition-transform duration-300 hover:scale-105"
    >
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-fill"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
      </div>
    </Link>
  );
}
