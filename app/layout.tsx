/* eslint-disable @next/next/no-page-custom-font */
import "./styles/globals.scss";
import "./styles/markdown.scss";
import "./styles/highlight.scss";
import { getClientConfig } from "./config/client";
import { type Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ChatGPT For U",
  description: "chatgpt, 强强玩机, ai聊天, 聊天机器人, 聊天, ai",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#151515" },
  ],
  appleWebApp: {
    title: "ChatGPT For U",
    statusBarStyle: "default",
  },
};

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <head>
//         <meta name="config" content={JSON.stringify(getClientConfig())} />
//         <link rel="manifest" href="/site.webmanifest"></link>
//         <script src="/serviceWorkerRegister.js" defer></script>
//         <script src="/matomo.js" defer></script>
//       </head>
//       <body>{children}</body>
//     </html>
//   );
// }
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="config" content={JSON.stringify(getClientConfig())} />
        <link rel="manifest" href="/site.webmanifest"></link>
        <Script src="/serviceWorkerRegister.js" strategy="afterInteractive" />
        <Script src="/matomo.js" strategy="afterInteractive" />
      </head>
      <body>{children}</body>
    </html>
  );
}
