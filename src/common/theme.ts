import { MantineTheme, MantineThemeOverride } from "@mantine/core";

export const customTheme: MantineThemeOverride = {
  colors: {
    customRed: [
      "#CC1517",
      "#FEF4F5",
      "#ED1C2E",
      "#FF8787",
      "#FF6B6B",
      "#FA5252",
      "#F03E3E",
      "#E03131",
      "#C92A2A",
      "#A51111",
    ],
  },
  primaryColor: "customRed",
  white: "#FFFFFF",
  black: "#2C2C2C",
  components: {
    Button: {
      styles: (theme: MantineTheme) => ({
        root: {
          backgroundColor: theme.colors.customRed[0],
        },
      }),
    },
    Badge: {
      styles: (theme: MantineTheme) => ({
        root: {
          backgroundColor: theme.colors.customRed[0],
        },
      }),
    },
  },
};
