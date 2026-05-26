import type { Metadata } from "next";
import "@fontsource/vazirmatn";
import { ThemeProvider } from "./providers/theme-provider";
import "../shared/styles/globals.css";

export const metadata: Metadata = {
  title: "Bracode",
  description: "از براکت تا Bracode - مسیر حرفه‌ای یادگیری",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
