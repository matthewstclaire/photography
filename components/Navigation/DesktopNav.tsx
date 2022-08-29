import React from "react";
import NAV_ITEMS from "./navItemData.js";
import Link from "next/link";
import { useRouter } from "next/router";

const DesktopNav = () => {
  const router = useRouter();
  return (
    <nav className="fixed w-full">
      <ul className="flex space-x-4">
        {NAV_ITEMS.map(({ id, title, route }) => (
          <li key={id}>
            <Link href={route} passHref>
              <a
                className={`${
                  router.pathname == `${route}` ? "text-pink-800" : "text-black"
                }`}
              >
                {title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNav;
