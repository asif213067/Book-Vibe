import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className=" mt-4">
      <div className="container mx-auto grid grid-cols-2 gap-4 items-center m-3 p-8 bg-slate-300 rounded-2xl">
        <div className="pl-8">
          <h1 className="text-4xl font-bold mb-6">
            Books to freshen up <br /> your bookshelf
          </h1>
          <button className="font-semibold bg-green-400 text-white rounded px-3 py-1.5 ">
            View The List
          </button>
        </div>

        <div className="pr-8">
          <Image src={bannerImg} alt="Banner Section Image" className="rounded" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
