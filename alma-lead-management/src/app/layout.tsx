"use client";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import "../styles/ globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//
import { store, persistor } from "@store/store";
import Header from "@/components/header/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const pathname = usePathname();
  const hideHeaderRoutes = ["/login"];
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {!hideHeaderRoutes.includes(pathname as string) && <Header />}

            {children}
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
