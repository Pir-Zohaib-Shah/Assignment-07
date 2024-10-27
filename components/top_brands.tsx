import React from "react";
import { Montserrat } from "@next/font/google";
import Image from "next/image";
import brooks from "@/public/top-brands/brooks.png";
import nike from "@/public/top-brands/nike.png";
import adidas from "@/public/top-brands/adidas.png";
import new_balance from "@/public/top-brands/new_balance.png";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "600",
});

const Top_brands = () => {
  return (
    <div>
      <div className="md:text-4xl">
        <div className={montserrat.className}>Top Brands</div>
      </div>
      <div className="flex justify-center space-x-5 md:space-x-10 md:hidden">
        <Image src={brooks} alt="brooks" className="w-28 mt-4 ml-5" />
        <Image src={nike} alt="nike" className="w-28  mt-4 ml-5" />
      </div>
      <div className="flex justify-center space-x-5 md:space-x-10 md:hidden">
        <Image src={adidas} alt="adidas" className="w-28 mt-4 ml-5" />
        <Image src={new_balance} alt="new balance" className="w-28 mt-4 ml-5" />
      </div>
      <div className="hidden md:block">
        <div className="flex space-x-10 mt-6 ml-8">
          <Image src={brooks} alt="brooks" className="w-48 cursor-pointer" />
          <Image src={nike} alt="nike" className="w-48 cursor-pointer" />
          <Image src={adidas} alt="adidas" className="w-48 cursor-pointer" />
          <Image src={new_balance} alt="new balance" className="w-48 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Top_brands;
