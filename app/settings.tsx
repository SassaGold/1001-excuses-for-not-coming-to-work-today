import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useHistory } from "../hooks/useHistory";
import { colors } from "../utils/colors";

export default function SettingsScreen() {
  const { clear } = useHistory();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <Pressable style={styles.btn} onPress={clear}>
        <Text style={styles.btnText}>Clear history</Text>
      </Pressable>

      <Text style={styles.muted}>Dark mode follows system theme.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 16, gap: 16 },
  title: { color: colors.text, fontSize: 20, fontWeight: "700" },
  btn: {
    padding: 12,
    borderRadius: 12,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
  },
  btnText: { color: colors.text },
  muted: { color: colors.muted, fontSize: 12 },
});
