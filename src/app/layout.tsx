"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import { theme } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ChakraProvider theme={theme}>
      <body className={inter.className}>{children}</body>
    </ChakraProvider>
  );
}
