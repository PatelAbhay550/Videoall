import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdVideoStable } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { BiSolidUserCircle } from "react-icons/bi";
import { AiFillBell } from "react-icons/ai";
import { LiaSignInAltSolid } from "react-icons/lia";
import { IoSettings } from "react-icons/io5";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { CgDetailsMore } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="w-screen h-14 flex justify-between pl-8 pr-8 nav">
      <div className="leftn flex gap-2 items-center">
        <div className="logo">
          <Link to="/">
            {" "}
            <MdVideoStable className="text-4xl cursor-pointer" />
          </Link>
        </div>
        <div className="search">
          <input
            placeholder="Search"
            className="border outline-none border-1 rounded-lg"
            type="text"
            id="myInput"
          />
          <BsSearch className="searchicon" />
          <AiOutlineCloseCircle className="closeicon" />
        </div>
      </div>
      <div className="middlen">
        <ul className="flex gap-4 items-center pt-4">
          <li className="font-bold">
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li className="font-bold">
            {" "}
            <Link to="/trending">Trending</Link>
          </li>
          <li className="font-bold">
            {" "}
            <Link to="/categories">Categories</Link>
          </li>
          <li className="font-bold">
            {" "}
            <Link to="/subscription">Subscription</Link>
          </li>
        </ul>
      </div>
      <div className="rightn flex gap-4 pt-4">
        <AiFillBell title="notifications" className="text-3xl cursor-pointer" />

        <Link to="/settings">
          <IoSettings
            title="more options"
            className="text-3xl cursor-pointer"
          />
        </Link>
        <Link to="/channel">
          <LiaSignInAltSolid
            title="Sign in"
            className="text-3xl cursor-pointer"
          />
        </Link>
        <Link to="/categories">
          <CgDetailsMore className="text-3xl cursor-pointer more" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
