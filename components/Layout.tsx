import React from "react";
import Head from "next/head";
import DesktopNav from "./Navigation/DesktopNav";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <DesktopNav />
      <main>{children}</main>
    </>
  );
}
