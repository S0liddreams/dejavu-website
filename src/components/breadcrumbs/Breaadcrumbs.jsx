"use client";
import React from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation";

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
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="text-white hover:underline">
            Home
          </Link>
        </li>
        {crumbs.length > 0 && <span className='text-white'>/</span>}
        {crumbs.map((crumb, i) => (
          <li key={i} className="flex items-center space-x-2">
            {i !== 0 && <span className=''>/</span>}
            {crumb}
          </li>
        ))}
      </ol>
    </nav>
  );
}




