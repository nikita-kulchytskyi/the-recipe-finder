import BackButton from "@/components/BackBautton";
import ErrorPic from "@/components/ErrorPic";
import RecipeCard from "@/components/RecipeCard";
import { fetchRecipes } from "@/lib/api";

interface RecipesPageProps {
  searchParams: Promise<{
    query?: string;
    cuisine?: string;
    maxReadyTime?: string;
  }>;
}

export default async function RecipesPage({ searchParams }: RecipesPageProps) {
  const { query, cuisine, maxReadyTime } = await searchParams;
  const data = await fetchRecipes({
    query: query,
    cuisine: cuisine,
    maxReadyTime: maxReadyTime,
  });

  const recipes = data.results ?? [];

  if (recipes.length === 0) {
    return <ErrorPic imageType="oops" />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <BackButton />
      {recipes.map((recipe: any) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
