import React from "react";
import { ScrollView, Pressable, Text, StyleSheet } from "react-native";
import { CATEGORIES, CATEGORY_EMOJIS, Category } from "../utils/categories";
import { colors } from "../utils/colors";
import { useLanguage } from "../hooks/useLanguage";

type Props = {
  value: Category;
  onChange: (c: Category) => void;
};

export function CategoryChips({ value, onChange }: Props) {
  const { t } = useLanguage();

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.row}
    >
      {CATEGORIES.map((cat) => (
        <Pressable
          key={cat}
          style={[styles.chip, value === cat && styles.chipActive]}
          onPress={() => onChange(cat)}
        >
          <Text style={[styles.text, value === cat && styles.textActive]}>
            {CATEGORY_EMOJIS[cat]} {t.categoryNames[cat] ?? cat}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: { gap: 8, paddingVertical: 8 },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.border,
  },
  chipActive: {
    backgroundColor: colors.accent,
    borderColor: colors.accent,
  },
  text: { color: colors.text, fontSize: 12, fontWeight: "500" },
  textActive: { color: "#000", fontWeight: "700" },
});
