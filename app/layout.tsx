import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import Header from "./components/Header";
import Provider from "./components/Provider";

export const metadata: Metadata = {
  title: "ITOP1000 test task",
  description: "Test task for ITOP1000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="flex min-h-screen bg-slate-50">
        <Provider>
          <Header />

          {children}
        </Provider>
      </body>
    </html>
  );
}
