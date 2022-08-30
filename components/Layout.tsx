import React from "react";
import Head from "next/head";
import DesktopNav from "./Navigation/DesktopNav";
import Footer from "./Footer";
import Navigation from "./Navigation/Navigation";
import { useMediaQuery } from "react-responsive";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}
