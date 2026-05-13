import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { CATEGORIES } from "../../utils/categories";
import { colors } from "../../utils/colors";

export default function CategoryListScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {CATEGORIES.filter((c) => c !== "any").map((cat) => (
        <Pressable
          key={cat}
          style={styles.item}
          onPress={() => router.push(`/categories/${cat}`)}
        >
          <Text style={styles.text}>{cat}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 16 },
  item: {
    padding: 14,
    borderRadius: 12,
    backgroundColor: colors.card,
    marginBottom: 8,
  },
  text: { color: colors.text },
});
