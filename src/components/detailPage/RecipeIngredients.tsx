import { RecipeDetails } from "@/types";

export default function RecipeIngredients({
  ingredients,
}: {
  ingredients: RecipeDetails["extendedIngredients"];
}) {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-3 text-orange-700">
        🧂 Ingredients
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        {ingredients.map((ing) => (
          <li key={ing.id}>{ing.original}</li>
        ))}
      </ul>
    </div>
  );
}
