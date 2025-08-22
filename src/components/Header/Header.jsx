import Image from "next/image";
import React from "react";
import HeaderLink from "./HeaderLink";
import MobileHeader from "./MobileHeader";
import Link from "next/link";

const Header = () => {
  return (
    <div className="lg:w-full mx-0 lg:flex items-center  ">
      <div className="w-full lg:h-[72px]  p-[16px] lg:flex lg:justify-between">
        <div>
          <Link href="/">
          <Image
            src="/images/DjLogoWhite1.svg"
            alt="Logo"
            width={56}
            height={24}
            className="w-[56px] h-[24px] lg:w-[142px] lg:h-[40px] hidden lg:block"
          />
          </Link>
        </div>
        <div >
          <HeaderLink className=" " />
          <MobileHeader />
        </div>
      </div>
    </div>
  );
};

export default Header;
