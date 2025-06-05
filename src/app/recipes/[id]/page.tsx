import BackButton from "@/components/BackBautton";
import RecipeHeader from "@/components/detailPage/RecipeHeader";
import RecipeIngredients from "@/components/detailPage/RecipeIngredients";
import RecipeSummary from "@/components/detailPage/RecipeSummury";
import ErrorPic from "@/components/ErrorPic";
import { fetchRecipeById } from "@/lib/api";

interface RecipePageProps {
  params: Promise<{ id: string }>;
}

export default async function RecipeDetailsPage({ params }: RecipePageProps) {
  const { id } = await params;

  const data = await fetchRecipeById(id);

  if (!data) {
    return (
      <ErrorPic
        title="Unfortunately we did not receive the information."
        imageType="general"
      />
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <BackButton />
      <RecipeHeader recipe={data} />
      <RecipeSummary summary={data.summary} />
      <RecipeIngredients ingredients={data.extendedIngredients} />
    </div>
  );
}
