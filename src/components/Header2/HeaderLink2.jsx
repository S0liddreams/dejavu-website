"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Projects" },
];

export default function HeaderLink2() {
  const pathname = usePathname();

  return (
    <nav className="lg:w-[300px] lg:h-[40px] lg:flex lg:items-center border-1 border-[#FFFFFF59] lg:rounded-[100px] justify-between lg:gap-6 lg:px-1  hidden ">
  {links.map((link) => {
    const isActive = pathname === link.href;

    return (
      <Link
        key={link.href}
        href={link.href}
        className={`text-lg font-medium lg:text-[14px] lg:flex lg:w-[100px] py-1  transition-all  hover:bg-[#171717] text-[#171717]  hover:text-white hover:rounded-full
          ${isActive
            ? "bg-white text-[#171717] rounded-full px-2"
            : " text-[#171717]"
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
