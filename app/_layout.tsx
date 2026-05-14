import React from "react";
import { Stack } from "expo-router";
import { colors } from "../utils/colors";
import { useTheme } from "../hooks/useTheme";
import { LanguageProvider, useLanguage } from "../hooks/useLanguage";

function NavigationStack() {
  const { isDark } = useTheme();
  const { t } = useLanguage();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: isDark ? colors.background : colors.card,
        },
        headerTintColor: colors.text,
        headerTitleStyle: { fontWeight: "700" },
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name="index" options={{ title: t.appTitle }} />
      <Stack.Screen name="history" options={{ title: t.history }} />
      <Stack.Screen name="settings" options={{ title: t.settings }} />
      <Stack.Screen
        name="categories/index"
        options={{ title: t.categories }}
      />
      <Stack.Screen
        name="categories/[category]"
        options={{ title: t.category }}
      />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <LanguageProvider>
      <NavigationStack />
    </LanguageProvider>
  );
}
