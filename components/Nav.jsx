"use client";

import Link from "next/link";
import { useContext } from "react";
import { CursorContext } from "./CursorContext";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/about",
    name: "About",
  },
  {
    href: "/treatments",
    name: "Readings",
  },
  {
    href: "/testimonials",
    name: "Testimonials",
  },
  {
    href: "/contact",
    name: "Contact",
  },

];

const Nav = () => {
  const pathname = usePathname();
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  
  return (
    <nav>
      <div className="container mx-auto flex gap-8">
        {links.map((link, index) => {
          return (
            <Link
              href={link.href}
              key={index}
              className={`${
                pathname === link.href && "border-b-2 border-accent"
              } uppercase hover:text-accent`}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;