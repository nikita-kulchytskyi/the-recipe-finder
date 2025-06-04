import RecipeCard from "@/components/RecipeCard";
import { fetchRecipes } from "@/lib/api";

interface RecipesPageProps {
  searchParams: {
    query?: string;
    cuisine?: string;
    maxReadyTime?: string;
  };
}

export default async function RecipesPage({ searchParams }: RecipesPageProps) {
  const data = await fetchRecipes({
    query: searchParams.query,
    cuisine: searchParams.cuisine,
    maxReadyTime: searchParams.maxReadyTime,
  });

  const recipes = data.results ?? [];

  if (recipes.length === 0) {
    return (
      <p className="p-4 text-gray-700">No recipes found for your filters.</p>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {recipes.map((recipe: any) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
