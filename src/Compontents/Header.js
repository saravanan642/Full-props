import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let nagivate = useNavigate()
  return (
    <div >
      <div className="flex justify-between items-center px-6 py-4 bg-red-950 text-white">

        
        <h2 className=" font-bold text-xl border border-none pl-[20%] m-[30px] ">Saravanan</h2>

        <div className="font-semibold flex gap-[80%] border border-none pr-[30%]  m-[30px]">
          <a href="/Home">Home</a>
          <Link to={ "/Contact"} >Contact</Link>
          <a href="/Nave" className="" onClick={ ()=> nagivate ("/Nave")}>Nave</a>
        </div>
      </div>
    </div>
  );
};
export default Header;
