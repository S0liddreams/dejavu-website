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
    <nav className="xl:w-[300px] xl:h-[40px] xl:flex xl:items-center xl:rounded-[100px] justify-between xl:gap-6 xl:px-1 bg-[#FFFFFF59] ">
  {links.map((link) => {
    const isActive = pathname === link.href;

    return (
      <Link
        key={link.href}
        href={link.href}
        className={`text-lg font-medium xl:text-[14px] xl:flex xl:w-[100px] py-1 transition-all hover:bg-white hover:text-[#171717] hover:rounded-full
          ${isActive
            ? "bg-white text-[#171717] rounded-full px-3"
            : "text-gray-800"
          }
          xl:justify-center xl:items-center`} 
      >
        {link.label}
      </Link>
    );
  })}
</nav>
  );
}
