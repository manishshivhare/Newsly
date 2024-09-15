import React from "react";
import companyLogo from "../assets/newslyLogo.png";

const Footer = () => {
  return (
    <footer class="bg-white shadow dark:bg-gray-900 border-t dark:border-gray-700">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a
            href="http://manish-shivhare-newsly.netlify.app/"
            class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src={companyLogo}
              class="h-8 filter dark:invert"
              alt="Flowbite Logo"
            />
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <p class="hover:underline me-4 md:me-6">About</p>
            </li>
            <li>
              <p class="hover:underline me-4 md:me-6">Privacy Policy</p>
            </li>

            <li>
              <p class="hover:underline">Contact</p>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a
            href="http://manish-shivhare-newsly.netlify.app/"
            class="hover:underline"
          >
            Newsly™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
