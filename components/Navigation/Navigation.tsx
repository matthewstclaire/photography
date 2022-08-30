import React from "react";
import { useMediaQuery } from "react-responsive";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Navigation = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return <header>{isMobile ? <MobileNav /> : <DesktopNav />}</header>;
};

export default Navigation;
