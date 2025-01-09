import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-[#1282A2] p-6">
      <div className="flex items-center mr-6">
        <Link href="/">
          <img
            src="https://i.ibb.co/kcRyh3q/pngegg-2.png"
            alt="Vibe Vault Logo"
            className="h-20 mr-3"
          />
        </Link>
        <div className="text-[#F4FFFD] text-xl">Vibe Vault</div>
      </div>

      <div className="w-full flex items-center justify-end">
        <Link href="/add" className="text-[#F4FFFD] mr-6">
          Add Photo
        </Link>
        <Link href="/" className="text-[#F4FFFD]">
          My Vault
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
