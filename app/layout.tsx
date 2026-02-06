"use client"
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider, MantineThemeOverride, createTheme, mantineHtmlProps, rem } from '@mantine/core';
import { useState } from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';

export const mantineTheme: MantineThemeOverride = createTheme({
  fontSizes: {
    xs: rem("12px"),
    sm: rem("14px"),
    md: rem("16px"),
    lg: rem("18px"),
    xl: rem("20px"),
    "2xl": rem("24px"),
    "3xl": rem("30px"),
    "4xl": rem("36px"),
    "5xl": rem("48px"),
  },
  spacing: {
    "3xs": rem("4px"),
    "2xs": rem("8px"),
    xs: rem("10px"),
    sm: rem("12px"),
    md: rem("16px"),
    lg: rem("20px"),
    xl: rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
  },
  primaryColor: "teal",
  other: {
    style: "mantine",
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [value, setValue] = useState('light');

  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={mantineTheme} defaultColorScheme='dark'>
          <ThemeToggle></ThemeToggle>
          {children}
          </MantineProvider>
      </body>
    </html>
  );
}