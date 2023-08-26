"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { id: 1, title: "HomePage", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 4, title: "Working Hours", url: "/" },
    { id: 5, title: "Contact", url: "/" },
  ];

  const user = false;

  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(true)}
          className="cursor-pointer"
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(false)}
          className="cursor-pointer"
        />
      )}


     {open && <div className="bg-red-500 absolute left-0 top-24 w-full text-white flex h-[calc(100vh-6rem)] flex-col gap-8 items-center justify-center text-3xl z-10 ">
        {links.map((link) => (
          <Link href={link.url} key={link.id}  onClick={() => setOpen(false)} >
            {link.title}
          </Link>
        ))}
        {!user ? (
          <Link href="/login"  onClick={() => setOpen(false)} > Login </Link>
        ) : (
          <Link href="/order"  onClick={() => setOpen(false)} > Order </Link>
        )}
        <Link href="/cart"  onClick={() => setOpen(false)}>
          <CartIcon />
        </Link>
      </div>}
    </div>
  );
};

export default Menu;
