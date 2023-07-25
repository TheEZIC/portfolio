import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainWrapper from "@components/MainWrapper";
import {FC, PropsWithChildren} from "react";
import "./index.scss";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export type RootLayoutProps = PropsWithChildren;

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainWrapper>
          {children}
        </MainWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
