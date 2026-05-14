import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { Excuse } from "../hooks/useExcuses";
import { colors } from "../utils/colors";
import { CATEGORY_EMOJIS, Category } from "../utils/categories";
import { useLanguage } from "../hooks/useLanguage";

type Props = { excuse?: Excuse };

export function ExcuseCard({ excuse }: Props) {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;
  const { t } = useLanguage();

  useEffect(() => {
    if (excuse) {
      fadeAnim.setValue(0);
      slideAnim.setValue(24);
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 350,
          useNativeDriver: true,
        }),
        Animated.spring(slideAnim, {
          toValue: 0,
          speed: 18,
          bounciness: 7,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [excuse?.id, fadeAnim, slideAnim]);

  return (
    <View style={styles.card}>
      <View style={styles.accentBar} />
      <Text style={styles.quoteDecor}>{"\u201C"}</Text>
      <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
        {excuse ? (
          <>
            <Text style={styles.category}>
              {CATEGORY_EMOJIS[excuse.category as Category] ?? "🎯"}{" "}{excuse.category}
            </Text>
            <Text style={styles.text}>{excuse.text}</Text>
          </>
        ) : (
          <View style={styles.placeholderContainer}>
            <Text style={styles.placeholderEmoji} accessibilityLabel="sparkles" accessibilityRole="image">✨</Text>
            <Text style={styles.placeholder}>{t.tapToGenerate}</Text>
          </View>
        )}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 24,
    padding: 28,
    paddingTop: 34,
    minHeight: 160,
    maxHeight: 220,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden",
    shadowColor: colors.accent,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.28,
    shadowRadius: 22,
    elevation: 12,
  },
  accentBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    backgroundColor: colors.accent,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  quoteDecor: {
    position: "absolute",
    top: -10,
    right: 14,
    fontSize: 120,
    color: colors.accent,
    opacity: 0.07,
    fontWeight: "700",
    lineHeight: 130,
  },
  category: {
    color: colors.accent,
    fontSize: 11,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1.6,
    marginBottom: 14,
  },
  text: {
    color: colors.text,
    fontSize: 20,
    lineHeight: 32,
    fontStyle: "italic",
  },
  placeholderContainer: {
    alignItems: "center",
    gap: 10,
  },
  placeholderEmoji: {
    fontSize: 38,
  },
  placeholder: {
    color: colors.muted,
    fontSize: 15,
    textAlign: "center",
    lineHeight: 24,
  },
});
