import React from 'react';
import NAV_ITEMS from './Navigation/navItemData';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="items-center mt-auto border-t-gray-200 border py-3 ">
      <div className="mx-[2vw]">
        <ul className="flex justify-evenly">
          {NAV_ITEMS.map(({ id, title, route }) => (
            <li key={id}>
              <Link href={route} passHref>
                <a
                  className={`${
                    router.pathname == `${route}`
                      ? 'text-pink-800'
                      : 'text-black'
                  }`}
                >
                  {title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="w-full text-center text-xs align-bottom pt-5">
        Site made by Matthew St Claire
      </p>
    </footer>
  );
};

export default Footer;
