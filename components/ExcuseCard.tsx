import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { Excuse } from "../hooks/useExcuses";
import { colors } from "../utils/colors";
import { CATEGORY_EMOJIS, Category } from "../utils/categories";
import { useLanguage } from "../hooks/useLanguage";

type Props = { excuse?: Excuse };

export function ExcuseCard({ excuse }: Props) {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const { t } = useLanguage();

  useEffect(() => {
    if (excuse) {
      fadeAnim.setValue(0);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [excuse?.id]);

  return (
    <View style={styles.card}>
      <Text style={styles.quoteDecor}>{"\u201C"}</Text>
      <Animated.View style={{ opacity: fadeAnim }}>
        {excuse ? (
          <>
            <Text style={styles.category}>
              {CATEGORY_EMOJIS[excuse.category as Category] ?? "🎯"}{" "}{excuse.category}
            </Text>
            <Text style={styles.text}>{excuse.text}</Text>
          </>
        ) : (
          <Text style={styles.placeholder}>
            {t.tapToGenerate}
          </Text>
        )}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 20,
    padding: 28,
    minHeight: 180,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden",
    shadowColor: colors.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 6,
  },
  quoteDecor: {
    position: "absolute",
    top: -8,
    left: 14,
    fontSize: 100,
    color: colors.accent,
    opacity: 0.1,
    fontWeight: "700",
    lineHeight: 110,
  },
  category: {
    color: colors.accent,
    fontSize: 11,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1.4,
    marginBottom: 14,
  },
  text: {
    color: colors.text,
    fontSize: 19,
    lineHeight: 28,
    fontStyle: "italic",
  },
  placeholder: {
    color: colors.muted,
    fontSize: 15,
    textAlign: "center",
    lineHeight: 24,
  },
});
