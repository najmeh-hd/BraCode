import type { Metadata } from "next";
import "@fontsource/vazirmatn";
import { ThemeProvider } from "./providers/theme-provider";
import "../shared/styles/globals.css";
import Header from "../views/Header/Header";
import { images } from "@/shared/lib/images";
import { Footer } from "@/views/Footer/Footer";


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
        <ThemeProvider>
          <Header imageSrc={images.logo.src} title={images.logo.alt} />
          <main className="min-h-dvh bg-surface pb-20 pt-17">{children}</main>
          <Footer imageSrc={images.logo.src} title={images.logo.src} />
        </ThemeProvider>
      </body>
    </html>
  );
}
