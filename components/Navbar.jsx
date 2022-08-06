import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [open, isSetOpen] = useState(false);

  const openHandler = () => {
    !open ? isSetOpen(true) : isSetOpen(false);
  };

  return (
    <div className="flex items-center justify-between font-bold text-white">
      <img src="/images/logo.svg" alt="" />
      <div className="hidden h-10 font-alata md:flex md:space-x-8">
        <div className="group">
          <Link href="#">About</Link>
          <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
        </div>
        <div className="group">
          <Link href="#">Careers</Link>
          <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
        </div>
        <div className="group">
          <Link href="#">Events</Link>
          <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
        </div>
        <div className="group">
          <Link href="#">Products</Link>
          <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
        </div>
        <div className="group">
          <Link href="#">Support</Link>
          <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
        </div>
      </div>

      {/* Hamburger Button */}

      <div className="md:hidden">
        <button
          id="menu-btn"
          type="button"
          className={
            open
              ? "open z-40 block hamburger md:hidden focus:outline-none"
              : "z-40 block hamburger md:hidden focus:outline-none"
          }
          onClick={openHandler}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={
          open
            ? "absolute top-0 bottom-0 left-0 flex md:hidden flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg font-thin text-white uppercase bg-black"
            : "absolute top-0 bottom-0 left-0 hidden flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg font-thin text-white uppercase bg-black"
        }
      >
        <Link href="#">
          <a className="hover:text-pink-500">About</a>
        </Link>
        <Link href="#">
          <a className="hover:text-pink-500">Careers</a>
        </Link>
        <Link href="#">
          <a className="hover:text-pink-500">Events</a>
        </Link>
        <Link href="#">
          <a className="hover:text-pink-500">Products</a>
        </Link>
        <Link href="#">
          <a className="hover:text-pink-500">Support</a>
        </Link>
        
      </div>
    </div>
  );
};

export default Navbar;
