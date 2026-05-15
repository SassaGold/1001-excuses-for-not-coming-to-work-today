import React from "react";
import { View, Text, ScrollView, StyleSheet, Linking, Pressable, Alert } from "react-native";
import Constants from "expo-constants";
import { useLanguage } from "../hooks/useLanguage";
import { colors } from "../utils/colors";

export default function AboutScreen() {
  const { t } = useLanguage();

  const appVersion =
    Constants.expoConfig?.version ?? "1.0.0";

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.container}
    >
      {/* App identity */}
      <View style={styles.hero}>
        <Text style={styles.heroEmoji}>🤥</Text>
        <Text style={styles.appName}>{t.aboutApp}</Text>
        <Text style={styles.versionBadge}>
          {t.version} {appVersion}
        </Text>
      </View>

      <Section
        label={t.privacyPolicy}
        body={t.privacyPolicyBody}
        url="https://sassagold.com/1001excuses-privacy.html"
      />
      <Section label={t.dataStorage} body={t.dataStorageBody} />
      <Section label={t.termsOfUse} body={t.termsOfUseBody} />
      <Section label={t.contact} body={t.contactBody} url="mailto:support@sassagold.com" />
    </ScrollView>
  );
}

function Section({ label, body, url }: { label: string; body: string; url?: string }) {
  const displayUrl = url?.replace(/^mailto:/, "");
  const openUrl = () => {
    if (!url) return;
    Linking.openURL(url).catch(() =>
      Alert.alert("Error", "Could not open the link. Please try again.")
    );
  };
  return (
    <View style={styles.section}>
      <Text style={styles.sectionLabel}>{label}</Text>
      <Text style={styles.sectionBody}>{body}</Text>
      {url && (
        <Pressable accessibilityRole="link" onPress={openUrl}>
          <Text style={styles.link}>{displayUrl}</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1, backgroundColor: colors.background },
  container: { padding: 16, gap: 16, paddingBottom: 40 },
  hero: {
    alignItems: "center",
    gap: 6,
    paddingVertical: 16,
  },
  heroEmoji: { fontSize: 52 },
  appName: {
    color: colors.text,
    fontSize: 22,
    fontWeight: "800",
    textAlign: "center",
  },
  versionBadge: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: "500",
  },
  section: {
    backgroundColor: colors.card,
    borderRadius: 18,
    padding: 16,
    gap: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  sectionLabel: {
    color: colors.accent,
    fontSize: 11,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },
  sectionBody: {
    color: colors.text,
    fontSize: 14,
    lineHeight: 22,
  },
  link: {
    color: colors.accent,
    fontSize: 13,
    textDecorationLine: "underline",
    marginTop: 4,
  },
});
