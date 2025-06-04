const API_KEY = process.env.SPOONACULAR_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_SPOONACULAR_BASE_URL;

if (!BASE_URL || !API_KEY) {
  throw new Error("Missing Spoonacular API base URL or API key");
}

export async function fetchRecipes(params: {
  query?: string;
  cuisine?: string;
  maxReadyTime?: string | number;
}) {
  const { query, cuisine, maxReadyTime } = params;

  const url = new URL(`${BASE_URL}/complexSearch`);

  if (query) url.searchParams.append("query", query);
  if (cuisine) url.searchParams.append("cuisine", cuisine);
  if (maxReadyTime)
    url.searchParams.append("maxReadyTime", maxReadyTime.toString());
  url.searchParams.append("apiKey", API_KEY ?? "");

  url.searchParams.append("number", "10");

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error("Failed to fetch recipes");
  }

  return response.json();
}

export async function fetchRecipeById(id: string) {
  const response = await fetch(
    `${BASE_URL}/recipes/${id}/information?apiKey=${API_KEY}`,
    { cache: "no-store" }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch recipe details");
  }
  return response.json();
}
