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
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 16 },
  item: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
  },
  text: { color: colors.text },
});
