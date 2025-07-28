import Image from "next/image";
import React from "react";


import HeaderLink2 from "./HeaderLink2";
import MobileMenu2 from "./MobileHeader2";
import Link from "next/link";

const Header2 = () => {
  return (
    <div className="lg:w-full mx-0 lg:flex items-center  ">
      <div className="w-full lg:h-[72px] py-[16px] lg:flex lg:justify-between">
        <div>
          <Link href="/">
          <Image
            src="/images/logo2.svg"
            alt="Logo"
            width={56}
            height={24}
            className="w-[56px] h-[24px] lg:w-[93px] lg:h-[40px] hidden lg:block"
          />
          </Link>
        </div>
        <div >
          <HeaderLink2 className=" " />
          <MobileMenu2 />
        </div>
      </div>
    </div>
  );
};

export default Header2;
