import { useState } from "react";
import React from "react";
import { FaBlog } from "react-icons/fa6";
import classnames from "classnames";

const NavBar = () => {
  

  return (
<header className=" flex flex-row w-full h-28 items-center justify-between
        ">
        <div className="ml-[6%] flex flex-row justify-between items-center h-10 w-52">
            <div className="  w-10 h-10 flex justify-center items-center rounded-full bg-[#5B9BF3] text-center">
            <div className=" w-4 h-8 text-white font-sans text-2xl font-extrabold text-left
    ">E</div>    
            </div>
            <div className=" font-sans font-bold text-2xl block text-[#183153]
      " id="brand">E-Commerce</div>
        </div>
        
        <div class="dropdown">
            <div class="menu">
                <div class="bar st "></div>
                <div class="bar nd "></div>
                <div class="bar rd "></div>
            </div>
            <div class="dropdown-content">
                <a href="main.html"><button type="button" class="button home" >Home</button></a>
                <a href="products.html"><button type="button" class="button" >Products</button></a>
                <a href="cart.html"><button type="button" class="button">Cart</button></a>
             <a  id="dark_mode"><button  id="dark-drop"><i class="fa fa-moon-o" aria-hidden="true"> Dark</i></button></a>   
               <a id="light_mode"><button  id="light-drop"><i class="fas fa-sun " > Light</i></button></a> 
            </div>
          </div>
          
        <div class="     w-[30%] h-6 mr-6 block">
            <ul className=" list-none flex justify-between items-center m-0 pl-0 w-full
         ">
                <li><a href="main.html"><button type="button" class="button home" id="home">Home</button></a></li>
                <li><a href="products.html"><button type="button" class="button" id="products">Products</button></a></li>

                <li><a href="cart.html"><i class="fa-solid fa-cart-shopping" style="color: #5B9BF3;"> Cart</i></a></li>
                <li id="dm"><button  id="dark"><i class="fa fa-moon-o" aria-hidden="true" > Dark</i></button></li>
                <li id = "lm">
                    <button  id="light" ><i class="fas fa-sun" style="color: #5B9BF3;"> Light</i></button></li>
            </ul>
        </div>
    </header>
  );
};

export default NavBar;
