"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];
const Nav = () => {
  const pathName = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              pathName === link.path && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent  transition-all text-[16px] lg:text-[18px] xl:text-[20px]`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
