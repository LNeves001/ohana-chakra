import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: "Inter, sans-serif",
  },

  boxSizing: {
    boxSizing: "border-box",
  },

  colors: {
    white: {
      "500": "#FFFFFF",
    },
    gray: {
      "100": "#F2F2F2",
      "200": "#D9D9D9",
      "300": "#808080",
      "400": "#333333",
      "500": "#262626",
      "600": "#1A1A1A",
      "700": "#0D0D0D",
    },
    yellow: {
      "500": "#ECB62A",
    },
    orange: {
      Light: "#D57B5A",
    },
    pink: {
      "25": "#BF477E",
      Dark: "#B22D95",
    },
  },
});
