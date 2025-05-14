'use client';
import { ReactNode } from 'react';
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/ globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


import { Provider } from 'react-redux';
//
import { store } from '@store/store';
import Header from '@/components/header/header';


export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <Provider store={store}>
          <Header/> {children}
      </Provider>
      </body>
    </html>
  );
}
