import React from "react";
import ShoeImages from "@/components/shoe-images";
import Cover from "@/public/cover.png";
import Image from "next/image";
import Top_brands from "@/components/top_brands";
import Top_offers from "@/components/top-offers";
import Accordion_provider from "@/components/accordion_provider";

const Home = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className=" max-w-[970px]">
          <div className="flex flex-col items-center md:items-start">
            <ShoeImages />
            <Image
              src={Cover}
              alt="cover pic"
              className="w-72 mt-5 ml-1 md:w-[961px]"
            />
            <div className="text-2xl mt-8 mr-5">
              <Top_brands />
            </div>
            <div>
              <Top_offers/>
            </div>
          </div>
        </div>
      </div>
            <div className="">
       <Accordion_provider/>
            </div>
    </>
  );
};

export default Home;
