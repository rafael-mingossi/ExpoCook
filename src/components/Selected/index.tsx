import React from "react";
import { Text, View } from "react-native";
import Animated, { BounceOutDown, SlideInDown } from "react-native-reanimated";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import styles from "./styles";
import { theme } from "@/theme";
import { Button } from "@/components/Button";

type SelectedProps = {
  quantity: number;
  onClear: () => void;
  onSearch: () => void;
};

const Selected = ({ quantity, onClear, onSearch }: SelectedProps) => {
  return (
    <Animated.View
      style={styles.container}
      entering={SlideInDown.duration(500)}
      exiting={BounceOutDown}
    >
      <View style={styles.header}>
        <Text style={styles.label}>{quantity} Ingredients Selected</Text>
        <MaterialIcons
          name="close"
          size={24}
          color={theme.colors.gray_400}
          onPress={onClear}
        />
      </View>
      <Button title={"Find"} onPress={onSearch} />
    </Animated.View>
  );
};

export default Selected;
