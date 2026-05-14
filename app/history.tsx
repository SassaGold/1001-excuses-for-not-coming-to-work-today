import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useHistory } from "../hooks/useHistory";
import { useLanguage } from "../hooks/useLanguage";
import { colors } from "../utils/colors";
import { CATEGORY_EMOJIS, Category } from "../utils/categories";

export default function HistoryScreen() {
  const { history } = useHistory();
  const { t } = useLanguage();

  return (
    <View style={styles.container}>
      {history.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyIcon}>📭</Text>
          <Text style={styles.empty}>{t.noHistory}</Text>
          <Text style={styles.emptyHint}>{t.noHistoryHint}</Text>
        </View>
      ) : (
        <FlatList
          data={history}
          keyExtractor={(item) => String(item.id) + item.text}
          contentContainerStyle={styles.list}
          renderItem={({ item, index }) => (
            <View style={styles.item}>
              <Text style={styles.index}>#{history.length - index}</Text>
              <Text style={styles.text}>{item.text}</Text>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>
                  {CATEGORY_EMOJIS[item.category as Category] ?? "🎯"}{" "}{t.categoryNames[item.category] || item.category}
                </Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  list: { padding: 16, gap: 10 },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  emptyIcon: { fontSize: 52, marginBottom: 4 },
  empty: { color: colors.text, fontSize: 16, fontWeight: "700" },
  emptyHint: { color: colors.muted, fontSize: 13 },
  item: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    borderLeftWidth: 4,
    borderLeftColor: colors.accent,
  },
  index: {
    color: colors.accent,
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.2,
    marginBottom: 6,
  },
  text: { color: colors.text, fontSize: 15, lineHeight: 22, marginBottom: 10 },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: colors.background,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: colors.border,
  },
  badgeText: { color: colors.muted, fontSize: 11, fontWeight: "600", textTransform: "uppercase", letterSpacing: 0.8 },
});
