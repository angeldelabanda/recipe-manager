import { api } from "@/lib/api";
import type { SavedRecipe, NewRecipe, RecipePatch } from "./recipes.types";

// WORKED EXAMPLE — read.
export const getRecipes = async (): Promise<SavedRecipe[]> =>
  (await api.get<SavedRecipe[]>("/recipes")).data;

// WORKED EXAMPLE — delete.
export const deleteRecipe = async (id: number): Promise<{ id: number }> => {
  await api.delete(`/recipes/${id}`);
  return { id };
};

// TODO 4 — Create.
export const createRecipe = async (
  recipe: NewRecipe
): Promise<SavedRecipe> => {
  return (await api.post<SavedRecipe>("/recipes", recipe)).data;
};

// TODO 5 — Update part of a recipe.
export const updateRecipe = async ({
  id,
  ...patch
}: RecipePatch): Promise<SavedRecipe> => {
  return (await api.patch<SavedRecipe>(`/recipes/${id}`, patch)).data;
};