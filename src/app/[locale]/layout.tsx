import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import Menu from "@/components/Menu";

const martel = localFont({
  src: [
    { path: "../../../public/fonts/martel/martel-latin-200.woff2", weight: "200" },
    { path: "../../../public/fonts/martel/martel-latin-300.woff2", weight: "300" },
    { path: "../../../public/fonts/martel/martel-latin-400.woff2", weight: "400" },
    { path: "../../../public/fonts/martel/martel-latin-600.woff2", weight: "600" },
    { path: "../../../public/fonts/martel/martel-latin-700.woff2", weight: "700" },
    { path: "../../../public/fonts/martel/martel-latin-800.woff2", weight: "800" },
    { path: "../../../public/fonts/martel/martel-latin-900.woff2", weight: "900" },
  ],
  variable: "--font-martel",
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const tHome = await getTranslations({ locale, namespace: "HomePage" });
  const tMeta = await getTranslations({ locale, namespace: "Metadata" });
  const siteName = tHome("title");
  return {
    title: {
      default: siteName,
      template: `%s - ${siteName}`,
    },
    description: tMeta("siteDescription"),
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} style={{ scrollBehavior: 'smooth' }} suppressHydrationWarning>
      <body className={`${martel.variable} antialiased bg-[#F9F7F2] text-[#333333] font-serif`} suppressHydrationWarning>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Menu />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
