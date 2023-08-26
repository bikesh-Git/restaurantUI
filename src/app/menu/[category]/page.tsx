import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  const pizza = [
    {
      id: 1,
      title: "Pannerr",
      desc: "dsad sd as da sd asdasd asd as dasd",
      img: "/temporary/p1.png",
      price: 43.22,
      option: [
        {
          title: "small",
          additionalPrice: 2.2,
        },
        {
          title: "mediam",
          additionalPrice: 3.2,
        },
        {
          title: "large",
          additionalPrice: 5.2,
        },
      ],
    },
    {
      id: 2,
      title: "Tandoorii",
      desc: "asdasd asd as dasd",
      img: "/temporary/p4.png",
      price: 12.22,
      option: [
        {
          title: "small",
          additionalPrice: 2.2,
        },
        {
          title: "mediam",
          additionalPrice: 3.2,
        },
        {
          title: "large",
          additionalPrice: 5.2,
        },
      ],
    },
    {
      id: 3,
      title: "Chiken Pitzz",
      desc: "asdasd asd as dasd",
      img: "/temporary/p3.png",
      price: 12.22,
      option: [
        {
          title: "small",
          additionalPrice: 2.2,
        },
        {
          title: "mediam",
          additionalPrice: 3.2,
        },
        {
          title: "large",
          additionalPrice: 5.2,
        },
      ],
    },
    {
      id: 4,
      title: "Tandoorii",
      desc: "asdasd asd as dasd",
      img: "/temporary/p1.png",
      price: 12.22,
      option: [
        {
          title: "small",
          additionalPrice: 2.2,
        },
        {
          title: "mediam",
          additionalPrice: 3.2,
        },
        {
          title: "large",
          additionalPrice: 5.2,
        },
      ],
    },
    {
      id: 5,
      title: "Tandoorii",
      desc: "asdasd asd as dasd",
      img: "/temporary/p5.png",
      price: 12.22,
      option: [
        {
          title: "small",
          additionalPrice: 2.2,
        },
        {
          title: "mediam",
          additionalPrice: 3.2,
        },
        {
          title: "large",
          additionalPrice: 5.2,
        },
      ],
    },
  ];

  return (
    <div className="flex flex-wrap md:flex-row text-red-500">
      {pizza.map((el) => (
        <Link
          href={`/product/${el.id}`}
          key={el.id}
          className="h-[60vh] p-4 w-full border-r-2 border-red-500 border-b-2 flex flex-col justify-between  group md:w-1/2 lg:w-1/3 even:bg-pink-100"
        >
          <div className="relative h-[80%]">
            {el.img && (
              <Image src={el.img} alt="" className="object-contain" fill />
            )}
          </div>

          <div className="flex items-center justify-between font-bold">
            <h1 className="text-2xl">{el.title}</h1>
            <h2 className="group-hover:hidden text-xl">${el.price}</h2>
            <button className="hidden group-hover:block   uppercase p-1 bg-red-500 text-white rounded-md ">
              Add to cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default page;
