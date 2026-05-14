import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useHistory } from "../hooks/useHistory";
import { useLanguage, LANGUAGES } from "../hooks/useLanguage";
import { colors } from "../utils/colors";

export default function SettingsScreen() {
  const { clear } = useHistory();
  const { language, changeLanguage, t } = useLanguage();

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 16, gap: 16 },
  title: { color: colors.text, fontSize: 20, fontWeight: "700" },
  section: { gap: 8 },
  sectionLabel: { color: colors.muted, fontSize: 12, fontWeight: "600", textTransform: "uppercase" },
  languageRow: { flexDirection: "row", gap: 8, flexWrap: "wrap" },
  langBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
  },
  langBtnActive: {
    backgroundColor: colors.accent,
    borderColor: colors.accent,
  },
  langBtnText: { color: colors.text, fontWeight: "500" },
  langBtnTextActive: { color: "#fff" },
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
