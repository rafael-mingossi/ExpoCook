import { Image, Pressable, PressableProps, Text } from "react-native";

import styles from "./styles";

export type IngredientsProps = {
  name: string;
  image: string;
  selected?: boolean;
} & PressableProps;
const Ingredient = ({
  name,
  image,
  selected = false,
  ...rest
}: IngredientsProps) => {
  return (
    <Pressable
      style={[styles.container, selected && styles.selected]}
      {...rest}
    >
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{name}</Text>
    </Pressable>
  );
};

export default Ingredient;
