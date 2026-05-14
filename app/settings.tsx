import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useHistory } from "../hooks/useHistory";
import { useLanguage, LANGUAGES } from "../hooks/useLanguage";
import { colors } from "../utils/colors";

export default function SettingsScreen() {
  const { clear } = useHistory();
  const { language, changeLanguage, t } = useLanguage();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t.settings}</Text>

      <View style={styles.section}>
        <Text style={styles.sectionLabel}>{t.language}</Text>
        <View style={styles.languageRow}>
          {LANGUAGES.map((lang) => (
            <Pressable
              key={lang.code}
              style={[styles.langBtn, language === lang.code && styles.langBtnActive]}
              onPress={() => changeLanguage(lang.code)}
            >
              <Text style={[styles.langBtnText, language === lang.code && styles.langBtnTextActive]}>
                {lang.label}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      <Pressable style={styles.btn} onPress={clear}>
        <Text style={styles.btnText}>{t.clearHistory}</Text>
      </Pressable>

      <Text style={styles.muted}>{t.darkModeNote}</Text>

      <Pressable style={styles.btn} onPress={() => router.push("/about")}>
        <Text style={styles.btnText}>ℹ️ {t.about}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 16, gap: 20 },
  title: { color: colors.text, fontSize: 22, fontWeight: "800" },
  section: {
    backgroundColor: colors.card,
    borderRadius: 18,
    padding: 16,
    gap: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  sectionLabel: { color: colors.accent, fontSize: 11, fontWeight: "700", textTransform: "uppercase", letterSpacing: 1.2 },
  languageRow: { flexDirection: "row", gap: 8, flexWrap: "wrap" },
  langBtn: {
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 20,
    backgroundColor: colors.background,
    borderWidth: 1.5,
    borderColor: colors.border,
  },
  langBtnActive: {
    backgroundColor: colors.accent,
    borderColor: colors.accent,
  },
  langBtnText: { color: colors.muted, fontWeight: "600" },
  langBtnTextActive: { color: "#fff", fontWeight: "700" },
  btn: {
    padding: 14,
    borderRadius: 14,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
  },
  btnText: { color: colors.text, fontWeight: "600" },
  muted: { color: colors.muted, fontSize: 12, textAlign: "center" },
});
