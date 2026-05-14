import React, { useRef } from "react";
import { Pressable, Text, StyleSheet, Animated } from "react-native";
import * as Haptics from "expo-haptics";
import { colors } from "../utils/colors";
import { useLanguage } from "../hooks/useLanguage";

type Props = { onPress: () => void };

export function GenerateButton({ onPress }: Props) {
  const scale = useRef(new Animated.Value(1)).current;
  const { t } = useLanguage();

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.95,
      useNativeDriver: true,
      speed: 30,
      bounciness: 4,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 20,
      bounciness: 8,
    }).start();
  };

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    onPress();
  };

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <Pressable
        style={styles.btn}
        onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Text style={styles.text}>{t.generateExcuse}</Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.accent,
    borderRadius: 999,
    paddingVertical: 16,
    alignItems: "center",
    shadowColor: colors.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 8,
  },
  text: {
    color: "#000",
    fontWeight: "800",
    fontSize: 17,
    letterSpacing: 0.3,
  },
});
