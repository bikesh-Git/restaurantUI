import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
  return (
    <Link href="/cart">
  <div className="flex items-center gap-4">
      <div className="relative w-16 h-16 md:h-7 md:w-7">
        <Image src="/cart.png" alt="" fill />
      </div>

      <span>Cart (3)</span>
    </div>

    </Link>
  
  );
};

export default CartIcon;
