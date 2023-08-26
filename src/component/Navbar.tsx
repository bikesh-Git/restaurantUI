import Image from "next/image";
import CartIcon from "./CartIcon";
import Menu from "./Menu";
import Link from "next/link";

const page = () => {
  const user = false;
  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-20 lg:px-20 xl:px-40">
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">HomePage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div className="text-xl flex-1 md:text-center  md:font-bold">
        <Link href="/">BIZZA</Link>
      </div>

      <div className="md:hidden">
        <Menu />
      </div>

      <div className="hidden md:flex gap-4 items-center flex-1 justify-end">
        <div className="md:absolute top-2 right-2 lg:static flex items-center bg-orange-300 p-1 gap-2 rounded-lg">
          <Image src="/phone.png" alt="" height="25" width="25" /> 
          <span>213 3121 212</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/order">Order</Link>
        )}
        <Link href="/cart">
          <CartIcon />
        </Link>
      </div>
    </div>
  );
};

export default page;
