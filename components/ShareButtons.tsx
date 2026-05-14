import React from "react";
import { View, Pressable, Text, StyleSheet, Share } from "react-native";
import * as Clipboard from "expo-clipboard";
import * as Haptics from "expo-haptics";
import { colors } from "../utils/colors";

type Props = { text?: string };

export function ShareButtons({ text }: Props) {
  const disabled = !text;

  const copy = async () => {
    if (!text) return;
    await Clipboard.setStringAsync(text);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  };

  const share = async () => {
    if (!text) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    await Share.share({ message: text });
  };

  return (
    <View style={styles.row}>
      <Pressable
        style={({ pressed }) => [
          styles.btn,
          disabled && styles.disabled,
          pressed && !disabled && styles.pressed,
        ]}
        onPress={copy}
        disabled={disabled}
      >
        <Text style={[styles.text, disabled && styles.textDisabled]}>📋 Copy</Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          styles.btn,
          styles.btnShare,
          disabled && styles.disabled,
          pressed && !disabled && styles.pressed,
        ]}
        onPress={share}
        disabled={disabled}
      >
        <Text style={[styles.text, styles.textShare, disabled && styles.textDisabled]}>📤 Share</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", gap: 12, marginTop: 4 },
  btn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    backgroundColor: colors.card,
  },
  btnShare: {
    backgroundColor: colors.accent,
    borderColor: colors.accent,
  },
  pressed: { opacity: 0.75 },
  text: { color: colors.text, fontWeight: "600", fontSize: 14 },
  textShare: { color: "#000" },
  textDisabled: { color: colors.muted },
  disabled: { opacity: 0.35 },
});
