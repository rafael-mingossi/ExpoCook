import { StyleSheet } from "react-native";
import { theme } from "@/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: theme.fonts.size.heading.xl,
    lineHeight: 44,
    marginTop: 42,
    fontFamily: theme.fonts.family.bold,
  },
  subtitle: {
    fontFamily: theme.fonts.family.regular,
  },
  message: {
    fontSize: theme.fonts.size.body.md,
    fontFamily: theme.fonts.family.regular,
    marginTop: 12,
    marginBottom: 38,
    color: theme.colors.gray_400,
  },
  ingredient: {
    flexWrap: "wrap",
    flexDirection: "row",
    paddingBottom: 200,
    gap: 12,
  },
});

export default styles;
