import { ScrollView } from "react-native";
import { styles } from "./styles";
import Ingredient, {
  IngredientsProps,
} from "@/components/Ingredient/Ingredient";
import { services } from "@/services";

type Props = {
  ingredients: IngredientsProps[];
};

export function Ingredients({ ingredients }: Props) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      contentContainerStyle={styles.ingredientsContent}
      showsHorizontalScrollIndicator={false}
    >
      {ingredients.map((ingredient) => (
        <Ingredient
          key={ingredient.name}
          name={ingredient.name}
          image={`${services.storage.imagePath}/${ingredient.image}`}
        />
      ))}
    </ScrollView>
  );
}
