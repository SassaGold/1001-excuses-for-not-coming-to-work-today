import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Excuse } from "../hooks/useExcuses";
import { colors } from "../utils/colors";

type Props = { excuse?: Excuse };

export function ExcuseCard({ excuse }: Props) {
  return (
    <View style={styles.card}>
      {excuse ? (
        <>
          <Text style={styles.category}>{excuse.category}</Text>
          <Text style={styles.text}>{excuse.text}</Text>
        </>
      ) : (
        <Text style={styles.placeholder}>
          Press the button to generate your excuse.
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 24,
    minHeight: 160,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.border,
  },
  category: {
    color: colors.accent,
    fontSize: 11,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1.2,
    marginBottom: 12,
  },
  text: {
    color: colors.text,
    fontSize: 18,
    lineHeight: 26,
  },
  placeholder: {
    color: colors.muted,
    fontSize: 15,
    textAlign: "center",
  },
});
