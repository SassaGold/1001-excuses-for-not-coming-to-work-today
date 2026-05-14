import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { getExcusesByCategory } from "../../hooks/useExcuses";
import { useLanguage } from "../../hooks/useLanguage";
import { colors } from "../../utils/colors";
import { Category } from "../../utils/categories";

export default function CategoryScreen() {
  const { category } = useLocalSearchParams<{ category: string }>();
  const { language } = useLanguage();
  const list = getExcusesByCategory(category as Category, language);

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.list}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Text style={styles.num}>{index + 1}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  list: { padding: 16, gap: 10 },
  item: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: "row",
    gap: 12,
    alignItems: "flex-start",
  },
  num: {
    color: colors.accent,
    fontSize: 11,
    fontWeight: "700",
    minWidth: 26,
    marginTop: 2,
    letterSpacing: 0.5,
  },
  text: { color: colors.text, fontSize: 15, lineHeight: 23, flex: 1 },
});
