import React from "react";
import NAV_ITEMS from "./Navigation/navItemData";

const Footer = () => {
  return (
    <footer className="items-center mt-auto border-t-gray-200 border py-12 ">
      <div className="mx-[2vw]">
        <ul className="flex flex-col space-y-3">
          {NAV_ITEMS.map(({ id, title, route }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
