import RecipeHeader from "@/components/detailPage/RecipeHeader";
import RecipeIngredients from "@/components/detailPage/RecipeIngredients";
import RecipeSummary from "@/components/detailPage/RecipeSummury";

interface RecipeDetails {
  id: number;
  title: string;
  extendedIngredients: { id: number; original: string }[];
  readyInMinutes?: number;
  servings?: number;
  summary?: string;
  image?: string;
}

interface RecipePageProps {
  params: { id: string };
}

const API_KEY = process.env.SPOONACULAR_API_KEY;

export default async function RecipeDetailsPage({ params }: RecipePageProps) {
  const id = params.id;

  const res = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return <p className="p-4 text-red-600">Failed to load recipe details.</p>;
  }

  const data: RecipeDetails = await res.json();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <RecipeHeader recipe={data} />
      <RecipeSummary summary={data.summary} />
      <RecipeIngredients ingredients={data.extendedIngredients} />
    </div>
  );
}
