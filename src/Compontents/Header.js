import React from "react";

const Header = () => {
  return (
    <div >
      <div className="flex justify-between items-center px-6 py-4">

        
        <h2 className="text-black font-bold text-xl border border-none pl-[20%] m-[30px]">Saravanan</h2>

        <div className="text-black font-semibold flex gap-[80%] border border-none pr-[30%]  m-[30px]">
          <a href="#">Home</a>
          <a href="#">Contact</a>
          <a href="#">Nave</a>
        </div>

      </div>
    </div>
  );
};

export default Header;
