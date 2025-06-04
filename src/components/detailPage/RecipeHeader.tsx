import { RecipeDetails } from "@/types";

export default function RecipeHeader({ recipe }: { recipe: RecipeDetails }) {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold mb-3 text-orange-600">
        {recipe.title}
      </h1>
      {recipe.image && (
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full max-h-[400px] object-cover rounded-xl shadow-md"
        />
      )}
      <div className="mt-4 text-gray-600 space-y-1">
        <p>
          <strong>⏱ Ready for:</strong> {recipe.readyInMinutes ?? "N/A"} min
        </p>
        <p>
          <strong>🍽 Servings:</strong> {recipe.servings ?? "N/A"}
        </p>
      </div>
    </div>
  );
}
