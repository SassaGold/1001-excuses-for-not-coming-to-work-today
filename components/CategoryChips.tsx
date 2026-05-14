import React, { useRef } from "react";
import { View, Pressable, Text, StyleSheet, Animated } from "react-native";
import { CATEGORIES, CATEGORY_EMOJIS, Category } from "../utils/categories";
import { colors } from "../utils/colors";
import { useLanguage } from "../hooks/useLanguage";

type Props = {
  value: Category;
  onChange: (c: Category) => void;
};

function AnimatedChip({
  cat,
  active,
  label,
  onPress,
}: {
  cat: Category;
  active: boolean;
  label: string;
  onPress: () => void;
}) {
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = () =>
    Animated.spring(scale, { toValue: 0.9, useNativeDriver: true, speed: 40, bounciness: 0 }).start();
  const onPressOut = () =>
    Animated.spring(scale, { toValue: 1, useNativeDriver: true, speed: 20, bounciness: 10 }).start();

  return (
    <Animated.View style={[styles.chipWrapper, { transform: [{ scale }] }]}>
      <Pressable
        style={[styles.chip, active && styles.chipActive]}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
      >
        <Text style={styles.emoji} numberOfLines={1}>{CATEGORY_EMOJIS[cat]}</Text>
        <Text style={[styles.text, active && styles.textActive]} numberOfLines={1}>{label}</Text>
      </Pressable>
    </Animated.View>
  );
}

export function CategoryChips({ value, onChange }: Props) {
  const { t } = useLanguage();

  return (
    <View style={styles.row}>
      {CATEGORIES.map((cat) => (
        <AnimatedChip
          key={cat}
          cat={cat}
          active={value === cat}
          label={t.categoryNames[cat] || cat}
          onPress={() => onChange(cat)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", flexWrap: "wrap", gap: 8, paddingVertical: 4 },
  chipWrapper: { flexShrink: 0 },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 1.5,
    borderColor: colors.border,
    backgroundColor: colors.card,
  },
  chipActive: {
    backgroundColor: colors.accent,
    borderColor: colors.accent,
  },
  emoji: { fontSize: 12 },
  text: { color: colors.muted, fontSize: 12, fontWeight: "600" },
  textActive: { color: "#fff", fontWeight: "700" },
});
