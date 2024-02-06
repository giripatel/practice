import React from "react";
import NavBar from "../components/NavBar";
import hand from "./hand.png";
function Homepage() {
  return (
    <div>
      <div>
        <NavBar />
        <div className="flex">
          <div className="w-4/6 flex flex-col mx-auto">
            <h1 className="ps-32 text-[198px] mb-0 font-serifs text-gray-200 font-extrabold">
              ZOGNEST
            </h1>
            <p className="text-gray-200 ps-32 mt-0 capitalize w-3/4"><span className="text-5xl">Hi</span>
              , We are a technology-based startup that finds digital solutions
              for your business. We build experiences for our customers. We
              believe that freedom gives rise to an experience.
            </p>
          </div>
          <div className="w-2/6">
            <img className={"h-[600px]"} src={`${hand}`} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
