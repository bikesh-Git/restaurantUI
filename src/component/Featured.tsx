"use client";
import Image from "next/image";
import React from "react";
import { featuredProducts } from "../data";

const Featured = () => {
  return (
    <div className="w-100vw  text-red-500 overflow-x-scroll">
      <div className="w-max flex ">
        {
          featuredProducts.map((el) => (
            <div className="w-screen p-4 h-[60vh] flex flex-col justify-around items-center hover:bg-pink-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh">
              <div className=" flex-1  hover:rotate-[60deg] transition-all duration-500">
             { el.img && <Image
                alt=""
                src={el.img}
                width={250}
                height={250}
                className="object-contain"
              />}
                </div>
            
              <div className="flex-1 flex flex-col items-center gap-5">
                <h1 className="font-bold  text-xl">{el.title}</h1>
                <p className=" text-sm">sdasdasd</p>
                <span className="font-bold ">$123.2</span>
                <button className="bg-red-500 text-white px-2 py-2 rounded-lg">
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Featured;
