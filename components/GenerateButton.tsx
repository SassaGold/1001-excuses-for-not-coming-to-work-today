import React, { useRef, useEffect } from "react";
import { Pressable, Text, StyleSheet, Animated } from "react-native";
import * as Haptics from "expo-haptics";
import { colors } from "../utils/colors";
import { useLanguage } from "../hooks/useLanguage";

type Props = { onPress: () => void };

export function GenerateButton({ onPress }: Props) {
  const scale = useRef(new Animated.Value(1)).current;
  const breathe = useRef(new Animated.Value(1)).current;
  const { t } = useLanguage();

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(breathe, { toValue: 1.03, duration: 1400, useNativeDriver: true }),
        Animated.timing(breathe, { toValue: 1, duration: 1400, useNativeDriver: true }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, []);

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
    <Animated.View style={{ transform: [{ scale: Animated.multiply(scale, breathe) }] }}>
      <Pressable
        style={styles.btn}
        onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Text style={styles.emoji}>🎲</Text>
        <Text style={styles.text}>{t.generateExcuse}</Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.accent,
    borderRadius: 999,
    paddingVertical: 18,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
    shadowColor: colors.accent,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.55,
    shadowRadius: 18,
    elevation: 14,
  },
  emoji: {
    fontSize: 20,
  },
  text: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 17,
    letterSpacing: 0.4,
  },
});
