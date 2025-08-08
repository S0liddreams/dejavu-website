"use client";
import React from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation";

import { IoChevronForward } from "react-icons/io5";

export default function Breaadcrumbs() {
  const pathname = usePathname();

  const crumbs = pathname
    .split("/")
    .filter((crumb) => crumb)
    .map((crumb, idx, arr) => {
      const href = "/" + arr.slice(0, idx + 1).join("/");
      const isLast = idx === arr.length - 1;
      const label = decodeURIComponent(crumb).replace(/-/g, " ");

      return isLast ? (
        <span key={href} className="text-gray-200 capitalize">
          {label}
        </span>
      ) : (
        <Link key={href} href={href} className="text-white hover:underline capitalize">
          {label}
        </Link>
      );
    });

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-gray-600 mb-4">
      <ol className="flex items-center flex-wrap gap-x-2">
        <li>
          <Link href="/" className="text-white hover:underline">
            Home
          </Link>
        </li>
        {crumbs.map((crumb, i) => (
          <React.Fragment key={i}>
            <span className="text-white flex-row items-center"><IoChevronForward  className='text-[24px] font-light'/></span>
            <li className="flex items-center">
              {crumb}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
}
