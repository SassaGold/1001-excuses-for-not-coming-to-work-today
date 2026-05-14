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
          <View style={styles.emojiContainer}>
            <Text style={styles.emoji}>{CATEGORY_EMOJIS[cat]}</Text>
          </View>
          <Text style={styles.text}>{t.categoryNames[cat] || cat}</Text>
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
    padding: 18,
    borderRadius: 18,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 14,
    shadowColor: colors.accent,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  pressed: { opacity: 0.7, transform: [{ scale: 0.98 }] },
  emojiContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  emoji: { fontSize: 22 },
  text: { color: colors.text, fontSize: 15, fontWeight: "600", flex: 1, textTransform: "capitalize" },
  arrow: { color: colors.accent, fontSize: 20, fontWeight: "300" },
});
