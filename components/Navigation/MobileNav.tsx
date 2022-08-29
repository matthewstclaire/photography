import React from "react";
import NAV_ITEMS from "./navItemData.js";
import Link from "next/link";

const DesktopNav = () => {
  return (
    <div>
      <ul>
        {NAV_ITEMS.map(({ id, title, route }) => (
          <li key={id}>
            <Link href={route} passHref>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DesktopNav;
