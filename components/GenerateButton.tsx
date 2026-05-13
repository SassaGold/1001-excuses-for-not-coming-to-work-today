import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { colors } from "../utils/colors";

type Props = { onPress: () => void };

export function GenerateButton({ onPress }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [styles.btn, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Text style={styles.text}>Generate Excuse</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.accent,
    borderRadius: 999,
    paddingVertical: 14,
    alignItems: "center",
  },
  pressed: {
    opacity: 0.8,
  },
  text: {
    color: "#000",
    fontWeight: "700",
    fontSize: 16,
  },
});
