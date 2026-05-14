import React from "react";
import { Stack } from "expo-router";
import { colors } from "../utils/colors";
import { useTheme } from "../hooks/useTheme";
import { LanguageProvider } from "../hooks/useLanguage";

export default function RootLayout() {
  const { isDark } = useTheme();

  return (
    <LanguageProvider>
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
      <Stack.Screen name="index" options={{ title: "1001 Excuses" }} />
      <Stack.Screen name="history" options={{ title: "History" }} />
      <Stack.Screen name="settings" options={{ title: "Settings" }} />
      <Stack.Screen
        name="categories/index"
        options={{ title: "Categories" }}
      />
      <Stack.Screen
        name="categories/[category]"
        options={{ title: "Category" }}
      />
    </Stack>
    </LanguageProvider>
  );
}
