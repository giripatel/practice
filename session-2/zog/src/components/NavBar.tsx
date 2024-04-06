import React from "react";
import logo from './logo.png'
function NavBar() {
  return (
    <div className="flex justify-between bg-black p-4">
      <div >
        <img src={logo} alt="" className="h-10"/>
      </div>    
      <div className="flex space-x-10 me-12 p-2">
        <h3 className="font-semibold text-lg hover:text-yellow-400 text-white">Home</h3>
        <h3 className="font-semibold text-lg hover:text-yellow-400 text-white">About</h3>
        <h3 className="font-semibold text-lg hover:text-yellow-400 text-white">Contact Us</h3>
      </div>
    </div>
  );
}


export default NavBar;
