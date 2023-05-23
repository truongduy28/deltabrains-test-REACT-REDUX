import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const FOOTER_ITEMS = ["About", "Privacy Policy", "Licensing", "Contact"];
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          <img src="https://deltabrains.vn/common/images/logo.png" alt="logo" />
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          {FOOTER_ITEMS.map((item) => (
            <li key={item}>
              <Link to="" className="mr-4 hover:underline md:mr-6 ">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
