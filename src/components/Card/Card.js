import React from "react";
// import vector1 from "../../images/Vector.png";
import "./Card.css";

const Card = () => {
  return (
    <div className="card gap-4 p-2 shadow-md">
      <div className="flex justify-between w-full mt-2">
        <div className="flex gap-2 items-center">
          {" "}
          <img src='/images/Vector.png' alt="logo" className="w-5 h-4" />
          <span className="font-bold text-xl">245</span>
        </div>
        <div className="flex gap-2 items-center bg-gray-100 p-2 rounded-2xl">
          {" "}
          <img src='/images/Shape.svg' alt="logo" className="w-5 h-5" />
          <span className="font-bold ">27</span>
        </div>
        {/* <div className="flex gap-2">
        <img src='/images/Vector.png' alt="logo" className="w-5 h-5" />
        <span>27</span>

        </div> */}
      </div>
      <div>
        <img src="/images/ezgif 2.png" alt="ezgif 2.png" />
      </div>
      <div className="flex flex-col   w-full">
      <h2>Danzel Washington</h2>
      <h1>Nike Air Jordon 1OG</h1>

      </div>
      <div className="flex justify-between w-full">
        <div className="flex items-center gap-1">
        <img src="/images/p2x.png" alt="hourglass" className="w-6 h-6" />
        <span>5 days Left</span>

        </div>
        <div className="flex items-center gap-2">
          <span>Last Bid</span>
          <img src="/images/log2.svg" alt="hourglass"  className="w-5 h-5"/>
        </div>
      </div>
    </div>
  );
};

export default Card;
