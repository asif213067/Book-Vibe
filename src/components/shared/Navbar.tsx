import Image from "next/image";
import React from "react";
import logo from "@/assets/book.ico";
import Link from "next/link";

const Navbar = () => {
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
            <li className="text-black">
              <Link href="/">Home</Link>
            </li>
            <li className="text-black">
              <Link href="/books">Books</Link>
            </li>
            <li className="text-black">
              <Link href="/listed-books">Listed Books</Link>
            </li>
            <li className="text-black">
              <Link href="/">Page To Read </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-1">
          <Image src={logo} alt="Book Vibe Logo" />
          <Link href="#" className="btn btn-ghost font-semibold text-lg">
            Book Vibe
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="text-black">
            <Link href="/">Home</Link>
          </li>
          <li className="text-black">
            <Link href="/books">Books</Link>
          </li>
          <li className="text-black">
            <Link href="/listed-books">Listed Books</Link>
          </li>
          <li className="text-black">
            <Link href="/">Page To Read </Link>
          </li>
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

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import logo from "@/assets/book.ico";

// const Navbar = () => {
//   const pathname = usePathname();
//   const [menuOpen, setMenuOpen] = useState(false);

//   const links = [
//     { name: "Home", href: "/" },
//     { name: "Books", href: "/books" },
//     { name: "Pages To Read", href: "/pages-to-read" },
//   ];

//   const isActive = (href) => pathname === href;

//   const linkClass = (href) =>
//     `rounded-lg border px-4 py-2 font-medium transition-all duration-200 ${
//       isActive(href)
//         ? "border-green-600 bg-green-50 text-green-700"
//         : "border-transparent text-slate-600 hover:border-green-300 hover:bg-green-50 hover:text-green-700"
//     }`;

//   return (
//     <div className="navbar sticky top-0 z-50 border-b border-green-100 bg-white/95 px-4 shadow-sm backdrop-blur-md sm:px-6 lg:px-8">

//       {/* Navbar Start */}
//       <div className="navbar-start">
//         {/* DaisyUI Mobile Dropdown */}
//         <div className="dropdown">
//           <button
//             type="button"
//             tabIndex={0}
//             className="btn btn-ghost btn-circle lg:hidden"
//             aria-label="Toggle navigation menu"
//             aria-expanded={menuOpen}
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             )}

//           </button>

//           {menuOpen && (
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content z-50 mt-3 w-56 rounded-2xl border border-green-100 bg-white p-3 shadow-xl"
//             >
//               {links.map((link) => (
//                 <li key={link.href}>
//                   <Link
//                     href={link.href}
//                     onClick={() => setMenuOpen(false)}
//                     className={linkClass(link.href)}
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}

//               <li className="mt-2 border-t border-green-100 pt-2 sm:hidden">
//                 <Link
//                   href="/signin"
//                   onClick={() => setMenuOpen(false)}
//                   className="rounded-lg px-4 py-2 font-semibold text-green-700 hover:bg-green-50"
//                 >
//                   Sign In
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </div>

//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-2">
//           <Image
//             src={logo}
//             alt="Book Vibe Logo"
//             width={36}
//             height={36}
//             priority
//           />

//           <span className="bg-linear-to-r from-slate-900 via-green-950 to-emerald-900 bg-clip-text text-xl font-extrabold tracking-tight text-transparent sm:text-2xl">
//             Book Vibe
//           </span>
//         </Link>
//       </div>

//       {/* DaisyUI Desktop Navbar Center */}
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal items-center gap-2 px-1">
//           {links.map((link) => (
//             <li key={link.href}>
//               <Link
//                 href={link.href}
//                 className={linkClass(link.href)}
//               >
//                 {link.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Navbar End */}
//       <div className="navbar-end gap-2">
//         <Link
//           href="/signin"
//           className="hidden rounded-xl border border-green-600 px-4 py-2 font-semibold text-green-700 transition hover:bg-green-50 sm:inline-flex"
//         >
//           Sign In
//         </Link>

//         <Link
//           href="/signup"
//           className="rounded-xl bg-linear-to-r from-slate-900 via-green-950 to-emerald-900 px-4 py-2 font-semibold text-white shadow-md shadow-green-900/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:px-5"
//         >
//           Sign Up
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
