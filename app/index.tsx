import React, { useState, useEffect } from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { useRouter, useNavigation } from "expo-router";
import { ExcuseCard } from "../components/ExcuseCard";
import { GenerateButton } from "../components/GenerateButton";
import { CategoryChips } from "../components/CategoryChips";
import { ShareButtons } from "../components/ShareButtons";
import { getRandomExcuse, type Excuse } from "../hooks/useExcuses";
import { useHistory } from "../hooks/useHistory";
import { useLanguage } from "../hooks/useLanguage";
import { Category } from "../utils/categories";
import { colors } from "../utils/colors";

export default function HomeScreen() {
  const [category, setCategory] = useState<Category>("any");
  const [excuse, setExcuse] = useState<Excuse | undefined>(undefined);
  const { add } = useHistory();
  const { language, t } = useLanguage();
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headerButtons}>
          <Pressable onPress={() => router.push("/categories")} style={styles.headerBtn}>
            <Text style={styles.headerBtnText}>{t.categories}</Text>
          </Pressable>
          <Pressable onPress={() => router.push("/history")} style={styles.headerBtn}>
            <Text style={styles.headerBtnText}>{t.history}</Text>
          </Pressable>
          <Pressable onPress={() => router.push("/settings")} style={styles.headerBtn} accessibilityLabel={t.settings}>
            <Text style={styles.headerBtnText}>⚙️</Text>
          </Pressable>
        </View>
      ),
    });
  }, [navigation, router, t]);

  const generate = () => {
    const e = getRandomExcuse(category, language);
    setExcuse(e);
    add(e);
  };

  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.heroEmoji}>🤥</Text>
        <Text style={styles.tagline}>{t.tagline}</Text>
      </View>
      <ExcuseCard excuse={excuse} />
      <GenerateButton onPress={generate} />
      <CategoryChips value={category} onChange={setCategory} />
      <ShareButtons text={excuse?.text} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    gap: 16,
  },
  hero: {
    alignItems: "center",
    gap: 4,
    paddingVertical: 4,
  },
  heroEmoji: {
    fontSize: 44,
  },
  tagline: {
    color: colors.muted,
    fontSize: 13,
    textAlign: "center",
    letterSpacing: 0.4,
  },
  headerButtons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  headerBtn: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  headerBtnText: {
    color: colors.accent,
    fontSize: 13,
    fontWeight: "600",
  },
});
