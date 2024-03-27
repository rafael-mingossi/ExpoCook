import { supabase } from "./supabase";

///THE RPC IS A FUNCTION THAT IS INSIDE SUPABASE SQL EDITOR, FOR COMPLEX CASES WE WRITE THE SQL IN THERE AND CALL THE FUNCTION HRE
async function findByIngredientsIds(ids: string[]) {
  const { data } = await supabase
    .rpc("recipes_by_ingredients", { ids })
    .returns<RecipeResponse[]>();

  return data ?? [];
}

async function show(id: string) {
  const { data } = await supabase
    .from("recipes")
    .select()
    .eq("id", id)
    .returns<RecipeResponse>()
    .single();

  return data;
}

export { findByIngredientsIds, show };
