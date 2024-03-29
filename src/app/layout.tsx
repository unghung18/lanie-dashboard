import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import Header from "@/components/Header";
import PageWrapper from "@/components/PageWrapper";
import ReduxProvider from "@/redux/provider";
import { ThemeProvider } from "@/lib/ThemeProvider";

import { ToastContainer, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const karla = Karla({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Lanie Dashboard",
  description: "Admin lanie dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={karla.className}>
        <ReduxProvider>
          <ThemeProvider
            themes={['light', 'dark']}
            enableSystem
            disableTransitionOnChange>
            <main>{children}</main>
            <ToastContainer
              position="top-right"
              autoClose={1500}
              style={{ zIndex: 9999999 }}
              limit={5}
              transition={Slide}
            />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
