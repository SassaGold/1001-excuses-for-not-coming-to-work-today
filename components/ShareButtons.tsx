import React from "react";
import { View, Pressable, Text, StyleSheet, Share } from "react-native";
import * as Clipboard from "expo-clipboard";
import { colors } from "../utils/colors";

type Props = { text?: string };

export function ShareButtons({ text }: Props) {
  const disabled = !text;

  const copy = async () => {
    if (!text) return;
    await Clipboard.setStringAsync(text);
  };

  const share = async () => {
    if (!text) return;
    await Share.share({ message: text });
  };

  return (
    <View style={styles.row}>
      <Pressable
        style={[styles.btn, disabled && styles.disabled]}
        onPress={copy}
        disabled={disabled}
      >
        <Text style={styles.text}>📋 Copy</Text>
      </Pressable>
      <Pressable
        style={[styles.btn, disabled && styles.disabled]}
        onPress={share}
        disabled={disabled}
      >
        <Text style={styles.text}>📤 Share</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", gap: 12, marginTop: 12 },
  btn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
  },
  text: { color: colors.text },
  disabled: { opacity: 0.4 },
});
