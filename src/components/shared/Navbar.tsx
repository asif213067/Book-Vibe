import Image from "next/image";
import React from "react";
import logo from "@/assets/book.ico";
import Link from "next/link";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link href='#'>Home</Link>
      </li>
      <li>
        <Link href='#'>Listed Books</Link>
      </li>
      <li>
        <Link href='#'>Pages To Read</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center gap-1">
          <Image src={logo} alt="Book Vibe Logo" />
          <Link href='#' className="btn btn-ghost font-bold text-lg">Book Vibe</Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <button className="font-semibold bg-green-400 text-white rounded px-3 py-1.5 ">
          Sing in
        </button>
        <button className="font-semibold bg-blue-400 text-white rounded px-3 py-1.5">
          Sing up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
