import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { SearchIcon } from "@heroicons/react/solid";
import { Transition } from "@headlessui/react";

import { navLinkItem, navLinkItemSmall } from "./Navbar.module.css";

const Navbar = ({ isOpen, setIsOpen, setMenuOpened }) => {
  return (
    <nav className="bg-transparent py-3 lg:py-7 fixed w-full z-10">
      <div className="flex w-full items-center ">
        <div className="font-ranua flex items-center justify-between w-full h-16">
          {/* LOGO */}
          <div className="flex-shrink-0 ml-5 lg:ml-16">
            <Link to="/">
              <StaticImage
                width={180}
                height={60}
                alt="MEMX logo"
                src="../images/MEMX_Logo_RBG_whiteandyellow.svg"
              />
            </Link>
          </div>

          <div className="hidden lg:flex space-x-9 lg:space-x-12">
            <Link to="/about" className={navLinkItem}>
              Company
            </Link>

            <Link to="/about" className={navLinkItem}>
              Exchange
            </Link>

            <Link to="/about" className={navLinkItem}>
              Data & Insights
            </Link>
          </div>

          <div className="hidden lg:flex space-x-6 lg:space-x-10 mr-16">
            <Link to="/about" className={navLinkItemSmall}>
              Contact
            </Link>

            <Link to="/about" className={navLinkItemSmall}>
              User Portal
            </Link>
            <Link to="/" className={navLinkItemSmall}>
              <SearchIcon className="inline h-6 w-6 pb-1 text-yellow" />
            </Link>
          </div>

          {/* BURGER ICON */}
          <div className="flex lg:hidden">
            <button
              className="text-white w-16 h-12 relative focus:outline-none bg-transparent mb-5"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <div className="block w-6 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${
                    isOpen ? "rotate-45" : ""
                  } ${!isOpen ? "-translate-y-2" : ""}`}
                ></span>

                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-6 bg-current transition-all transform duration-300 ease-in-out ${
                    isOpen ? "opacity-0" : ""
                  } `}
                ></span>

                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-6 bg-current transform  transition duration-500 ease-in-out ${
                    isOpen ? "-rotate-45" : ""
                  } ${!isOpen ? "translate-y-2" : ""}`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-175 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        beforeEnter={() => setMenuOpened(true)}
        afterLeave={() => setMenuOpened(false)}
      >
        <div className="lg:hidden" id="mobile-menu">
          <div className="h-screen bg-yellow text-black mt-3 pb-3 mx-5">
            <Link
              to="/about"
              className="font-bold flex justify-between px-3 py-3 border-b border-black items-center"
            >
              <div>Company</div>
              <div className="inline-flex">
                <StaticImage
                  width={16}
                  height={16}
                  alt="Right arrow"
                  src="../images/right-arrow.png"
                />
              </div>
            </Link>

            <Link
              to="/about"
              className="font-bold flex justify-between px-3 py-3 border-b border-black items-center"
            >
              <div>Exchange</div>
              <div className="inline-flex">
                <StaticImage
                  width={16}
                  height={16}
                  alt="Right arrow"
                  src="../images/right-arrow.png"
                />
              </div>
            </Link>

            <Link
              to="/about"
              className="font-bold flex justify-between px-3 py-3 border-b border-black items-center"
            >
              <div>Data & Insights</div>
              <div className="inline-flex">
                <StaticImage
                  width={16}
                  height={16}
                  alt="Right arrow"
                  src="../images/right-arrow.png"
                />
              </div>
            </Link>

            <Link to="/about" className="block px-3 py-3 border-b border-black">
              Contact
            </Link>

            <Link to="/about" className="block px-3 py-3 border-b border-black">
              User Portal
            </Link>

            <Link to="/about" className="block px-3 py-3 border-b border-black">
              Support Center
            </Link>
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
