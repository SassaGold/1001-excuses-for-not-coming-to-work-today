import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { ExcuseCard } from "../components/ExcuseCard";
import { GenerateButton } from "../components/GenerateButton";
import { CategoryChips } from "../components/CategoryChips";
import { ShareButtons } from "../components/ShareButtons";
import { getRandomExcuse, type Excuse } from "../hooks/useExcuses";
import { useHistory } from "../hooks/useHistory";
import { Category } from "../utils/categories";
import { colors } from "../utils/colors";

export default function HomeScreen() {
  const [category, setCategory] = useState<Category>("any");
  const [excuse, setExcuse] = useState<Excuse | undefined>(undefined);
  const { add } = useHistory();
  const router = useRouter();

  const generate = () => {
    const e = getRandomExcuse(category);
    setExcuse(e);
    add(e);
  };

  return (
    <View style={styles.container}>
      <ExcuseCard excuse={excuse} />
      <GenerateButton onPress={generate} />
      <CategoryChips value={category} onChange={setCategory} />
      <ShareButtons text={excuse?.text} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    gap: 16,
  },
});
