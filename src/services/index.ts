import * as ingredients from "./ingredientsService";
import * as recipes from "./recipesService";
import * as preparations from "./preparationsService";

const path = process.env.EXPO_PUBLIC_PATH ?? "";

export const services = {
  ingredients,
  recipes,
  preparations,

  storage: {
    imagePath: path,
  },
};
