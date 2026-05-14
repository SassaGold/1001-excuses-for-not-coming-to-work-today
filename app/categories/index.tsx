import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { CATEGORIES, CATEGORY_EMOJIS } from "../../utils/categories";
import { colors } from "../../utils/colors";
import { useLanguage } from "../../hooks/useLanguage";

export default function CategoryListScreen() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <View style={styles.container}>
      {CATEGORIES.filter((c) => c !== "any").map((cat) => (
        <Pressable
          key={cat}
          style={({ pressed }) => [styles.item, pressed && styles.pressed]}
          onPress={() => router.push(`/categories/${cat}`)}
        >
          <Text style={styles.emoji}>{CATEGORY_EMOJIS[cat]}</Text>
          <Text style={styles.text}>{t.categoryNames[cat] ?? cat}</Text>
          <Text style={styles.arrow}>›</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 16, gap: 8 },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 14,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 12,
  },
  pressed: { opacity: 0.7 },
  emoji: { fontSize: 22 },
  text: { color: colors.text, fontSize: 15, fontWeight: "600", flex: 1, textTransform: "capitalize" },
  arrow: { color: colors.muted, fontSize: 22, fontWeight: "300" },
});
