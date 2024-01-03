import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="my-[50px] mx-0 text-center">
      <h1 className="text-[#304ffe] text-4xl mb-[20px] font-semibold">Contact App</h1>
      <p className="text-gray-500">
        <Link
          href="https://botostart.ir "
          className="text-[#304ffe] bg-[#bbdefb] px-[5px] py-[3px] hover:text-[#bbdefb] transition-all ease-in-out 0.2s hover:bg-[#304ffe] rounded-[5px] "
        >
          Botostart
        </Link>
        {""} | React.js Full Course 2024
      </p>
    </div>
  );
}

export default Header;
