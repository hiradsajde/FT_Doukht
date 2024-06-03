
import type { Metadata } from "next";
import Container from "@/components/container";
import { Provider } from "./context";
import { Inter } from "next/font/google";
import Navigation from "@/components/navigation";
import Cart from "../components/cart";
import { useContext } from "react";
import { cartContext } from "./context";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "دوخت برتر",
  description: "توضیحات در رابطه با دوخت برتر",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Cart/>
          <Navigation />
          <Container>{children}</Container>
        </Provider>
      </body>
    </html>
  );
}
