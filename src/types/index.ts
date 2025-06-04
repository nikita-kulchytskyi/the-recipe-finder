export interface Recipe {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  cuisine?: string;
}

export interface RecipeDetails {
  id: number;
  title: string;
  extendedIngredients: {
    id: number;
    original: string;
  }[];
  readyInMinutes?: number;
  servings?: number;
  summary?: string;
  image?: string;
}
