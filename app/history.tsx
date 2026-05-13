import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useHistory } from "../hooks/useHistory";
import { colors } from "../utils/colors";

export default function HistoryScreen() {
  const { history } = useHistory();

  return (
    <View style={styles.container}>
      {history.length === 0 ? (
        <Text style={styles.empty}>No history yet. Generate an excuse first.</Text>
      ) : (
        <FlatList
          data={history}
          keyExtractor={(item) => String(item.id) + item.text}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.text}>{item.text}</Text>
              <Text style={styles.category}>{item.category}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 16 },
  empty: { color: colors.muted },
  item: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
  },
  text: { color: colors.text },
  category: { color: colors.muted, fontSize: 12, marginTop: 4 },
});
