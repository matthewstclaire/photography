import React from "react";
import NAV_ITEMS from "./navItemData.js";
import Link from "next/link";
import { Sling as Hamburger } from "hamburger-react";
import { useRouter } from "next/router";

const MobileNav = () => {
  const router = useRouter();

  const [isOpen, setOpen] = React.useState(false);
  return (
    <>
      <div className="float-right p-2">
        <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
      </div>
      {isOpen && (
        <nav className="absolute inset-0 bg-white pt-12 mx-[2vw]">
          <ul className="flex flex-col space-y-4">
            {NAV_ITEMS.map(({ id, title, route }) => (
              <li key={id} className="text-2xl">
                <Link href={route} passHref>
                  <a
                    className={`${
                      router.pathname == `${route}`
                        ? "text-pink-800"
                        : "text-black"
                    }`}
                  >
                    {title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default MobileNav;
