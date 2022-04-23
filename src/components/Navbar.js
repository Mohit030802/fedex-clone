import React from "react";

function Navbar() {
  return (
    <>
      <div className="flex  bg-purple-700  ">
        <div className="flex my-3 px-2 py-2 font-serif text-2xl mx-60">
          <div className="text-white ">FED</div>
         <div className="text-orange-600">EX</div>
        </div>
        <div className="flex my-3 font-bold hover:cursor-pointer text-justify">
          <div className="mr-2 px-3 py-2 hover:scale-105 hover:underline">Home</div>
          <div className="mr-2 px-3 py-2 hover:scale-105 hover:underline">About Us</div>
          <div className="mr-2 px-3 py-2 hover:scale-105 hover:underline">Contact</div>
          
          <div  className="mr-2 px-3 py-2 hover:scale-105 mx-32 hover:underline">Login/<a href="#">Sign Up</a></div>
         
          
        </div>
        
        
      </div>
    </>
  );
}

export default Navbar;
