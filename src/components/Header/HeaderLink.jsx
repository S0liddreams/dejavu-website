"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Projects" },
];

export default function HeaderLink() {
  const pathname = usePathname();

  return (
    <nav className="lg:w-[300px] lg:h-[40px] lg:flex lg:items-center border-1 border-[#FFFFFF59] lg:rounded-[100px] justify-between lg:gap-6 lg:px-1 bg-[#FFFFFF59] hidden ">
  {links.map((link) => {
    const isActive = pathname === link.href;

    return (
      <Link
        key={link.href}
        href={link.href}
        className={`text-lg font-medium lg:text-[14px] lg:flex lg:w-[100px] py-1  transition-all  hover:bg-white  hover:text-[#171717] hover:rounded-full
          ${isActive
            ? "bg-white text-[#171717] rounded-full px-3"
            : " text-white"
          }
          lg:justify-center lg:items-center`} 
      >
        {link.label}
      </Link>
    );
  })}
</nav>
  );
}
