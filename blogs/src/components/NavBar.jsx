import { useState } from "react";
import React from "react";
import { FaBlog } from "react-icons/fa6";
import classnames from "classnames";

const NavBar = ({ onClick, addBlog, onLogout }) => {
  return (
    <header
      className="fixed z-20 top-0 flex flex-row w-full h-20 items-center justify-between bg-gray-800
        "
    >
      <a href="/">
        <div className="ml-[6%] flex flex-row justify-between items-center h-10 w-44">
          <div className="  w-10 h-10 flex justify-center items-center rounded-full bg-white text-center">
            <div
              className=" w-4 h-8 text-gray-800 font-sans text-2xl font-extrabold text-left
    "
            >
              B
            </div>
          </div>
          <div
            className=" font-sans font-bold text-2xl block text-white
      "
            id="brand"
          >
            MY BLOGS
          </div>
        </div>
      </a>

      <div class="  mb-7   w-[15%] h-6 mr-20 block">
        <ul
          className=" list-none flex justify-around items-center m-0 pl-0 w-full
         "
        >
          <li id="login-btn">
            <button
              type="button"
              class="button home btn text-white mx-5"
              onClick={() => {
                onClick("Sign In");
              }}
            >
              Sign in
            </button>
          </li>
          <li id="register-btn">
            <button
              type="button"
              class="button btn text-white mx-5"
              onClick={() => {
                onClick("Register");
              }}
            >
              Register
            </button>
          </li>
          <li id="addBlog-btn" className="hidden">
            <button
              type="button"
              class="button btn text-white mx-5"
              onClick={() => {
                addBlog();
              }}
            >
              {" "}
              <i class="fa-solid fa-plus"></i>Add Blog
            </button>
          </li>
          <li id="logout-btn" className="hidden">
            <button
              type="button"
              class="button btn text-white mx-5"
              onClick={() => {
                onLogout();
              }}
            >
              <i class="fa-solid fa-right-from-bracket"></i> Log Out
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
