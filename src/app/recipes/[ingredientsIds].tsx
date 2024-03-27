import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import styles from "./styles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router, useLocalSearchParams } from "expo-router";
import { Recipe } from "@/components/Recipe";
import { services } from "@/services";
import { Ingredients } from "@/components/Ingredients";
import { Loading } from "@/components/Loading";

const Recipes = () => {
  const params = useLocalSearchParams<{ ingredientsIds: string }>();
  const ingredientsIds = params.ingredientsIds.split(",");

  const [isLoading, setIsLoading] = useState(true);
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([]);
  const [recipes, setRecipes] = useState<RecipeResponse[]>([]);

  useEffect(() => {
    services.recipes
      .findByIngredientsIds(ingredientsIds)
      .then(setRecipes)
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    services.ingredients
      .findByIds(ingredientsIds)
      .then(setIngredients)
      .finally(() => setIsLoading(false));
  }, []);

  const RenderItem = (item: RecipeResponse) => {
    return (
      <Recipe
        recipe={item}
        onPress={() => router.navigate("/recipe/" + item.id)}
      />
    );
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons
          name={"arrow-back"}
          size={32}
          onPress={() => router.back()}
        />
        <Text style={styles.title}>Ingredients</Text>
      </View>

      <Ingredients ingredients={ingredients} />

      <FlatList
        keyExtractor={(item) => item.id}
        data={recipes}
        renderItem={({ item }) => RenderItem(item)}
        style={styles.recipes}
        contentContainerStyle={styles.recipesContent}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ gap: 16 }}
        numColumns={2}
        ListEmptyComponent={() => (
          <Text style={styles.empty}>No recipe was found.</Text>
        )}
      />
    </View>
  );
};

export default Recipes;
